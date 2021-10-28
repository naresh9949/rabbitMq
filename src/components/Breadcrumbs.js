import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import { Container } from "@mui/material";
import axios from "axios";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";



export default function BreadcrumbsComponent() {

  // object for initial rendring of component
  const Initial_Breadcrumbs = 
  {
    "BreadCrumbs": [],
    "HomeURL": "",
    "BackButtonURL": ""
}
  const [breadcrumbs, setBreadcrumbs] = useState(Initial_Breadcrumbs);
  useEffect(() => {

    // Fetching the breadcrumbs data from the API end point and storing that into local breadcrumbs
    axios
      .get(
        "https://staging-prutils.systempr.com/api/BreadCrumbsAPI/GetBreadCrumbs?id=1&pid=2&referrer=adds&IsReffered=true&domain=ndj"
      )
      .then((res) => {
        if(res.data.Header.IsSuccess){
        const BreadCrumbs = res.data.Body;
        setBreadcrumbs(BreadCrumbs);
        }
      }).catch(err=>{

      });
  }, []);
  return (
    <Container role="presentation">
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="››"
        sx={{ width: "100%", overflow: "hidden" }}
      >
      {breadcrumbs.BackButtonURL!=="" &&
         <Button variant="contained" startIcon={<ArrowBackIcon />} size="small">
         <Link
             href={breadcrumbs.BackButtonURL}
             sx={{color:'white',textDecoration:'none'}}
           >
             back
           </Link>
         </Button>
      }
       
       {breadcrumbs.BackButtonURL!=="" &&
        <Link
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="#588EE7"
          href={breadcrumbs.HomeURL}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>
        }
        {breadcrumbs.BreadCrumbs.map((breadcrub,index) => (

          // render with links if breadcrub is not the last one else render without link field
          index!==breadcrumbs.BreadCrumbs.length-1?
          <Link
            underline="hover"
            color="#588EE7" 
            href={breadcrub.BreadCrumbURL}
          >
            {breadcrub.BreadCrumbName}
          </Link>
          :
          <Link color="inherit" sx={{textDecoration:'none'}}>
          {breadcrub.BreadCrumbName}
        </Link>


        ))}

      </Breadcrumbs>
      &nbsp;
    </Container>
  );
}
