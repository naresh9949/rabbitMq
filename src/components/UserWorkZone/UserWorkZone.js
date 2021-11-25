import React from "react";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import UserWorkZoneTable from "./UserWorkZoneTable";
import Breadcrumbs from "./../Breadcrumbs";

function AddUserWorkZone(props) {
  const initial_userWorkZone = {
    User: null,
    WorkZone: null,
    Put_Up: false,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: false,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: false,
    Inventory_Check: false,
    Replenishment_Transfer: false,
    Split_Pallet_Transfer: false,
    Picking_Transfer: false,
  };

  const [open, setOpen] = React.useState(false);
  const [userWorkZone, setUserWorkZone] = React.useState(initial_userWorkZone);
  const [users, setUsers] = React.useState(["Naresh", "OMP", "PK", "Shadman"]);
  const [workZones, setWorkZones] = React.useState(["A", "B", "C"]);
  const [sortLocn, setSortLocn] = React.useState([
    "BackupLocation",
    "PickLocation",
  ]);
  const [user, setuser] = React.useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserWorkZone({
      ...userWorkZone,
      [name]: value,
    });
  };

  const handleUser = (event, value) => {
    setUserWorkZone({
      ...userWorkZone,
      ["User"]: value,
    });
  };

  const handleWorkZone = (event, value) => {
    setUserWorkZone({
      ...userWorkZone,
      ["WorkZone"]: value,
    });
  };

  const handleSortLoc = (event, value) => {
    setUserWorkZone({
      ...userWorkZone,
      ["Sort_Locn"]: value,
    });
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    console.log(userWorkZone);
  };

  return (
    <div>
      <Button
        id="add-user-workzone"
        role="add-workzone"
        variant="contained"
        size="medium"
        sx={{ width: "100%" }}
        onClick={handleClickOpen}
      >
        add user WorkZone
      </Button>
      <Dialog open={open} onClose={handleClose} maxWidth={"md"}>
        <DialogTitle>Warehouse Name : {props.id}</DialogTitle>
        <DialogContent sx={{ width: { sm: 400 } }}>
          <DialogContentText>SortLocation</DialogContentText>
          <br />

          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={users}
            aria-label="User"
            onChange={handleUser}
            size="small"
            renderInput={(params) => <TextField {...params} label="User" />}
          />
          <br />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            aria-label="WorkZone"
            onChange={handleWorkZone}
            options={workZones}
            size="small"
            renderInput={(params) => <TextField {...params} label="WorkZone" />}
          />
          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Put-Up</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              role="Put_Up"
              value={userWorkZone.Put_Up}
              name="Put_Up"
              label="Put-Up"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Pull-Down</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Pull_Down}
              name="Pull_Down"
              role="Pull_Down"
              label="Pull-Down"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>

          <br />
          <br />
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={sortLocn}
            name="Sort Locn?"
            aria-label="Sort Locn?"
            onChange={handleSortLoc}
            size="small"
            renderInput={(params) => (
              <TextField {...params} label="Sort Locn?" />
            )}
          />
          <br />

          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Transfer</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Transfer}
              name="Transfer"
              role="Transfer"
              label="Transfer"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Replenish</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Replenish}
              name="Replenish"
              role="Replenish"
              label="Replenish"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              InSite Replenishment
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.InSite_Replenishment}
              name="InSite_Replenishment"
              role="InSite_Replenishment"
              label="InSite Replenishment"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Processing</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Processing}
              name="Processing"
              role="Processing"
              label="Processing"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Add Inventory</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Add_Inventory}
              name="Add_Inventory"
              role="Add_Inventory"
              label="Add Inventory"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Inventory Check{" "}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Inventory_Check}
              name="Inventory_Check"
              role="Inventory_Check"
              label="Inventory Check "
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Replenishment Transfe
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Replenishment_Transfer}
              name="Replenishment_Transfer"
              role="Replenishment_Transfer"
              label="Replenishment Transfe"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Split Pallet Transfer
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Split_Pallet_Transfer}
              label="Split Pallet Transfer"
              role="Split_Pallet_Transfer"
              name="Split_Pallet_Transfer"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
          <br />
          <br />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Picking Transfer
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={userWorkZone.Picking_Transfer}
              name="Picking_Transfer"
              role="Picking_Transfer"
              label="Picking Transfer"
              size="small"
              onChange={handleInputChange}
            >
              <MenuItem value={true}>Yes</MenuItem>
              <MenuItem value={false}>No</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>

        <DialogActions>
          <Button variant="contained" role="close" onClick={handleClose}>
            close
          </Button>
          <Button variant="contained" role="save" onClick={handleSave}>
            save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

function AddWorkZone(props) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDelete = (name) => {
    console.info("You clicked the delete icon.");
  };

  return (
    <div>
      <Button
        variant="contained"
        sx={{ width: "100%" }}
        size="medium"
        onClick={handleClickOpen}
      >
        Add WorkZone
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Warehouse Name : {props.id}</DialogTitle>
        <DialogContent>
          <Stack direction="row" spacing={1}>
            <Typography variant="h5" gutterBottom component="div">
              Workzone Code :
            </Typography>
            <TextField
              size="small"
              width="100%"
              aria-label="workZoneCode"
              id="outlined-basic"
              variant="outlined"
            />
            <Button size="small" variant="contained">
              create
            </Button>
          </Stack>
          <hr />
          <Stack direction="row" spacing={1}>
            <Chip label="A" onDelete={handleDelete} />
          </Stack>
        </DialogContent>
      </Dialog>
    </div>
  );
}

function UserWorkZone() {
  const [id, setId] = React.useState(0);
  const [ids, setIds] = React.useState([23445, 56733, 46774, 3456]);

  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <React.Fragment>
      <Breadcrumbs cur_screen="User WorkZone" />
      <Container>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12}>
            <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
              <Select
                value={id}
                id="select"
                onChange={handleChange}
                size="small"
              >
                {ids.map((item, index) => {
                  return (
                    <MenuItem key={item} value={index}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
              <AddUserWorkZone id={ids[id]} />
              <AddWorkZone id={ids[id]} />
            </Stack>
          </Grid>
        </Grid>
      </Container>
      <Container>
        <UserWorkZoneTable />
      </Container>
    </React.Fragment>
  );
}

export default UserWorkZone;
