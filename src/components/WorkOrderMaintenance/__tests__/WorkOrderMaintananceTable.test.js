// import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import WorkOrderMaintananceTable from './../WorkOrderMaintananceTable';
// import Enzyme from 'enzyme';
// import { shallow, mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

// const headCells = [
//     {
//       id: "warehouse",
//       numeric: false,
//       disablePadding: false,
//       label: "Warehouse",
//     },
//     {
//       id: "pallet",
//       numeric: true,
//       disablePadding: false,
//       label: "Pallet",
//     },
//     {
//       id: "item",
//       numeric: true,
//       disablePadding: false,
//       label: "Item",
//     },
//     {
//       id: "workorderType",
//       numeric: false,
//       disablePadding: true,
//       label: "WorkOrderType",
//     },
//     {
//       id: "originLocation",
//       numeric: false,
//       disablePadding: false,
//       label: "OriginLocation",
//     },
//     {
//       id: "originZone",
//       numeric: false,
//       disablePadding: false,
//       label: "OriginZone",
//     },
//     {
//       id: "designationLocation",
//       numeric: false,
//       disablePadding: false,
//       label: "DesignationLocation",
//     },
//     {
//       id: "designationZone",
//       numeric: false,
//       disablePadding: false,
//       label: "DesignationZone",
//     },
//     {
//       id: "asignedUser",
//       numeric: false,
//       disablePadding: false,
//       label: "AsignedUser",
//     },
//     {
//       id: "priority",
//       numeric: true,
//       disablePadding: false,
//       label: "Priority",
//     },
//     {
//       id: "status",
//       numeric: false,
//       disablePadding: false,
//       label: "Status",
//     },
//     {
//       id: "reasonCode",
//       numeric: true,
//       disablePadding: false,
//       label: "ReasonCode",
//     },
//     {
//       id: "createdDateNumber",
//       numeric: true,
//       disablePadding: false,
//       label: "CreatedDate",
//     },
//   ];

//   var rows = [
//     {
//       warehouse: "warehouse1",
//       pallet: 7899,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "completed",
//       reasonCode: "ANY78ER90",
//       createdDate: "12/08/2021",
//     },
//     {
//       warehouse: "warehouse2",
//       pallet: 8567,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "11/08/2021",
//     },
//     {
//       warehouse: "warehouse3",
//       pallet: 5678,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 2,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "13/08/2021",
//     },
//     {
//       warehouse: "warehouse4",
//       pallet: 1234,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "completed",
//       reasonCode: "ANY78ER90",
//       createdDate: "14/10/2019",
//     },
//     {
//       warehouse: "warehouse5",
//       pallet: 4567,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 2,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "12/10/2019",
//     },
//     {
//       warehouse: "warehouse1",
//       pallet: 7899,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "12/08/2021",
//     },
//     {
//       warehouse: "warehouse2",
//       pallet: 8567,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "11/08/2021",
//     },
//     {
//       warehouse: "warehouse3",
//       pallet: 5678,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 2,
//       status: "completed",
//       reasonCode: "ANY78ER90",
//       createdDate: "13/08/2021",
//     },
//     {
//       warehouse: "warehouse4",
//       pallet: 1234,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "14/10/2019",
//     },
//     {
//       warehouse: "warehouse5",
//       pallet: 4567,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 2,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "12/10/2019",
//     },
//     {
//       warehouse: "warehouse1",
//       pallet: 7899,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "12/08/2021",
//     },
//     {
//       warehouse: "warehouse2",
//       pallet: 8567,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 3,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "11/08/2021",
//     },
//     {
//       warehouse: "warehouse3",
//       pallet: 5678,
//       item: 899,
//       workorderType: "TYPE1",
//       originLocation: "INDIA",
//       originZone: "C",
//       designationLocation: "A",
//       designationZone: "A",
//       asignedUser: "",
//       priority: 2,
//       status: "pending",
//       reasonCode: "ANY78ER90",
//       createdDate: "13/08/2021",
//     },
//   ];
  

// test('WorkOrderMaintananceTable rendered successfully!',()=>{
//     const workzonetable = render(<WorkOrderMaintananceTable/>)
//     expect(workzonetable).toBeInTheDocument
// })


// test('The WorkOrderMaintananceTable conatins all the required columns',()=>{
//     render(<WorkOrderMaintananceTable/>)   
//     for(let i=0;i<headCells.length;i++)
//     expect(screen.getByRole("columnheader",{name:headCells[0].label})).toBeInTheDocument;
            
// })

// test('delete button is present!',()=>{
//     render(<WorkOrderMaintananceTable/>)
//    expect(screen.getAllByRole('button',{name:/edit/i}).length).toEqual(5);
// })


// test('the WorkOrderMaintananceTable shows the correct data as we have in responce of API call!',()=>{
//     render(<WorkOrderMaintananceTable/>) 
//         for(let i=0;i<5;i++){
//         let data = "warehouse"+i+" "+rows[i].pallet+" "+rows[i].item+" "+rows[i].workorderType+" "+rows[i].originLocation+" "+rows[i].originZone+" "+rows[i].designationLocation+" "+rows[i].designationZone+" "+"User"+i.toString()+" "+rows[i].priority+" "+rows[i].status+" "+rows[i].reasonCode+" "+rows[i].createdDate+" Edit";
//         expect(screen.getByRole("row",{name:data})).toBeInTheDocument;
//         }
// })


// test('the soring functionality is working',()=>{
//   render(<WorkOrderMaintananceTable/>)  
//   // checking sorting in incresing order 
//   userEvent.click(screen.getByText("Warehouse"))
  
//  for(let i=0;i<rows.length; i++){
//  rows[i].warehouse = "warehouse"+i;
//  rows[i].asignedUser = "User"+i;
//  }
//   rows.sort((row1,row2)=>{
//     if(row1.warehouse > row2.warehouse) return 1; 
//     else return -1;
//   })
//   for(let i=0;i<5;i++){
//     let data = rows[i].warehouse+" "+rows[i].pallet+" "+rows[i].item+" "+rows[i].workorderType+" "+rows[i].originLocation+" "+rows[i].originZone+" "+rows[i].designationLocation+" "+rows[i].designationZone+" "+rows[i].asignedUser+" "+rows[i].priority+" "+rows[i].status+" "+rows[i].reasonCode+" "+rows[i].createdDate+" Edit";
//     expect(screen.getByRole("row",{name:data})).toBeInTheDocument;
//     } 

//     userEvent.click(screen.getByText("Warehouse"))
//     rows.sort((row1,row2)=>{
//         if(row1.warehouse > row2.warehouse) return -1; 
//         else return 1;
//       }) 

//       for(let i=0;i<5;i++){
//         let data = rows[i].warehouse+" "+rows[i].pallet+" "+rows[i].item+" "+rows[i].workorderType+" "+rows[i].originLocation+" "+rows[i].originZone+" "+rows[i].designationLocation+" "+rows[i].designationZone+" "+rows[i].asignedUser+" "+rows[i].priority+" "+rows[i].status+" "+rows[i].reasonCode+" "+rows[i].createdDate+" Edit";
//         expect(screen.getByRole("row",{name:data})).toBeInTheDocument;
//     } 
// })


