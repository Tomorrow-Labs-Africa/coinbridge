import { Box, Container, TextField, Button, Grid, Typography } from "@mui/material";
import { useSendMoney } from "../Services/useSendMoney";
import MuiPhoneNumber from "material-ui-phone-number";
import { sendToken } from "../Services/sendToken";
import { toast } from "react-toastify"
import withdraw from '../../assets/withdraw.svg'
import { useState, useEffect } from 'react';
function OffRamp () {

    const [value, setValue] = useState(0);
    const rate =154
    const handleChange = (event:any) => {
        setValue(event.target.value);
      };
    const convertedValue = value * rate;

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
        // toast('success', {type: "success"})

        if(result?.transactionHash){
            try {
                sendMoney(offRampData)
                toast(`Your KES ${totalAmount} has successfully been processed`, {type: "success"})

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
                    <img src={withdraw} width={40} height={40} alt="logo" />
                </Grid>
                <Typography marginTop={1} marginBottom={3} fontSize={20}>
                    Withdraw
                </Typography>


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
                    InputLabelProps={{shrink: true}}
                    InputProps={{
                        endAdornment: <div style={{ fontSize: '0.9rem', color: '#999' }}>~KES{convertedValue}</div>,
                      }}
                    value={value}
                    onChange={handleChange}
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
                sx={{
                    marginTop:4,
                    padding:1,
                    backgroundColor:'#357074'
                }}
                variant="contained"
                type='submit'
                fullWidth>
                Withdraw cUSD
            </Button>
    
    
                </Box>
            </Container>
        </Box>
    
    
        );
    

}

export default OffRamp