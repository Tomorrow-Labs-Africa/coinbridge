import axios from "axios"
import { useMutation } from "react-query"
import { toast } from "react-toastify"
import { BASE_URL } from "../constants"

export const requestMoney = (requestDetails:any) =>{
    return axios.post(`${BASE_URL}/transactions/requestMobileMoney`, requestDetails)
    .then((response)=>{
        if(response.status == 200){
            toast('Successful Payment Request made', {type: "success"});            
        }
    }, (error) => {
        toast(error, {type: "error"});
    })

}

export const useRequestMoney = () => {
    return useMutation(requestMoney)
}