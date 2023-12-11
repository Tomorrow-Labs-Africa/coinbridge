import { providers, Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";

const CUSD_CONTRACT = '0x765DE816845861e75A25fCA122bb6898B8B1282a'
const COLLECTION_ESCROW='0xf9436398a70146f58f535c6b93d6845d1afb390b'


export const sendCUSD = async (
    cusdAmount?:string )=>{
    if (window.ethereum && window.ethereum.isMiniPay) {
        const provider = new providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();

        let abi = ["function transfer(address to, uint256 value)"]
        const contract = new Contract(CUSD_CONTRACT,abi,signer);
        let tx = await contract.transfer(COLLECTION_ESCROW, parseEther('0.001'))

        let receipt = await tx.wait();

        console.log('Receipt is: ', receipt)
        return receipt

    } else {
        console.error("MiniPay provider not detected");
    }


}

declare global {
    interface Window {
      ethereum: any;
    }
}