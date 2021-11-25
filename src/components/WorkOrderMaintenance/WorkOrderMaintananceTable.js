import * as React from "react";
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
import { visuallyHidden } from "@mui/utils";
import ChangeButton from "./WOMEditButton";
import { useState } from "react";
import TollBar from "./../TableTollBar";
import {descendingComparator,getComparator,stableSort} from './../SortHandlers';
import {setLog,getLogs} from './../storageHandler';
import './../../App.css';

var rows = [
  {
    warehouse: "warehouse1",
    pallet: 7899,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "completed",
    reasonCode: "ANY78ER90",
    createdDate: "12/08/2021",
  },
  {
    warehouse: "warehouse2",
    pallet: 8567,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "11/08/2021",
  },
  {
    warehouse: "warehouse3",
    pallet: 5678,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 2,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "13/08/2021",
  },
  {
    warehouse: "warehouse4",
    pallet: 1234,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "completed",
    reasonCode: "ANY78ER90",
    createdDate: "14/10/2019",
  },
  {
    warehouse: "warehouse5",
    pallet: 4567,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 2,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "12/10/2019",
  },
  {
    warehouse: "warehouse1",
    pallet: 7899,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "12/08/2021",
  },
  {
    warehouse: "warehouse2",
    pallet: 8567,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "11/08/2021",
  },
  {
    warehouse: "warehouse3",
    pallet: 5678,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 2,
    status: "completed",
    reasonCode: "ANY78ER90",
    createdDate: "13/08/2021",
  },
  {
    warehouse: "warehouse4",
    pallet: 1234,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "14/10/2019",
  },
  {
    warehouse: "warehouse5",
    pallet: 4567,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 2,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "12/10/2019",
  },
  {
    warehouse: "warehouse1",
    pallet: 7899,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "12/08/2021",
  },
  {
    warehouse: "warehouse2",
    pallet: 8567,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 3,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "11/08/2021",
  },
  {
    warehouse: "warehouse3",
    pallet: 5678,
    item: 899,
    workorderType: "TYPE1",
    originLocation: "INDIA",
    originZone: "C",
    designationLocation: "A",
    designationZone: "A",
    asignedUser: "",
    priority: 2,
    status: "pending",
    reasonCode: "ANY78ER90",
    createdDate: "13/08/2021",
  },
];


const headCells = [
  {
    id: "warehouse",
    numeric: false,
    disablePadding: false,
    label: "Warehouse",
  },
  {
    id: "pallet",
    numeric: true,
    disablePadding: false,
    label: "Pallet",
  },
  {
    id: "item",
    numeric: true,
    disablePadding: false,
    label: "Item",
  },
  {
    id: "workorderType",
    numeric: false,
    disablePadding: true,
    label: "WorkOrderType",
  },
  {
    id: "originLocation",
    numeric: false,
    disablePadding: false,
    label: "OriginLocation",
  },
  {
    id: "originZone",
    numeric: false,
    disablePadding: false,
    label: "OriginZone",
  },
  {
    id: "designationLocation",
    numeric: false,
    disablePadding: false,
    label: "DesignationLocation",
  },
  {
    id: "designationZone",
    numeric: false,
    disablePadding: false,
    label: "DesignationZone",
  },
  {
    id: "asignedUser",
    numeric: false,
    disablePadding: false,
    label: "AsignedUser",
  },
  {
    id: "priority",
    numeric: true,
    disablePadding: false,
    label: "Priority",
  },
  {
    id: "status",
    numeric: false,
    disablePadding: false,
    label: "Status",
  },
  {
    id: "reasonCode",
    numeric: true,
    disablePadding: false,
    label: "ReasonCode",
  },
  {
    id: "createdDateNumber",
    numeric: true,
    disablePadding: false,
    label: "CreatedDate",
  },
];

