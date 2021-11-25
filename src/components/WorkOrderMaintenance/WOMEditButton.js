import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
export default function EditDetails(props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState(props.data);
 

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        size="small"
        onClick={handleClickOpen}
      >
        Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Edit Details</DialogTitle>
        <DialogContent>
        <br/>
          <div sx={{ display: "flex", paddingTop: 0 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Warehouse"
                  id="outlined-size-small"
                  defaultValue={data.warehouse}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Work Order Type"
                  id="outlined-size-small"
                  defaultValue={data.workorderType}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Origin Location"
                  id="outlined-size-small"
                  defaultValue={data.originLocation}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Asigned User"
                  id="outlined-size-small"
                  defaultValue={data.asignedUser}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Priority"
                  id="outlined-size-small"
                  defaultValue={data.priority}
                  size="small"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  fullWidth
                  label="Status"
                  id="outlined-size-small"
                  defaultValue={data.status}
                  size="small"
                />
              </Grid>
            
              
            </Grid>
          </div>

         
        </DialogContent>
        <DialogActions>
        <Button variant="contained" onClick={handleClose} size="small">
          Close
        </Button>
        <Button variant="contained" onClick={handleClose} size="small">
          save
        </Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}
