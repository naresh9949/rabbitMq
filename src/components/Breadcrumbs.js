import * as React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import { useState, useEffect } from "react";
import Link from "@mui/material/Link";
import axios from "axios";
import Button from "@mui/material/Button";
import HomeIcon from "@mui/icons-material/Home";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useLocation, useNavigate } from "react-router-dom";

export default function BreadcrumbsComponent(props) {
  const navigate = useNavigate();
  const search = useLocation().search;
  const id = new URLSearchParams(search).get("pid")
    ? new URLSearchParams(search).get("id")
    : 0;
  const pid = new URLSearchParams(search).get("pid")
    ? new URLSearchParams(search).get("pid")
    : 0;
  const fname = new URLSearchParams(search).get("fname")
    ? new URLSearchParams(search).get("fname")
    : "none";
  const isReffered = new URLSearchParams(search).get("isReffered")
    ? new URLSearchParams(search).get("isReffered")
    : false;
  const referrer = new URLSearchParams(search).get("referrer")
    ? new URLSearchParams(search).get("referrer")
    : "none";
  const domain = ".com";
  //pid=95&fname=User+WorkZone&isReffered=false&referrer=https://staging-wms.systempr.com
  //http://localhost:3000/UserWorkZone?id=4567&pid=56788&fname=User+WorkZone&isReffered=false&referrer=https://staging-wms.systempr.com

  // object for initial rendring of component
  const Initial_Breadcrumbs = {
    BreadCrumbs: [],
    HomeURL: "/",
    BackButtonURL: "",
  };
  const current_screen = { BreadCrumbName:props.cur_screen,BreadCrumbURL:'#'}
  Initial_Breadcrumbs.BreadCrumbs.push(current_screen);
  const [breadcrumbs, setBreadcrumbs] = useState(Initial_Breadcrumbs);
  useEffect(() => {
    // Fetching the breadcrumbs data from the API end point and storing that into local breadcrumbs
    axios
      .get(
        "https://staging-prutils.systempr.com/api/BreadCrumbsAPI/GetBreadCrumbs?id=" +
          id.toString() +
          "&pid=" +
          pid.toString() +
          "&referrer=" +
          referrer.toString() +
          "&IsReffered=" +
          isReffered.toString() +
          "&domain=" +
          domain.toString()
      )
      .then((res) => {
        if (res.data.Header.IsSuccess) {
          const BreadCrumbs = res.data.Body;
          setBreadcrumbs(BreadCrumbs);
        }
      })
      .catch((err) => {
        console.log("Breadcrumbs ERROR");
      });
  }, []);
  return (
    <div style={{ padding: 8, paddingTop: 0 }}>
      <Breadcrumbs
        aria-label="breadcrumb"
        separator="››"
        sx={{ width: "100%", overflow: "hidden" }}
      >
        <Button
          variant="contained"
          key="back"
          onClick={() => navigate(-1)}
          startIcon={<ArrowBackIcon />}
          size="small"
        >
          back
        </Button>

        <Link
          key="home"
          underline="hover"
          sx={{ display: "flex", alignItems: "center" }}
          color="#588EE7"
          href={breadcrumbs.HomeURL}
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Home
        </Link>

        {breadcrumbs.BreadCrumbs.map((breadcrub, index) =>
          // render with links if breadcrub is not the last one else render without link field
          index !== breadcrumbs.BreadCrumbs.length - 1 ? (
            <Link
              key={breadcrub.BreadCrumbName}
              underline="hover"
              color="#588EE7"
              href={breadcrub.BreadCrumbURL}
            >
              {breadcrub.BreadCrumbName}
            </Link>
          ) : (
            <Link color="inherit" key="cur_screen" sx={{ textDecoration: "none" }}>
              {breadcrub.BreadCrumbName}
            </Link>
          )
        )}
      </Breadcrumbs>
    </div>
  );
}
