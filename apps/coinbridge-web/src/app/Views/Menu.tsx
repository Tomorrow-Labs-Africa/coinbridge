import { Box, Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Typography } from "@mui/material";
import { ethers,providers } from "ethers";
import { useState, useEffect } from 'react';
import { CUSD_CONTRACT } from '../constants';
import erc20Abi from '../abi/ERC20.json';
import wallet from '../../assets/wallet.svg'
import phone from '../../assets/phone.svg'
import withdraw from '../../assets/withdraw.svg'
import cash from '../../assets/cash.svg'
import { Link } from "react-router-dom";



declare global {
    interface Window {
      ethereum: any;
    }
  }

function Menu () {

    const [balance, setBalance]=useState(0)


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


    return (
        <Box sx={{ width: '100%'}}>
            <Container component="main" maxWidth="xs">
                <Box
                    component="form"
                    sx={{
                    marginTop: 6,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    }}
                >
                <Grid container item xs={12} >
                    <Card sx={{ backgroundColor: '#357074',width:'100%'}}>
                        <CardContent sx={{margin:1}}>
                            <Typography sx={{ fontSize: 22, color: '#FFFFFF', fontWeight:400 }} gutterBottom>
                            MiniPay Balance
                            </Typography>
                            <Typography sx={{ color: 'white', fontWeight:500 }} variant="h3" component="div" marginTop={3}>
                            {balance.toFixed(2)} cUSD
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>



                    <Grid marginTop={4} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 5 }}>
                        <Grid item xs={6} marginBottom={3}>


                            <Card>
                                <Link to="/onramp" style={{ textDecoration: 'none', color:"#000000" }}>
                                <CardContent sx={{justifyContent:'center', textAlign:'center'}}>
                                    <img src={wallet} width={40} height={40} alt="logo" />
                                    <Typography sx={{textAlign:'center'}} variant="h6" component="div" paddingTop={2}>
                                        Deposit
                                    </Typography>
                                </CardContent>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={6} marginBottom={3}>
                            <Card>
                                <Link to="/offramp" style={{ textDecoration: 'none', color:"#000000" }}>
                                <CardContent sx={{justifyContent:'center', textAlign:'center'}}>
                                    <img src={withdraw} width={40} height={40} alt="logo" />
                                    <Typography sx={{textAlign:'center'}}  variant="h6" component="div" paddingTop={2}>
                                        Withdraw
                                    </Typography>
                                </CardContent>
                                </Link>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card>
                                <CardContent sx={{justifyContent:'center', textAlign:'center'}}>
                                    <img src={cash} width={40} height={40} alt="logo" />
                                    <Typography sx={{textAlign:'center'}} variant="h6" component="div" paddingTop={2}>
                                        Pay Bills
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item xs={6}>
                            <Card >
                                <CardContent sx={{justifyContent:'center', textAlign:'center'}}>
                                    <img src={phone} width={40} height={40} alt="logo" />
                                    <Typography sx={{textAlign:'center'}} variant="h6" component="div" paddingTop={2}>
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