function EnhancedTableHead(props) {
  const { order, orderBy, onRequestSort } = props;
  const createSortHandler = (property) => (event) => {
    onRequestSort(event, property);
  };

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell
            key={headCell.id}
            align="center"
            sortDirection={orderBy === headCell.id ? order : false}
          >
            <TableSortLabel
              active={orderBy === headCell.id}
              direction={orderBy === headCell.id ? order : "asc"}
              onClick={createSortHandler(headCell.id)}
              align="center"
              sx={{ color: "black", fontWeight: "bold" }}
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

export default function WorkOrderMaintananceTable() {
  const [order, setOrder] = React.useState("asc");
  const [orderBy, setOrderBy] = React.useState("calories");
  const [selected, setSelected] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [dense] = React.useState(true);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [data, setTableData] = useState(rows);
  const [search, setSearch] = useState("");

  const handleChange = (event) => {
    setSearch(event.target.value);
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

  const handleRequestSort = (event, property) => {
    const isAsc = orderBy === property && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(property);
  };

  // Handling sort for table
  for (let i = 0; i < data.length; i++) {
    var curDate = data[i].createdDate; //dd/mm/yyyy
    var dateList = curDate.split("/");
    curDate = dateList[1] + "/" + dateList[0] + "/" + dateList[2];
    var newDate = new Date(curDate);
    const time = newDate.getTime();
    data[i].createdDateNumber = time;
    data[i].warehouse = "warehouse" + i;
    data[i].asignedUser = "User" + i;
  }

  const handleSelectAllClick = (event) => {
    if (event.target.checked) {
      const newSelecteds = data.map((n) => n.name);
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

  const isSelected = (name) => selected.indexOf(name) !== -1;

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  return (
    <Box sx={{ width: "100%" }}>
      <Paper elevation={0} sx={{ width: "100%", mb: 2 }}>
        {/**This */}
        <TollBar searchHandler={searchHandler} cellSearchHandler={cellSearchHandler} filterHandler={filterHandler} options={headCells}/>
        <TableContainer>
          <Table
            sx={{ minWidth: 750 }}
            aria-labelledby="Work Order Maintanance"
            size={dense ? "small" : "medium"}
          >
            <EnhancedTableHead
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                 rows.slice().sort(getComparator(order, orderBy)) */}
              {stableSort(data, getComparator(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((data, index) => {
                  const isItemSelected = isSelected(data.name);
                  const labelId = `enhanced-table-checkbox-${index}`;

                  return (
                    <TableRow
                      hover
                      onClick={(event) => handleClick(event, data.name)}
                      tabIndex={-1}
                      key={data.warehouse}
                    >
                      <TableCell component="th" id={labelId} scope="row">
                        {data.warehouse}
                      </TableCell>
                      {/** {warehouse:"warehouse1",pallet:7899,item:899,workorderType:"TYPE1",originLocation:"INDIA",originZone:"C",designationLocation:"A",designationZone:"A",asignedUser:"",priority:3,status:"pending",reasonCode:"ANY78ER90",createdDate:"11/11/2021"}, */}
                      <TableCell align="center">{data.pallet}</TableCell>
                      <TableCell align="center">{data.item}</TableCell>
                      <TableCell align="center">{data.workorderType}</TableCell>
                      <TableCell align="center">
                        {data.originLocation}
                      </TableCell>
                      <TableCell align="center">{data.originZone}</TableCell>
                      <TableCell align="center">
                        {data.designationLocation}
                      </TableCell>
                      <TableCell align="center">
                        {data.designationZone}
                      </TableCell>
                      <TableCell align="center">{data.asignedUser}</TableCell>
                      <TableCell align="center">{data.priority}</TableCell>
                      <TableCell align="center">{data.status}</TableCell>
                      <TableCell align="center">{data.reasonCode}</TableCell>
                      <TableCell align="center">{data.createdDate}</TableCell>
                      <TableCell align="center">
                        <ChangeButton data={data} />
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: (dense ? 33 : 53) * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
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





