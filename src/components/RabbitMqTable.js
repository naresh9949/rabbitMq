import React from "react";
import RabbitMQ from "./RabbitMQ";
import BasicBreadcrumbs from "./Breadcrumbs";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./ErrorComponent";

  const ErrorHandler = (err,errinfo)=>{
    console.log(err,errinfo);
  }
function RabbitMqTable() {
  return (
    <React.Fragment>
      <BasicBreadcrumbs/>
      <ErrorBoundary FallbackComponent={ErrorComponent} onError={ErrorHandler}>
      <RabbitMQ />
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default RabbitMqTable;
