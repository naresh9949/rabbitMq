import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";

function handleClick(event) {
  event.preventDefault();
  console.info("You clicked a breadcrumb.");
}

export default function BreadcrumbsComponent(props) {
  return (
    <Container role="presentation" onClick={handleClick}>
      <Breadcrumbs
        aria-label="breadcrumb"
        sx={{ width: "100%", overflow: "hidden" }}
      >
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
    </Container>
  );
}
