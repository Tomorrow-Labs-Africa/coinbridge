import { providers, Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";
import { COLLECTION_ESCROW, CUSD_CONTRACT } from "../constants"

export const sendToken = async (
    cusdAmount?:string )=>{
    if (window.ethereum && window.ethereum.isMiniPay) {
        const provider = new providers.Web3Provider(window.ethereum);
        const signer = await provider.getSigner();

        const accountAddress = await signer.getAddress()

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