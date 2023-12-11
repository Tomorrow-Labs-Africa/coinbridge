import { providers, Contract, ethers } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { COLLECTION_ESCROW, CUSD_CONTRACT, RPC_URL } from "../constants"


export const sendCUSD = async (
    cusdAmount?:string )=>{
    
        let rpcUrl = RPC_URL
        const pk = ``

        const provider = new ethers.providers.JsonRpcProvider(rpcUrl);
        const wallet = new ethers.Wallet(pk, provider);
        const gasPrice  = await (await provider.getFeeData()).gasPrice;
        const nonce = await provider.getTransactionCount(wallet.getAddress());
  
        // TODO make this dynamic
        const result = await wallet.sendTransaction({
            to: '0xb5B00313da3aA8F6463228DBFD6A23740Ca291a1',
            value: ethers.utils.parseEther('0.1'),
            gasPrice:  gasPrice!,
            nonce: nonce,
        })

        console.log('result: ', result)

        return result


}

declare global {
    interface Window {
      ethereum: any;
    }
}