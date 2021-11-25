import React from "react";
import RabbitMQTable from "./RabbitMqTable";
import BasicBreadcrumbs from "./../Breadcrumbs";
import { ErrorBoundary } from "react-error-boundary";
import ErrorComponent from "./../ErrorComponent";

  const ErrorHandler = (err,errinfo)=>{
    console.log(err,errinfo);
  }
function RabbitMqTable() {
  return (
    <React.Fragment>
      <BasicBreadcrumbs cur_screen="RabbitMQ Listeners"/>
      <ErrorBoundary FallbackComponent={ErrorComponent} onError={ErrorHandler}>
      <RabbitMQTable/>
      </ErrorBoundary>
    </React.Fragment>
  );
}

export default RabbitMqTable;
