// import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
// import UserWorkZoneTable from './../UserWorkZoneTable';
// import Enzyme from 'enzyme';
// import { shallow, mount, configure } from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({ adapter: new Adapter() });

// const global_rows = [
//     {
//       userId: "Pk",
//       userName: "Krishna Padmanabhan",
//       Locations: [
//         { name: "A", active: true },
//         { name: "B", active: false },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: true,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "NV",
//       userName: "PK",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "MO",
//       userName: "Anjula",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: false },
//         { name: "C", active: true },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "ZA",
//       userName: "Raghu",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: false,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: false,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "Pk",
//       userName: "Krishna Padmanabhan",
//       Locations: [
//         { name: "A", active: true },
//         { name: "B", active: false },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: true,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "NV",
//       userName: "PK",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "MO",
//       userName: "Anjula",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: false },
//         { name: "C", active: true },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "ZA",
//       userName: "Raghu",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: false,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: false,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "Pk",
//       userName: "Krishna Padmanabhan",
//       Locations: [
//         { name: "A", active: true },
//         { name: "B", active: false },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: true,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "NV",
//       userName: "PK",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "MO",
//       userName: "Anjula",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: false },
//         { name: "C", active: true },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "ZA",
//       userName: "Raghu",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: false,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: false,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "Pk",
//       userName: "Krishna Padmanabhan",
//       Locations: [
//         { name: "A", active: true },
//         { name: "B", active: false },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: true,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     },
//     {
//       userId: "NV",
//       userName: "PK",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "MO",
//       userName: "Anjula",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: false },
//         { name: "C", active: true },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: true,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: true,
//       Replenish: false,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: true,
//       Inventory_Check: false,
//     },
//     {
//       userId: "ZA",
//       userName: "Raghu",
//       Locations: [
//         { name: "A", active: false },
//         { name: "B", active: true },
//         { name: "C", active: false },
//       ],
//       sort_locn: {
//         Locations: ["BackupLocation", "PickLocation"],
//         active: "BackupLocation",
//       },
//       Put_Up: false,
//       Pull_Down: false,
//       Sort_Locn: null,
//       Transfer: false,
//       Replenish: true,
//       InSite_Replenishment: false,
//       Processing: false,
//       Add_Inventory: false,
//       Inventory_Check: true,
//     }
//   ];

// test('UserWorkZoneTable rendered successfully!',()=>{
//     const workzonetable = render(<UserWorkZoneTable/>)
//     expect(workzonetable).toBeInTheDocument
// })


// test('The user work zone table conatins all the required columns',()=>{
//     render(<UserWorkZoneTable/>)   
//     expect(screen.getAllByText("User Id")).toBeInTheDocument;
//     expect(screen.getAllByText("User Name")).toBeInTheDocument;
//     expect(screen.getAllByText("Sort Locn?")).toBeInTheDocument;
//     expect(screen.getAllByText("Pull-Down")).toBeInTheDocument;
//     expect(screen.getAllByText("Pull-Up")).toBeInTheDocument;
//     expect(screen.getAllByText("Transfer")).toBeInTheDocument;
//     expect(screen.getAllByText("Replenish")).toBeInTheDocument; 
//     expect(screen.getAllByText("inSite Replenishment")).toBeInTheDocument;
//     expect(screen.getAllByText("Add Inventory")).toBeInTheDocument;   
//     expect(screen.getAllByText("Inventory Check")).toBeInTheDocument;         
// })

// test('delete button is present!',()=>{
//     render(<UserWorkZoneTable/>)
//    expect(screen.getAllByRole('delete-button')).toBeInTheDocument;
// })


// test('the table shows the correct data as we have in responce of API call!',()=>{
//     render(<UserWorkZoneTable/>) 
//     for(let i=0;i<5;i++)
//     expect(screen.getAllByRole('rowheader',{name:global_rows[i]["userId"]})).toBeInTheDocument; 
//     //screen.getAllByRole('rowheader',{name:'Pk'})
// })


// test('the soring functionality is working',()=>{
//   render(<UserWorkZoneTable/>)  
//   // checking sorting in incresing order 
//   userEvent.click(screen.getByText('User Id'))
//   global_rows.sort((row1,row2)=>{
//     if(row1.userId > row2.userId) return 1;
//     else return -1;
//   })
//   expect(screen.getByRole('columnheader',{name:"User Id sorted ascending"})).toBeInTheDocument;
//   for(let i=0;i<5;i++)
//   expect(screen.getAllByRole('rowheader',{name:global_rows[i]["userId"]})).toBeInTheDocument; 

//   // checking sorting in reverse order  
//   userEvent.click(screen.getByText('User Id'))
//   global_rows.sort((row1,row2)=>{
//     if(row1.userId > row2.userId) return -1;
//     else return 1;
//   })
//   for(let i=0;i<5;i++)
//   expect(screen.getAllByRole('rowheader',{name:global_rows[i]["userId"]})).toBeInTheDocument; 
  
// })


