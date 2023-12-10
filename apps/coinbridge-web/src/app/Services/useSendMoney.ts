import axios from "axios"
import { useMutation } from "react-query"
import { toast } from "react-toastify"
import { BASE_URL } from "../constants"

export const sendMoney = (paymentDetails:any) =>{
    return axios.post(`${BASE_URL}/transactions/sendMobileMoney`, paymentDetails)
    .then((response)=>{
        if(response.status == 200){
            toast('Successful Payment made', {type: "success"});            
        }
    }, (error) => {
        toast(error, {type: "error"});
    })

}

export const useSendMoney = () => {
    return useMutation(sendMoney)
}