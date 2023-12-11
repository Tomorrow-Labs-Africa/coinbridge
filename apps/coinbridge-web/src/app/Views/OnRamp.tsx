import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material";
import MuiPhoneNumber from "material-ui-phone-number";
import { useRequestMoney } from "../Services/useRequestMoney";
import wallet from '../../assets/wallet.svg'
import { useState } from "react";
import { sendCUSD } from "../Services/sendCUSD";

// {
//     "firstName": "Jeffrey",
//     "lastName": "Kingori",
//     "email": "jeffreygithongo@gmail.com",
//     "phoneNumber":"254710113242",
//     "amount": 10
// }

function OnRamp () {

    const [value, setValue] = useState(0);
    const rate =154
    const handleChange = (event:any) => {
        setValue(event.target.value);
      };

      const convertedValue = value/rate;


    const {mutate:requestMoney} = useRequestMoney()

    const onRamp = async(event:any) =>{
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        const kesToUsd = 0.0065
        const amount = data?.get('amount');
        const totalAmount = amount ? parseFloat(amount.toString())* kesToUsd : 0;

        const onRampData = {
            firstName: 'test',
            lastName:'test',
            email:'coinbridgeafrica@gmail.com',
            phoneNumber: data?.get('phone')?.toString().substring(1),
            amount: amount ? parseFloat(amount.toString()) : 0
        }

        console.log('onRampData: ', onRampData)

        await requestMoney(onRampData)
        // TODO send payment to wallet
    }

    return (
    <Box sx={{ width: '100%' }}>
        <Container component="main" maxWidth="xs">
            <Box
                component="form"
                onSubmit={onRamp}
                sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                }}
            >
            <Grid container item xs={12} sx={{justifyContent:'center', textAlign:'center'}}>
                <img src={wallet} width={40} height={40} alt="logo" />
            </Grid>
            <Typography marginTop={1} marginBottom={3} fontSize={20}>
                Deposit
            </Typography>

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
        <TextField
            required
            fullWidth
            label="Amount in Ksh"
            name='amount'
            type="number"
            margin="normal"
            InputLabelProps={{
            shrink: true,
            }}
            InputProps={{
                endAdornment: <div style={{ fontSize: '0.9rem', color: '#999' }}>~{convertedValue.toFixed(2)}cUSD</div>,
              }}
            value={value}
            onChange={handleChange}
        />


        <Button
            sx={{
                marginTop:4,
                padding:1,
                backgroundColor:'#357074'
            }}
            variant="contained"
            type="submit"
            fullWidth>
            Buy cUSD
        </Button>


            </Box>
        </Container>
    </Box>


    );


}

export default OnRamp;