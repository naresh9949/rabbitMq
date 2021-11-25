import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Container } from "@mui/material";

function Spinner() {
    return (
        <Container align="center" sx={{paddingTop:'20%'}}>
        <CircularProgress color="success"/>
        </Container>
    )
}

export default Spinner
