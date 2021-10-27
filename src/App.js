import React from "react";
import RabbitMQ from './components/RabbitMQ';
import NavBar from './components/NavBar';
import BasicBreadcrumbs from './components/Breadcrumbs'
//import Table from './Table'
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
function App() {
  return (
    <div className="App">
      <NavBar/>
      <BasicBreadcrumbs data={data}/>
      <RabbitMQ/>
    </div> 
  );
}

export default App;
