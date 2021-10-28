import * as React from "react";
import { useState,useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import { tableCellClasses } from "@mui/material/TableCell";
import styled from "styled-components";
import axios from 'axios';
import ActivateButton from "./Button";
import { useErrorHandler } from "react-error-boundary";

const StyledTableCell = styled(TableCell)(({ theme }) => ({

  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "black",
    color: "white",
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 44,
  },
}));


const RabbitMQ = () => {
  const [width,setWidth] = useState(window.innerWidth);
  const handleError = useErrorHandler();
  const breakpoint = 620;

  //console.log(width);

  var idx = -1;
  const [data, setData] = useState([]);

  const getConnectionType = (ConnectionType) => {
    if (ConnectionType === true) return "Primary";
    else return "Secondary";
  };

  const getConnectionStatus = (ConnectionStatus) => {
    if (ConnectionStatus === true) return "Active";
    else return "Inactive";
  };

  const getButtonText = (ConnectionStatus) => {
    if (ConnectionStatus === true) return "Deactivate";
    else return "Activate";
  };

  const getIndex = () => {
    idx++;
    return idx;
  };
  useEffect(() => {
    window.addEventListener("resize", () => setWidth(window.innerWidth));
    axios.get('https://staging-prutils.systempr.com/api/RabbitMQConnectionAPI/GetAllListeners')
    .then((res) => {
      const listeners = res.data.Body.Listeners;
      setData(listeners)
    }).catch(err=>{
      handleError(err);
    })
  },[handleError]);
  return (
    <Container>
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
    <TableContainer sx={{maxHeight:500}}>
      <Table stickyHeader aria-label="table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Listner</StyledTableCell>
            <StyledTableCell align="center">Queue</StyledTableCell>
            <StyledTableCell align="center">Application</StyledTableCell>
            {width > breakpoint && <StyledTableCell align="center">Connection Type</StyledTableCell>}
            <StyledTableCell align="center">Connection Status</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow
              key={row.ListenerName}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell align="center" component="th" scope="row">
              {row.ListenerName}
              </TableCell>
              <TableCell align="center">{row.QueueName}</TableCell>
              <TableCell align="center">{row.Application}</TableCell>
              {width > breakpoint && <TableCell align="center">
                  {getConnectionType(row.IsPrimaryConnection)}
                </TableCell>}
              

              <TableCell align="center">
                {getConnectionStatus(row.IsActive)}
              </TableCell>
              <TableCell align="center">
                <ActivateButton
                  state={row.IsActive}
                  name={getButtonText(row.IsActive)}
                  data={data}
                  idx={getIndex()}
                  action={setData}
                ></ActivateButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </Container>
  );
};

export default RabbitMQ;

// {width > 660 && <h2>You have {width} unread messages.</h2>}