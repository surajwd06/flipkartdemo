import React, { useContext, useState } from 'react';
import { Box, Button, Typography, styled } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LogDialog from '../login/LogDialog';
import {DataContext} from '../../context/DataProvider';
import Profile from './Profile';
const Wrapper = styled(Box)`
display:flex;
margin:0 3% 0 auto;
& > button,& > p & > div,{
    margin-right:40px;
    color:#000000;
    font-size:12px;
    align-item:center
}
`;

const Container = styled(Box)`
display:flex
`;
const LoginButton = styled(Button)`
color:#000000;
text-transform:none;
padding:9px 40px;
border-radius:2px;
box-shadow:none;
height:32px;
font-weight:600
`;
const CustomButton = () => {
    const [hideval, showval] = useState(false);

    const {account,setAccount}=useContext(DataContext);
    // console.log("ddddddddddddsewwwwwwwwwwwwwwwwwwwd",account)



    // console.log("fffff",account)
// var account=""
    return (
        <Wrapper>
            {
                account ? <Profile account={account} setAccount={setAccount} />:<LoginButton variant='contained' onClick={() => showval(!false)}>Login</LoginButton>
            }
            <Typography style={{ marginTop: 3, width: 135 }}>Become a Seller</Typography>
            <Typography style={{ marginTop: 3, width: 135 }}>More</Typography>
            <Container>
                <ShoppingCartIcon />
                <Typography>Cart</Typography>
            </Container>
            <LogDialog hideval={hideval} showval={showval} />
        </Wrapper>
    )
}
export default CustomButton;