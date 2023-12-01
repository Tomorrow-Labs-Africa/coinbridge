import { Box, Button, Card, CardActions, CardContent, Container, Grid, Typography } from "@mui/material";
// import { ethers,providers } from "ethers";
import { useState, useEffect } from 'react';
// import { CUSD_CONTRACT } from '../constants';
// import erc20Abi from '../abi/ERC20.json';


declare global {
    interface Window {
      ethereum: any;
    }
  }

function Menu () {

    const [balance, setBalance]=useState(0)


    // useEffect(() =>{

    //     async function getBalance() {
    //       if (window.ethereum && window.ethereum.isMiniPay) {
    //         const provider = new providers.Web3Provider(window.ethereum);
    //         // Get the signer (user's account)
    //         const signer = await provider.getSigner();
    //         // Get the user's Ethereum address
    //         const address = await signer.getAddress();
    
    //         // get cUSD balance
    //         const contract = new ethers.Contract(CUSD_CONTRACT, erc20Abi, provider);
    //         const balance = await contract.balanceOf(address);
    //         const decimals = await contract.decimals();
    //         const cUSDBalance = parseFloat(ethers.utils.formatUnits(balance, decimals));
    
    //         setBalance(cUSDBalance)
              
    //       } else {
    //           console.error("MiniPay provider not detected");
    //       }
          
    //     }
    //     getBalance()
    
    //   }, [balance])


    return (
        <Box sx={{ width: '100%' }}>
            <Container component="main" maxWidth="xs">
            <Box
                    component="form"
                    // onSubmit={}
                    sx={{
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >

            <Card sx={{ minWidth: 475 }}>
                <CardContent>
                    <Typography sx={{ fontSize: 24 }} color="text.secondary" gutterBottom>
                    Minipay Balance
                    </Typography>
                    <Typography variant="h3" component="div" marginTop={4}>
                     10 cUSD
                    </Typography>
                    {/* <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    adjective
                    </Typography>
                    <Typography variant="body2">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                    </Typography> */}
                </CardContent>
                {/* <CardActions>
                    <Button size="small">Learn More</Button>
                </CardActions> */}
            </Card>

            <Grid marginTop={4} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                <Grid item xs={6} marginBottom={3}>
                    <Card>
                        <CardContent>
                            <Typography fontSize={50} >
                             💰
                            </Typography>
                            
                            <Typography  variant="h6" component="div" marginTop={4}>
                                Top Up 
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6} marginBottom={3}>
                    <Card>
                        <CardContent>
                            <Typography fontSize={50} >
                            💸
                            </Typography>
                            <Typography  variant="h6" component="div" marginTop={4}>
                                Withdraw
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Typography fontSize={50} >
                            💵
                            </Typography>
                            <Typography  variant="h6" component="div" marginTop={4}>
                                Pay Bills
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
                <Grid item xs={6}>
                    <Card>
                        <CardContent>
                            <Typography fontSize={50} >
                            📱
                            </Typography>
                            <Typography  variant="h6" component="div" marginTop={4}>
                                SMS Wallet
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
            

            </Box>

  

            </Container>

        </Box>


        

    )
}

export default Menu