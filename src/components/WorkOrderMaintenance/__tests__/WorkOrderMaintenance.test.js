// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import WorkOrderMaintenance from "./../WorkOrderMaintenance";
// import WorkOrderMaintananceTable from "./../WorkOrderMaintananceTable";
// import { MemoryRouter as Router } from "react-router-dom";
// import Breadcrumbs from "./../../Breadcrumbs";
// import Enzyme from "enzyme";
// import { shallow, mount, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// Enzyme.configure({ adapter: new Adapter() });

// const ids = [23445, 56733, 46774, 3456];


// test("Renders WorkOrderMaintenance component without crashing", () => {
//   shallow(<WorkOrderMaintenance/>);
// }); 

// test("WorkOrderMaintenance component contains WorkOrderMaintananceTable Component", () => {
//   const wrapper = shallow(<WorkOrderMaintenance />);
//   const workzonetable = <WorkOrderMaintananceTable />;
//   expect(wrapper.contains(workzonetable)).toEqual(true);
// });

// test("WorkOrderMaintenance component contains Breadcrumbs Component", () => {
//   const wrapper = shallow(<WorkOrderMaintenance />);
//   const breadcrumbs = <Breadcrumbs cur_screen="Work Order Maintanance"/>; 
//   expect(wrapper.contains(breadcrumbs)).toEqual(true); 
//   const breadcrumbs_two = <Breadcrumbs cur_screen="User WorkZone"/>; 
//   expect(wrapper.contains(breadcrumbs_two)).toEqual(false); 
// });

// describe("Select button is present in the WorkOrderMaintenance Component and works good", () => {
//   const wrapper = shallow(<WorkOrderMaintenance />);
//   let select = wrapper.find("#select").prop("value");
//   //console(wrapper.debug())
//   it("Warehouse Option Label is present on screen",()=>{
//     expect(wrapper.contains( <h4>Warehouse:</h4>)).toEqual(true);
//   })
//   it("the first option is selected by default", () => {
//     expect(select).toEqual(0);
//   });
//   it("on click handler is working with out any errors", () => {
//     wrapper.find("#select").simulate("change", { target: { name:"Warehouse",value: 1 } });
//     select = wrapper.find("#select").prop("value");
//     expect(select).toEqual(1);
//   });
// });


// describe("Completed and Cancled button is present in the WorkOrderMaintenance Component and works good", () => {
//     const wrapper = shallow(<WorkOrderMaintenance />);
//     let select = wrapper.find("#completed").prop("value");
//     //console(wrapper.debug())
//     it("Completed and Cancled Label is present on screen",()=>{
//       expect(wrapper.contains(<h4>Completed and Cancled:</h4>)).toEqual(true);
//     })
//     it("Initially the check box is unchecked", () => {
//       expect(select).toEqual(false);
//     });
//     it("on click handler is working with out any errors", () => {
//       wrapper.find("#completed").simulate("click", { target: { name:"completed-and-cancle"} });
//       select = wrapper.find("#completed").prop("value");
//       expect(select).toEqual(true);
//       wrapper.find("#completed").simulate("click", { target: { name:"completed-and-cancle"} });
//       select = wrapper.find("#completed").prop("value");
//       expect(select).toEqual(false);
//     });
//   });



// describe("Select Start Date button is present in the WorkOrderMaintenance Component and works good", () => {
//   const wrapper = shallow(<WorkOrderMaintenance />);
//   let date = wrapper.find("#startdate").prop("value");
//   date = date.getDate().toString()+(date.getMonth()+1).toString()+date.getFullYear().toString();
//   it("Select Start Date Option Label is present on screen",()=>{
//     expect(wrapper.contains( <h4>From Date: </h4>)).toEqual(true);
//   })
//   it("the today's date is selected by default", () => {
//     let expected_date = new Date();
//     expected_date = expected_date.getDate().toString()+(expected_date.getMonth()+1).toString()+expected_date.getFullYear().toString();
//     expect(date).toEqual(expected_date);
//   });
//   it("on click handler is working with out any errors", () => {
//     var date = new Date();
//     date.setDate(date.getDate() + 7);
//     const expected_date = date.getDate().toString()+(date.getMonth()+1).toString()+date.getFullYear().toString();
    
//     wrapper.find("#startdate").simulate("change", date);
//     let received_date = wrapper.find("#startdate").prop("value");
//     received_date = new Date(received_date);
//    received_date = received_date.getDate().toString()+(received_date.getMonth()+1).toString()+received_date.getFullYear().toString();
//     expect(received_date).toEqual(expected_date);
//   });
// });



// describe("Select End Date button is present in the WorkOrderMaintenance Component and works good", () => {
//   const wrapper = shallow(<WorkOrderMaintenance />);
//   let date = wrapper.find("#enddate").prop("value");
//   date = date.getDate().toString()+(date.getMonth()+1).toString()+date.getFullYear().toString();
//   it("Select End Date Option Label is present on screen",()=>{
//     expect(wrapper.contains( <h4>From Date: </h4>)).toEqual(true);
//   })
//   it("the today's date is selected by default", () => {
//     let expected_date = new Date();
//     expected_date = expected_date.getDate().toString()+(expected_date.getMonth()+1).toString()+expected_date.getFullYear().toString();
//     expect(date).toEqual(expected_date);
//   });
//   it("on click handler is working with out any errors", () => {
//     var date = new Date();
//     date.setDate(date.getDate() + 7);
//     const expected_date = date.getDate().toString()+(date.getMonth()+1).toString()+date.getFullYear().toString();
//     wrapper.find("#enddate").simulate("change", date);
//     let received_date = wrapper.find("#enddate").prop("value");
//     received_date = new Date(received_date);
//    received_date = received_date.getDate().toString()+(received_date.getMonth()+1).toString()+received_date.getFullYear().toString();
//     expect(received_date).toEqual(expected_date);
//   });
// });

 







