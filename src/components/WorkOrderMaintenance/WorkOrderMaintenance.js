import * as React from "react";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Container } from "@mui/material";
import Grid from "@mui/material/Grid";
import Checkbox from "@mui/material/Checkbox";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DesktopDatePicker from "@mui/lab/DesktopDatePicker";
import Button from "@mui/material/Button";
import WorkOrderMaintananceTable from "./WorkOrderMaintananceTable";
import Breadcrumbs from "./../Breadcrumbs";
const label = { inputProps: { "aria-label": "Checkbox demo" } };


function WorkOrderMaintenance() {
  const [startdate, setStartDate] = useState(new Date());
  const [enddate, setEndDate] = useState(new Date());
  const [warehouse, setWarehouse] = useState(0);
  const [completed, setComplete] = React.useState(false);
  //   const handleChange = (event) => {
  //     setAge(event.target.value);
  //   };

  const FilterMethod = () => {
    console.log(startdate)
      console.log(enddate)
      console.log(warehouse)
      console.log(completed)
  }
  const handleChange = (event) => {
    if (event.target.name === "Warehouse") setWarehouse(event.target.value);
    if (event.target.name === "completed-and-cancle") setComplete(!completed);
  };

  return (
    <React.Fragment>
      <Breadcrumbs cur_screen="Work Order Maintanance"/>
    <Container>
    <Grid container spacing={0} sx={{ padding: 0 }}>
      <Grid item xs={12} sm={6}>
        <Container sx={{ display: "flex", paddingTop: 0 }}>
          <h4>Warehouse:</h4>
          <FormControl sx={{ m: 1, minWidth: 230 }}>
            <Select
              name="Warehouse"
              sx={{ height: 40 }}
              id="select"
              value={warehouse}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              
              <MenuItem value={0}>Ten</MenuItem>
              <MenuItem value={1}>Twenty</MenuItem>
              <MenuItem value={1}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </Container>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container sx={{ display: "flex" }}>
          <h4>Completed and Cancled:</h4>
          <Checkbox
            {...label}
            id="completed"
            onClick={handleChange}
            name="completed-and-cancle"
            value={completed}
          />
        </Container>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container sx={{ display: "flex" }}>
          <h4>From Date: </h4>
          &nbsp;&nbsp;
          <LocalizationProvider
            dateAdapter={AdapterDateFns}
            sx={{ m: 1, height: 30 }}
          >
            <DesktopDatePicker
              sx={{ m: 1, height: 30 }}
              inputFormat="dd/MM/yyyy"
              name="startdate"
              id="startdate"
              value={startdate}
              onChange={(date) => {
                setStartDate(date);
              }}
              renderInput={(params) => (
                <TextField size="small" sx={{ height: 20 }} {...params} />
              )}
            />
          </LocalizationProvider>
        </Container>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Container sx={{ display: "flex" }}>
          <h4>To Date: </h4>
          &nbsp; &nbsp;
          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DesktopDatePicker
              inputFormat="dd/MM/yyyy"
              name="enddate"
              id="enddate"
              value={enddate}
              onChange={(date) => {
                setEndDate(date);
              }}
              renderInput={(params) => <TextField size="small" {...params} />}
            />
            &nbsp; &nbsp; &nbsp; &nbsp;
            <Button variant="contained" size="small" color="success" onClick={FilterMethod}>
              Go
            </Button>
          </LocalizationProvider>
        </Container>
      </Grid>

      <Grid item xs={12} sm={12}>
        <WorkOrderMaintananceTable />
      </Grid>
    </Grid>
    </Container>
    </React.Fragment>
  );
}

export default WorkOrderMaintenance;
