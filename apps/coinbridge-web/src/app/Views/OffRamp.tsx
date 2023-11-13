import { Box, Container, TextField, Button } from "@mui/material";
import { useSendMoney } from "../Services/useSendMoney";
import MuiPhoneNumber from "material-ui-phone-number";
import { sendToken } from "../Services/sendToken";
import { toast } from "react-toastify"

function OffRamp () {

    const {mutate:sendMoney} = useSendMoney()


    const offRamp =  async(event:any) =>{
        event.preventDefault();

        const data = new FormData(event.currentTarget);

        console.log(data.get('phone')?.toString().substring(1));

        // TODO convert usd to kes
        // TODO check balance before withdrawal
        const offRampData = {
            phoneNumber: data.get('phone')?.toString().substring(1),
            name: "Jeffrey Kingori",
            amount: 10
        }

        console.log('This is offramp data ', offRampData)

        // TODO send money to escrow
        const result = await sendToken('0.0001')
        toast(result?.status, {type: "success"})

        if(result?.status == 1){
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
                <h3>Withdraw</h3>
                <TextField
                    required
                    fullWidth
                    label="Name"
                    type="text"
                    margin="normal"
                    name='fullName'
                    InputLabelProps={{
                    shrink: true,
                }}
                />
                <TextField
                    required
                    fullWidth
                    label="USD Amount"
                    type="number"
                    name='amount'
                    margin="normal"
                    InputLabelProps={{
                    shrink: true,
                }}
                />
    
                <MuiPhoneNumber
                    variant="outlined"
                    fullWidth
                    margin="normal"
                    required
                    defaultCountry={"ke"}
                    onlyCountries={['ke','gh']}
                    label="Phone"
                    name="phone"
                    autoFocus
                    sx={{
                        svg: {
                        height: "20px",
                        },
                    }}
                    onChange={console.log} />

    
            <Button 
                variant="contained"
                type='submit'
                fullWidth>
                WITHDRAW CUSD
            </Button>
    
    
                </Box>
            </Container>
        </Box>
    
    
        );
    

}

export default OffRamp