import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useState,useEffect } from "react";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";
import axios from 'axios';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadcrumbsComponent(props) {
  const [breadcrumbs,setBreadcrumbs] = useState([]);
  useEffect(() => {
    axios.get('https://staging-prutils.systempr.com/api/RabbitMQConnectionAPI/GetAllListeners')
    .then((res) => {
      const listeners = res.data.Body.Listeners;
      setBreadcrumbs(listeners)
    })
  }, []);
  return (
    <Container role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ width: "100%", overflow: "hidden" }}
      >
        <Button variant="contained" startIcon={<ArrowBackIcon />} size="small">
          Back
        </Button>
        {props.data.map((breadcrub) => (
          <Link
            underline="hover"
            color="inherit"
            onClick={breadcrub.action}
            href={breadcrub.link}
          >
            {breadcrub.name}
          </Link>
        ))}
        
      </Breadcrumbs>
      &nbsp;
    </Container>
  );
}
