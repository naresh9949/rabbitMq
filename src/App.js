import React,{ Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Spinner from './components/Spinner';
import NavBar from "./components/NavBar";
const UserWorkZone = React.lazy(() => import('./components/UserWorkZone/UserWorkZone'));
const RabbitMQ = React.lazy(() => import('./components/RabbitMq/RabbitMQ'));
const WorkOrderMaintenance = React.lazy(() => import('./components/WorkOrderMaintenance/WorkOrderMaintenance'));
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Suspense fallback={<Spinner/>}>
      <BrowserRouter>
        <Routes>
          <Route path="/work-order-maintanance" element={<WorkOrderMaintenance/>} />
          <Route path="/rabbitMq" element={<RabbitMQ/>} /> 
          <Route path="/UserWorkZone" element={<UserWorkZone/>} />
           
        </Routes>
      </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
