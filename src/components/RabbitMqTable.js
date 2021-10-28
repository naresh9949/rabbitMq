import React from "react";
import RabbitMQ from "./RabbitMQ";
import BasicBreadcrumbs from "./Breadcrumbs";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";
const data = [
    {
      name : "Breadcrum1",
      link : "www.google.com",
      action : ()=>{
        console.log("Breadcrum1")
      }
    },
    {
      name : "Breadcrum2",
      link : "www.google.com",
      action : ()=>{
        console.log("Breadcrum2")
      }
    },
    {
      name : "Breadcrum3",
      link : "www.google.com",
      action : ()=>{
        console.log("Breadcrum3")
      }
    },
    {
      name : "Breadcrum4",
      link : "www.google.com",
      action : ()=>{
        console.log("Breadcrum4")
      }
    },
    {
      name : "Breadcrum5",
      link : "www.google.com",
      action : ()=>{
        console.log("Breadcrum5")
      }
    }
  ]
  const ErrorHandler = (err,errinfo)=>{
    console.log(err,errinfo);
  }
function RabbitMqTable() {
  return (
    <React.Fragment>
      <BasicBreadcrumbs data={data} />
      <ErrorBoundary FallbackComponent={ErrorComponent} onError={ErrorHandler}>
      <RabbitMQ />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default RabbitMqTable;
