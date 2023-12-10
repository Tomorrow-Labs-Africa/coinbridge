import { ethers } from "ethers";
import erc20Abi from '../abi/ERC20.json';
import { CUSD_CONTRACT, RPC_URL } from "../constants";

export const useGetBalance = async (accountAddress:string) => {

    const provider = new ethers.providers.JsonRpcProvider(RPC_URL);
    const contract = new ethers.Contract(CUSD_CONTRACT, erc20Abi, provider);
    const balance = await contract.balanceOf(accountAddress);
    const decimals = await contract.decimals();
    const cUSDBalance = parseFloat(ethers.utils.formatUnits(balance, decimals));

    return cUSDBalance;
}