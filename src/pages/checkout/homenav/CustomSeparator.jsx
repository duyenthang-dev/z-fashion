import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import './CustomSeparator.css';
import HomeLogo from './home-logo-icon-0.jpg';


export default function CustomSeparator() {
  const breadcrumbs = [
    <img src={HomeLogo} alt="" style={{height: 24}}/>,
    <Link underline="hover" key="1" color="inherit" href="/" to={'/home'} style={{fontSize: 16}}>
      Trang chủ
    </Link>,
    <Typography key="3" color="text.primary" style={{fontSize: 16}}>
      Thanh toán
    </Typography>,
  ];

  return (
    <div className="CustomSeparator">
      <Stack spacing={2}>
      
        <Breadcrumbs
          separator={<NavigateNextIcon fontSize="small" />}
          aria-label="breadcrumb" 
        >
          {breadcrumbs}
        </Breadcrumbs>
      </Stack>
    </div>
  );
}