import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Logscreen from './Logscreen';


export default function ButtonAppBar(props) {
  const curpath = window.location.pathname;
  var title="Home";
  switch(curpath){
    case "/":title="Home"
              break;
    case "/rabbitMq":title="Rabbit MQ Listeners"
              break;
    case "/work-order-maintanance":title="Work Order Maintanance"
              break;
    case "/UserWorkZone":title="User WorkZone"
              break;
    default:title="Home";
  }
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="sticky">
        <Toolbar align="center">
          <Typography variant="h6" component="div" sx={{ flexGrow: 1,marginLeft:{sm:32}}}>
          {title}
          </Typography>
          <Typography variant="subtitle2"  component="div">
          Logged in as knaresh
          </Typography>
          <Box sx={{ m: 1 }}/>
          <Button color="inherit" variant="outlined">Logout</Button>
          <Logscreen/>
        </Toolbar>
      </AppBar>
      <Box sx={{ m: 1 }}/>
    </Box>
  );
}
