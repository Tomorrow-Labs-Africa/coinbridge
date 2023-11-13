import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import MuiPhoneNumber from 'material-ui-phone-number';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { Box, Container } from '@mui/material';
import { ethers, providers } from 'ethers'
import { CUSD_CONTRACT } from '../constants';
import erc20Abi from '../abi/ERC20.json';
import { sendToken } from '../Services/sendToken';




declare global {
  interface Window {
    ethereum: any;
  }
}


function Airtime() {



  const [balance, setBalance]=useState(0)
  // const [result, setResult] = useState<any>()

  const buyAirtime = async (event:any) =>{
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const airtimeData ={
      phoneNumber : data.get('phone'),
      network: data.get('network'),
      amount: data.get('amount')
    }

    // call collection api
    console.log('airtimeData', airtimeData)
    // const result = await sendMobileMoney('2324','test', 10,'lol')

    // if(result?.status == 1){
    //   // Send money via instasend and show toast
    // }
    // console.log('the result is: ', result)
    // setResult(result)

  }

  useEffect(() =>{

    async function getBalance() {
      if (window.ethereum && window.ethereum.isMiniPay) {
        const provider = new providers.Web3Provider(window.ethereum);
        // Get the signer (user's account)
        const signer = await provider.getSigner();
        // Get the user's Ethereum address
        const address = await signer.getAddress();

        // get cUSD balance
        const contract = new ethers.Contract(CUSD_CONTRACT, erc20Abi, provider);
        const balance = await contract.balanceOf(address);
        const decimals = await contract.decimals();
        const cUSDBalance = parseFloat(ethers.utils.formatUnits(balance, decimals));

        setBalance(cUSDBalance)
          
      } else {
          console.error("MiniPay provider not detected");
      }
      
    }
    getBalance()

  }, [balance])



    const Networks = [
        {
          value: 'Safaricom',
          label: 'Safaricom',
        },
        // {
        //   value: 'Airtel',
        //   label: 'Airtel',
        // },
        // {
        //   value: 'MTN',
        //   label: 'MTN',
        // },
      ];

      // set useEffect




    return (
      <Box sx={{ width: '100%' }}>
        <Container component="main" maxWidth="xs">
            <Box
              component="form"
              onSubmit={buyAirtime}
              noValidate
              sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
              }}
            >
              <h3>Buy Airtime</h3>
              <h3>Wallet Balance: {balance} cUSD</h3>
              {/* <div>{result?.hash}</div> */}
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
                    id="outlined-select-network"
                    name='network'
                    select
                    fullWidth
                    margin="normal"
                    label="Service Provider"
                    defaultValue="Safaricom"
                  >
                    {Networks.map((option) => (
                      <MenuItem key={option.value} value={option.value}>
                        {option.label}
                      </MenuItem>
                    ))}
                  </TextField>
      
                  <TextField
                      name='amount'
                      required
                      fullWidth
                      label="Amount"
                      type="number"
                      margin="normal"
                      InputLabelProps={{
                      shrink: true,
                      }}
                  />
          
                  <Button 
                  type='submit'
                  variant="contained"
                  fullWidth>
                  Buy Airtime
                  </Button>
      
          </Box>
          </Container>
      
        </Box>
          
        );


    }

export default Airtime;

    



