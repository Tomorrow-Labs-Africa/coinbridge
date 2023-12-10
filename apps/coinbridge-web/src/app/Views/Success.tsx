import { Box, Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useSendMoney } from "../Services/useSendMoney";
import MuiPhoneNumber from "material-ui-phone-number";
import { sendToken } from "../Services/sendToken";
import { toast } from "react-toastify"
import succeess from '../../assets/success.svg'
function Success () {

    const {mutate:sendMoney} = useSendMoney()

    const offRamp =  async(event:any) =>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);
        const usdToKes = 154;
        const amount = data?.get('amount');

        const totalAmount = amount ? parseFloat(amount.toString())* usdToKes : 0;

        const offRampData = {
            phoneNumber: data.get('phone')?.toString().substring(1),
            name: data.get('fullName'),
            amount: totalAmount
        }

        // TODO replace with string value of amount
        const result = await sendToken('0.0001')
        toast('success', {type: "success"})

        if(result?.transactionHash){
            try {
                sendMoney(offRampData)
            } catch (error) {
                toast('Failure somewhere', {type: "error"});
            }

        }
    }

    return (
        <Box sx={{ width: '100%' }}>
            <Container component="main" maxWidth="xs">
                <Box
                    component="form"
                    onSubmit={offRamp}
                    sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                
                <Grid container item xs={12} sx={{justifyContent:'center', textAlign:'center'}}>
                    <img src={succeess} width={200} height={200} alt="logo" />
                </Grid>

                <Typography 
                    marginTop={5}
                    fontSize={18}
                    textAlign={"center"}
                    >
                    
                    <strong>20 cUSD</strong> has been deposited into your account
                </Typography>



    
            <Button             
                sx={{
                    marginTop:16,
                    padding:1,
                    backgroundColor:'#357074',
                }}
                variant="contained"
                type='submit'
                fullWidth
                >
                Done
            </Button>
    
    
                </Box>
            </Container>
        </Box>
    
    
        );
    

}

export default Success