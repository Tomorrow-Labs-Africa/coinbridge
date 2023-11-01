import * as dotenv from 'dotenv';

dotenv.config();

export const getAccount = (address: string)=>{
    return `${process.env.EXPLORER}/${address}`
}