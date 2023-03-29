import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/logo2.png';
// import { createTheme } from '@mui/material';

const Footer = () => (
  
  <Box mt="80px" bgcolor="#FFF3F4">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '105px' }} />
    </Stack>
    
    <Typography variant="h5" sx={{ fontSize: { lg: '28px', xs: '20px' },fontFamily:'sans-serif' }} mt="41px" textAlign="center" pb="40px">WeGoJim</Typography>
   
  </Box>
);

export default Footer;
