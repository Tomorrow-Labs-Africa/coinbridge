import IntaSend = require('intasend-node');
import * as dotenv from 'dotenv';

dotenv.config();

const TOKEN = process.env.INTASEND_SECRET_TOKEN;
const PUBLISHABLE_KEY = process.env.INTASEND_PUBLISHABLE_KEY;

const intasend = new IntaSend(
  PUBLISHABLE_KEY,
  TOKEN,
  true,
);



export const sendMobileMoney = async (phoneNumber: string, name: string, amount: number, narrative: string) => {
  try {
    const response = await intasend.payouts().mpesa({
      currency: 'KES',
      transactions: [{
        name,
        account: phoneNumber,
        amount: amount.toString(),
        narrative,
      }],
    });
    console.log(`Mobile money payout sent to ${name} (${phoneNumber}) for ${amount} KES with narrative "${narrative}"`);
    console.log(`Payouts response:`, response);
  } catch (err) {
    console.error(`Error sending mobile money payout:`, err);
    console.error(err.toString('ascii'));
  }
};

export const requestMpesaPayment = async (firstName: string, lastName: string, email: string, phoneNumber: string, amount: number, host: string = "https://coinbridge.io", apiRef: string = "Collect") => {
  try {
    const response = await intasend.collection().mpesaStkPush({
        first_name: firstName,
        last_name: lastName,
        email: email,
        host: host,
        amount: amount,
        phone_number: phoneNumber,
        api_ref: apiRef
      })
      console.log(`Mobile money payment request sent to ${firstName} ${lastName} (${phoneNumber}) for ${amount} KES`);
      console.log(`Request response:`, response);
      return response;
    } catch (err) {
      console.log(err);
      console.log(err.toString('ascii'));
      return err;
    }
}
