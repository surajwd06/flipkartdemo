import React, { useContext, useState } from 'react'
import { Box, Button, Dialog, TextField, Typography } from "@mui/material"
import styled from '@emotion/styled'
import { authenticateSignup, authenticateLogin } from '../../service/api';
import { DataContext } from '../../context/DataProvider';

const Component = styled(Box)`
height:70vh;
weight:90vh;
box-sizing:border-box;
margin:0;
padding:0;
`;

const Image = styled(Box)`
background:#2874f0 url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png) center 85% no-repeat;
height:82.6%;
width:30%;
padding:45px 35px;
&>p,&>h5{
  color:#ffffff;
  font-weight:600;
}
`;

const Wrapper = styled(Box)`
display:flex;
flex-direction:column;
padding:25px 35px;
flex:1;
& > div, &> button{
  margin-top:20px;
}
`;

const LoginButton = styled(Button)`
text-transform:none;
background:#fb641B;
height:40px;
color:#ffffff;
border-radius:2px;
`;
const RequestOtp = styled(Button)`
text-transform:none;
background:#fff;
height:40px;
color:#2874F0;
box-shadow:0 2px 4px 0 rgb(0 0 0/ 20%);
border-radius:2px;
`;

const Text = styled(Typography)`
font-size:12px;
color:#878787;
font-weight:500;
`;

const CretaeAccount = styled(Typography)`
font-size:14px;
font-align:center;
color:#2874f0;
font-weight:600;
cursor:pointer;
`;

const Error=styled(Typography)`
font-size:10px;
color:#ff6161;
line-height:0;
margin-top:10px;
font-weight:10px;
`;
// heading
const accountInitialValues = {
  login: {
    view: 'login',
    heading: "Login",
    subHeading: 'Get access to your Order, Wishlist and Recommendations'
  },
  signup: {
    view: 'signup',
    heading: "Looks like you're new here!",
    subHeading: 'sign up your mobile number to get started'
  }
}

// signup initial values
const signupInitialValues = {
  firstname: '',
  lastname: '',
  username: '',
  email: '',
  password: '',
  phone: ''
}

const loginInitianalValus = {
  username: '',
  password: ''
}

const LogDialog = ({ hideval, showval }) => {

  const [account, toggleAccount] = useState(accountInitialValues.login)
  const [signup, setSignup] = useState(signupInitialValues)
  const { setAccount } = useContext(DataContext)
  const [login, setLogin] = useState(loginInitianalValus)
  const [error,setError]=useState(false);

  const handleClose = () => {
    showval(false);
    toggleAccount(accountInitialValues.login);
    setError(false)
  }
  const onInputChange = (e) => {
    setSignup({ ...signup, [e.target.name]: e.target.value })
    // console.log(signup)
  }

  const signupUser = async () => {
    let response = await authenticateSignup(signup)
    if (!response) return;
    setAccount(signup.firstname);
    handleClose();
  }

  const onValueChange = (e) => {
    setLogin({ ...login, [e.target.name]: e.target.value })
  }

  const LoginUser= async()=>{
    let res=await authenticateLogin(login)
    console.log(res)
    if(res.status===200){
      handleClose();
      setAccount(res.data.data.firstname);
    }else{
setError(true)
    }

  }
  return (
    <Dialog open={hideval} onClose={handleClose} PaperProps={{ sx: { maxWidth: 'unSet' } }}>
      <Component>
        <Box style={{ display: 'flex', height: '100%' }}>
          <Image>
            <Typography variant='h5'>{account.heading}</Typography>
            <Typography style={{ marginTop: 20 }}>{account.subHeading}</Typography>
          </Image>
          {
            account.view === 'login' ?
              <Wrapper>
                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='username' label="Enter Username" />
                {error && <Error>Please enter username or password</Error>}

                <TextField variant='standard' onChange={(e) => onValueChange(e)} name='password' label="Enter Password" />
                <Text>By continuing, you agree to flipKart's Terms of Use and Privacy Policy</Text>

                <LoginButton onClick={() => LoginUser()}>Login</LoginButton>
                <Typography style={{ textAlign: 'center' }}>OR</Typography>
                <RequestOtp>Request OTP</RequestOtp>
                <CretaeAccount onClick={() => toggleAccount(accountInitialValues.signup)}>New to FlipKart? Create an account</CretaeAccount>
              </Wrapper>
              :
              <Wrapper>
                <TextField variant='standard' name='firstname' label="Enter FirstName" onChange={(e) => onInputChange(e)} />
                <TextField variant='standard' name='lastname' label="Enter LastName" onChange={(e) => onInputChange(e)} />
                <TextField variant='standard' name='username' label="Enter UserName" onChange={(e) => onInputChange(e)} />
                <TextField variant='standard' name='email' label="Enter Email" onChange={(e) => onInputChange(e)} />
                <TextField variant='standard' name='password' label="Enter Password" onChange={(e) => onInputChange(e)} />
                <TextField variant='standard' name='phone' label="Enter Phone" onChange={(e) => onInputChange(e)} />
                <LoginButton onClick={() => signupUser()}>Continue</LoginButton>
              </Wrapper>
          }
        </Box>
      </Component>
    </Dialog>
  )
}

export default LogDialog