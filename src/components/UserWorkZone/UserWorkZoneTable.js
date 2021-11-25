import * as React from "react";
import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import TableSortLabel from "@mui/material/TableSortLabel";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { visuallyHidden } from "@mui/utils";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Radio from "@mui/material/Radio";
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import TollBar from "./../TableTollBar";
import {descendingComparator,getComparator,stableSort} from './../SortHandlers';
import {setLog,getLogs} from './../storageHandler';
import './../../App.css';
 



const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const global_rows = [
  {
    userId: "Pk",
    userName: "Krishna Padmanabhan",
    Locations: [
      { name: "A", active: true },
      { name: "B", active: false },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: true,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "NV",
    userName: "PK",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "MO",
    userName: "Anjula",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: false },
      { name: "C", active: true },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "ZA",
    userName: "Raghu",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: false,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: false,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "Pk",
    userName: "Krishna Padmanabhan",
    Locations: [
      { name: "A", active: true },
      { name: "B", active: false },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: true,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "NV",
    userName: "PK",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "MO",
    userName: "Anjula",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: false },
      { name: "C", active: true },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "ZA",
    userName: "Raghu",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: false,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: false,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "Pk",
    userName: "Krishna Padmanabhan",
    Locations: [
      { name: "A", active: true },
      { name: "B", active: false },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: true,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "NV",
    userName: "PK",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "MO",
    userName: "Anjula",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: false },
      { name: "C", active: true },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "ZA",
    userName: "Raghu",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: false,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: false,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "Pk",
    userName: "Krishna Padmanabhan",
    Locations: [
      { name: "A", active: true },
      { name: "B", active: false },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: true,
    Add_Inventory: false,
    Inventory_Check: true,
  },
  {
    userId: "NV",
    userName: "PK",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "MO",
    userName: "Anjula",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: false },
      { name: "C", active: true },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: true,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: true,
    Replenish: false,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: true,
    Inventory_Check: false,
  },
  {
    userId: "ZA",
    userName: "Raghu",
    Locations: [
      { name: "A", active: false },
      { name: "B", active: true },
      { name: "C", active: false },
    ],
    sort_locn: {
      Locations: ["BackupLocation", "PickLocation"],
      active: "BackupLocation",
    },
    Put_Up: false,
    Pull_Down: false,
    Sort_Locn: null,
    Transfer: false,
    Replenish: true,
    InSite_Replenishment: false,
    Processing: false,
    Add_Inventory: false,
    Inventory_Check: true,
  }
];




const FixedHeadCells = [
  {
    id: "userId",
    numeric: false,
    label: "User Id",
  },
  {
    id: "userName",
    numeric: true,
    label: "User Name",
  },
  {
    id: "Sort_Locn",
    numeric: true,
    label: "Sort Locn?",
  },
  {
    id: "Pull_Down",
    numeric: true,
    label: "Pull-Down",
  },
  {
    id: "Put_Up",
    numeric: true,
    label: "Pull-Up",
  },
  {
    id: "Transfer",
    numeric: true,
    label: "Transfer",
  },
  {
    id: "Replenish",
    numeric: true,
    label: "Replenish",
  },
  {
    id: "InSite_Replenishment",
    numeric: true,
    label: "inSite Replenishment",
  },
  {
    id: "Processing",
    numeric: true,
    label: "Processing",
  },
  {
    id: "Add_Inventory",
    numeric: true,
    label: "Add Inventory",
  },
  {
    id: "Inventory_Check",
    numeric: true,
    label: "Inventory Check",
  },
];

