import axios from 'axios';
import moment from 'moment';
import * as crypto from 'crypto';
import * as fs from 'fs';



const JENGA_MERCHANT_CODE  = `${process.env.JENGA_MERCHANT_CODE}`;
const JENGA_PASSWORD = `${process.env.JENGA_PASSWORD}`;
const JENGA_API_KEY = `${process.env.JENGA_API_KEY}`;
const SERVER_URL = `${process.env.JENGA_BASE_URL}`;
const AUTH_ENDPOINT = "/authentication/api/v3/authenticate/merchant";
const SEND_MONEY_ENDPOINT = "/v3-apis/transaction-api/v3.0/remittance/sendmobile";

const account_id = `${process.env.ACCOUNT_ID}`;

const generateReferenceCode = (): string => {
  const today = moment();
	return today.valueOf().toString()
}

const getAccessToken = async () => {
	try {
		const res = await axios({
			method: 'post',
			url: SERVER_URL + AUTH_ENDPOINT,
			data: {
				merchantCode: JENGA_MERCHANT_CODE,
				consumerSecret: JENGA_PASSWORD,
			},
			headers: {
				'Content-Type': 'application/json',
				'Api-key': JENGA_API_KEY  ,
			},
		});
		//
		return res.data.accessToken;
	} catch (error) {
    console.log(error)
		throw new Error('Could not get access Token');
	}
};

const getSendToUserMobileSignature = async (
	amount: string,
	currencyCode: string,
	referenceCode: string
) => {
	const jenga_transfer_account_id =
		amount + currencyCode + referenceCode + account_id; 

	const sign = crypto.createSign('SHA256');
	sign.write(jenga_transfer_account_id);
	sign.end();

	const privateKeyPEM = fs.readFileSync('private_key.pem', 'utf8');
  const privateKey = crypto.createPrivateKey({
    key: privateKeyPEM,
  });
	const signature_b64 = sign.sign(privateKey, 'base64');
	return signature_b64;
};

const getTimeStamp = async () => {
	const timestamp = new Date();
	let dd: any = timestamp.getDate();
	let mm: any = timestamp.getMonth() + 1;
	const yyyy = timestamp.getFullYear();
	if (dd < 10) {
    dd = dd.toString();
		dd = '0' + dd;
	}
	if (mm < 10) {
    mm = mm.toString();	
		mm = '0' + mm;
	}
	let today = yyyy + '-' + mm + '-' + dd;
	return today;
};

export const sendFromJengaToMobileMoney = async (
	amount: string,
	recipientName: string,
	mobileNumber: string
) => {
	const currencyCode = 'KES';
	const countryCode = 'KE';
	try {
		const access_token = await getAccessToken();
		let referenceCode = await generateReferenceCode();
		const signature = await getSendToUserMobileSignature(
			amount,
			currencyCode,
			referenceCode
		);
		const date = await getTimeStamp();
		const res = await axios({
			method: 'post',
			url: SERVER_URL + SEND_MONEY_ENDPOINT,
			headers: {
				Authorization: `Bearer ${access_token}`,
				signature: signature,
				'Content-Type': 'application/json',
			},
			data: {
				source: {
					countryCode: countryCode,
					name: 'CoinBridge Offramp Service',
					accountNumber: account_id,
				},
				destination: {
					type: 'mobile',
					countryCode: countryCode,
					name: recipientName,
					mobileNumber: mobileNumber,
					walletName: 'Mpesa',
				},
				transfer: {
					type: 'MobileWallet',
					amount: amount,
					currencyCode: currencyCode,
					reference: referenceCode,
					date: date,
					description: 'Cash From CoinBridge via Jenga',
				},
			},
		});
		//
		let response =  await res.data;
    console.log("========= RESPONSE ==========");
    console.log(response);
    return response;
	
	} catch (e) {
    console.log("========= ERROR ==========");
    console.log(e);
    return e;
  }
};
