import { providers, Contract, ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import * as dotenv from 'dotenv';
dotenv.config();

const RPC_URL = 'https://forno.celo.org'
const CUSD_CONTRACT = '0x765DE816845861e75A25fCA122bb6898B8B1282a'
export const sendCUSD = async (
    cusdAmount?:string )=>{
    
        let rpcUrl = RPC_URL
        const pk:string = (process.env.PK as string)
        console.log('pk: ', pk)



        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const wallet = new ethers.Wallet(pk, provider);
        let abi = ["function transfer(address to, uint256 value)"]
        const contract = new Contract(CUSD_CONTRACT,abi,wallet);
        let tx = await contract.transfer('0xb5B00313da3aA8F6463228DBFD6A23740Ca291a1', parseEther('0.1'))

        let receipt = await tx.wait();

        console.log('Receipt is: ', receipt)
        return receipt
        // const gasPrice  = await (await provider.getFeeData()).gasPrice;
        // const nonce = await provider.getTransactionCount(wallet.getAddress());
  
        // // TODO make this dynamic
        // const result = await wallet.sendTransaction({
        //     to: '0xb5B00313da3aA8F6463228DBFD6A23740Ca291a1',
        //     value: ethers.utils.parseEther('0.1'),
        //     gasPrice:  gasPrice!,
        //     nonce: nonce,
        // })

        // console.log('result: ', result)

        // return result


}

declare global {
    interface Window {
      ethereum: any;
    }
}