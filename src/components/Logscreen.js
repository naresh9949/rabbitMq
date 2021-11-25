import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import Slide from "@mui/material/Slide";
import ReportGmailerrorredIcon from "@mui/icons-material/ReportGmailerrorred";
import { Container } from "@mui/material";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import Stack from "@mui/material/Stack";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import Tooltip from "@mui/material/Tooltip";
import ClickAwayListener from "@mui/material/ClickAwayListener";
import {setLog,getLogs} from './storageHandler';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const NotificationRow = (props) => {
  const [open, setOpen] = React.useState(false);
  const data = props.data;
  const status = data.header.IsSuccess? "success" :data.header.Error? "error" : "warning";

  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    handleCopy();
    setOpen(true);
  };

  const handleCopy = () => {
    const text = JSON.stringify(data);
    navigator.clipboard.writeText(text);
  };
  return (
    <Alert
      severity={status}
      action={
        <ClickAwayListener onClickAway={handleTooltipClose}>
          <div>
            <Tooltip
              PopperProps={{
                disablePortal: true,
              }}
              onClose={handleTooltipClose}
              open={open}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              title="The Log data has been copied to your clipboard."
            >
              <Button color="inherit" onClick={handleTooltipOpen} size="small">
                <ContentCopyIcon />
              </Button>
            </Tooltip>
          </div>
        </ClickAwayListener>
      }
    >
      <AlertTitle>{data.header.EventID}</AlertTitle>
      {data.date}
    </Alert>
  );
};

const Notifications = (props) => {
    return(
        <React.Fragment>
          {props.data.map((log)=>{
            return <NotificationRow status="error" data={log}/>
          })}
           
        </React.Fragment>
    )
}






export default function Logscreen() {
  const [open, setOpen] = React.useState(false);
  const Logs = getLogs();
  console.log(Logs)
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };



  return (
    <div>
      <IconButton
        color="primary"
        onClick={handleClickOpen}
        aria-label="upload picture"
        component="span"
      >
        <ReportGmailerrorredIcon sx={{ color: "white" }} />
      </IconButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: "relative" }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Typography sx={{ ml: 2, flex: 1 }} variant="h6" component="div">
              Log Reports
            </Typography>
          </Toolbar>
        </AppBar>
        <Container sx={{ paddingTop: 2 }}>
          <Stack sx={{ width: "100%" }} spacing={2}>
            <Notifications data={Logs}/>
          </Stack>
        </Container>
      </Dialog>
    </div>
  );
}