function EnhancedTableHead(props) {
  const {
    order,
    orderBy,
    onRequestSort,
  } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow className="table-row">
        {props.headcells.map((headCell,index) => (
          <TableCell
            align="center"
            key={headCell.label+index}
            sortDirection={orderBy === headCell.id ? order : false}
            
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              sx={{ color: "black", fontWeight: "bold" }}
              onClick={createSortHandler(headCell.id)}
            >
              {headCell.label}
              {orderBy === headCell.id ? (
                <Box component="span" sx={visuallyHidden}>
                  {order === "desc" ? "sorted descending" : "sorted ascending"}
                </Box>
              ) : null}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
}





const Column = (props) => {
  const [state, setState] = useState(props.state);

  const handleChange = (event) => {
    //console.log(event.target.value);
    props.handler(props.index,props.name,event.target.value);
    setState(event.target.value);
  };
  return (
    <FormControl fullWidth>
      <Select
        value={state}
        onChange={handleChange}
        size="small"
      >
        <MenuItem value={true}>Yes</MenuItem>
        <MenuItem value={false}>No</MenuItem>
      </Select>
    </FormControl>
  );
};


const SortLocation = (props) => {
  const index = props.data.active?props.data.Locations.indexOf(props.data.active) : -1;
  const [location, setLocation] = React.useState(index);

  const handleChange = (event) => {
    setLocation(event.target.value);
    props.handler(props.index,props.data.Locations[event.target.value]);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        
        <Select
          value={location}
          onChange={handleChange}
          size="small"
        >
          {props.data.Locations.map((item,index)=>{
            return <MenuItem key={item} value={index}>{item}</MenuItem>
          })}
         
        </Select>
      </FormControl>
    </Box>
  );
}


export default function EnhancedTable() {
  const [order, setOrder] = useState("asc");
  const [orderBy, setOrderBy] = useState("calories");
  const [selected, setSelected] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [headCells, setHeadCells] = useState([]);
  const [rows, setRows] = useState([]);
  const [open, setOpen] = React.useState(false);
  const [error,setError] = useState(false);
  const [Locations,setLocations] = useState(["A","B","C"]);
  const [deleteOpen,setOpne] = useState(false);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  const searchHandler = (searchValue) => {
      console.log(searchValue);
  }

  const cellSearchHandler = (cell,value) => {
      console.log(cell,value);
  }

  const filterHandler = (options)=>{
      console.log(options)
  }
  // handler Method to select the Location
  const locationHandler = (row_index,index) => {
    setOpen(true);
    for(let i=0;i<rows[row_index].Locations.length;i++){
      rows[row_index].Locations[i].active = false;
    }

    rows[row_index].Locations[index].active = true;
    
   setRows(rows);
  };

  const cellchangeHandler = (idx,field_name,value) => {
    setOpen(true);
    console.log(idx,field_name,value);
    console.log(rows[idx][field_name]);
    rows[idx][field_name] = value;
    setRows(rows);
    console.log(rows[idx][field_name]);
  }

  const sortlocationChangeHandler = (idx,value)=>{
    setOpen(true);
    rows[idx].sort_locn.active = value;
  }
  useEffect(() => {
    for (let i = Locations.length - 1; i >= 0; i--) {
      const obj = {
        numeric: false,
        label: Locations[i],
      };
      FixedHeadCells.splice(2, 0, obj);
      setHeadCells(FixedHeadCells);
    }
    for(let i=0;i<global_rows.length;i++)
    {
      global_rows[i].idx = i;
    }
    //{"eventId":"HBJ567GFGSH","userId":"GFSD773798HGJEJ#!@^HGJD","header":{},"date":"Fri Nov 19 2021 11:15:52 GMT+0530 (India Standard Time)"}
    setRows(global_rows);

  },[Locations]);

  

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = rows.map((n) => n.name);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    const selectedIndex = selected.indexOf(name);
    let newSelected = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, name);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

 
  const handleDelete = () => {
    console.log("delete");
  };


  return (
    <Box sx={{ width: "100%" }}>

      {/** This component is to  show sccess message on successfull update */}
       <Snackbar open={open} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} autoHideDuration={1000} onClose={handleClose}>
        <Alert onClose={handleClose} severity={error? "error":"success"} sx={{ width: '100%' }}>
        Successfully updated
        </Alert>
      </Snackbar>

      <Paper elevation={0} sx={{ width: "100%", mb: 2 }}>

        <TollBar searchHandler={searchHandler} cellSearchHandler={cellSearchHandler} filterHandler={filterHandler} options={FixedHeadCells}/>

        <TableContainer>
          <Table
            sx={{ minWidth: 750}}
            aria-labelledby="user workzone"
            size="small"
          >
            <EnhancedTableHead
              headcells={headCells}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(rows, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, row_index) => {
                  const labelId = `enhanced-table-checkbox-${row_index}`;
                  return (
                    <TableRow
                      hover
                      aria-label="row"
                      role="table-row"
                      onClick={(event) => handleClick(event, row.name)}
                      key={Math.random()}
                    >
                      <TableCell
                        component="th"
                        id={labelId}
                        scope="row"
                        padding="none"
                        aria-labelledby="userids-heading"
                      >
                        {row.userId}
                      </TableCell>
                      <TableCell>{row.userName}</TableCell>

                      {Locations.map((loc,index)=>{
                        return(
                          <TableCell align="right" key={row.idx+index}>
                          <Radio
                            key={row.idx+index}
                            size="small"
                            checked={row.Locations[index].active}
                            onChange={()=>locationHandler(row.idx,index)}
                          />
                        </TableCell>
                        )
                      })}
                     

                     
                      <TableCell>
                        <SortLocation handler={sortlocationChangeHandler} index={row.idx} data={row.sort_locn}/>
                      </TableCell>

                      <TableCell>
                        <Column  handler={cellchangeHandler} index={row.idx} name="Pull_Down" state={row.Pull_Down}/>
                      </TableCell>

                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="Put_Up" state={row.Put_Up}/>
                      </TableCell>

                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="Transfer" state={row.Transfer}/>
                      </TableCell>
                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="Replenish" state={row.Replenish}/>
                      </TableCell>

                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="InSite_Replenishment" state={row.InSite_Replenishment}/>
                      </TableCell>

                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="Processing" state={row.Processing}/>
                      </TableCell>

                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="Add_Inventory" state={row.Add_Inventory}/>
                      </TableCell>

                      <TableCell>
                        <Column handler={cellchangeHandler} index={row.idx} name="Inventory_Check" state={row.Inventory_Check}/>
                      </TableCell>

                      <TableCell>
                        <IconButton
                          color="primary"
                          aria-label="delete button"
                          role="delete-button"
                          component="span"
                          className="delete-btn"
                          onClick={() => handleDelete()}
                        >
                          <DeleteIcon/>
                        </IconButton>
                        
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}





