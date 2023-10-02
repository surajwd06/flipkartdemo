import React, { useState } from 'react'
import { Box, Menu, MenuItem, Typography } from '@mui/material'
import PowerSettingsNewIcon from '@mui/icons-material/PowerSettingsNew';
import styled from '@emotion/styled';

const Component=styled(Menu)`
margin-top:5px;
`;
const Logout=styled(Typography)`
font-size:14px;
margin-left:20px;
`;

const Profile = ({ account,setAccount }) => {
    const [open, setOpen] = useState(false);

    const handleClick=(event)=>{
        setOpen(event.currentTarget)
    }

    const handleClose=()=>{
        setOpen(false)
    }

    const logoutUser=()=>{
        setAccount('')
    }
    return (
        <>
            <Box onClick={(e)=>handleClick(e)}>
                <Typography style={{marginTop:2,cursor:'pointer'}}>{account && account}</Typography>
            </Box>
            <Component
                anchorEl={open}
                open={Boolean(open)}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={()=>{handleClose(); logoutUser();}}>
                <PowerSettingsNewIcon color='primary' fontSize='small' />
                    <Logout>Logout</Logout>
                </MenuItem>
            </Component>
        </>
    )
}

export default Profile