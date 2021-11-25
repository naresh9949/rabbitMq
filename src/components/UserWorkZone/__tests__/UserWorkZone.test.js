// import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import UserWorkZone from "./../UserWorkZone";
// import UserWorkZoneTable from "./../UserWorkZoneTable";
// import { MemoryRouter as Router } from "react-router-dom";
// import Breadcrumbs from "./../../Breadcrumbs";
// import Enzyme from "enzyme";
// import { shallow, mount, configure } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// require("./../UserWorkZone");
// Enzyme.configure({ adapter: new Adapter() });

// const ids = [23445, 56733, 46774, 3456];

// test("Renders UserWorkZone component without crashing", () => {
//   shallow(<UserWorkZone />);
// });

// test("UserWorkZone component contains Breadcrumbs Component", () => {
//   const wrapper = shallow(<UserWorkZone />);
//   const workzonetable = <UserWorkZoneTable />;
//   expect(wrapper.contains(workzonetable)).toEqual(true); 
// });

// test("UserWorkZone component contains Breadcrumbs Component", async() => {
//   const wrapper = shallow(<UserWorkZone />);
//   const breadcrumbs = <Breadcrumbs cur_screen="User WorkZone"/>; 
//   expect(wrapper.contains(breadcrumbs)).toEqual(true);
// });

// describe("Select button is present in the UserWorkZone Component and works good", () => {
//   const wrapper = shallow(<UserWorkZone />);
//   let select = wrapper.find("#select").prop("value");
//   it("the first option is selected by default", () => {
//     expect(select).toEqual(0);
//   });
//   it("on click handler is working with out any errors", () => {
//     wrapper.find("#select").simulate("change", { target: { value: 2 } });
//     select = wrapper.find("#select").prop("value");
//     expect(select).toEqual(2);
//   });
// });

// test("ADD USER WORKZONE button is present", () => {
//   render(
//     <Router>
//       <UserWorkZone />
//     </Router>
//   );
//   expect(screen.getByText(/add user WorkZone/i)).toBeInTheDocument;
// });

// test("ADD WORKZONE button is present", () => {
//   render(
//     <Router>
//       <UserWorkZone />
//     </Router>
//   );

//   expect(screen.getByText(/add WorkZone/i)).toBeInTheDocument;
// });

// test("ADD USER WORKZONE:When button is clicked the popup window is opening without any errors",()=>{
//   render(<Router><UserWorkZone /></Router>);
//   userEvent.click(screen.getByText(/add user WorkZone/i));
//   expect(screen.getByRole("dialog",{name:/Warehouse Name/i})).toBeInTheDocument;
//   expect(screen.getByRole("combobox",{name:"User"})).toBeInTheDocument;
//   expect(screen.getByRole("combobox",{name:"WorkZone"})).toBeInTheDocument;
//   expect(screen.getByRole("combobox",{name:"Sort Locn?"})).toBeInTheDocument;
//   expect(screen.getByRole("Put_Up")).toBeInTheDocument;
//   expect(screen.getByRole("Pull_Down")).toBeInTheDocument;
//   expect(screen.getByRole("Transfer")).toBeInTheDocument;
//   expect(screen.getByRole("Replenish")).toBeInTheDocument;
//   expect(screen.getByRole("InSite_Replenishment")).toBeInTheDocument;
//   expect(screen.getByRole("Processing")).toBeInTheDocument;
//   expect(screen.getByRole("Add_Inventory")).toBeInTheDocument;
//   expect(screen.getByRole("Inventory_Check")).toBeInTheDocument;
//   expect(screen.getByRole("Replenishment_Transfer")).toBeInTheDocument;
//   expect(screen.getByRole("Split_Pallet_Transfer")).toBeInTheDocument;
//   expect(screen.getByRole("Picking_Transfer")).toBeInTheDocument;
// })

// test("ADD USER WORKZONE: pop up contains all the required fiels to select",()=>{
//   render(<Router><UserWorkZone /></Router>);
//   userEvent.click(screen.getByText(/add user WorkZone/i));
//   expect(screen.getByRole("combobox",{name:"User"})).toBeInTheDocument;
//   expect(screen.getByRole("combobox",{name:"WorkZone"})).toBeInTheDocument;
//   expect(screen.getByRole("combobox",{name:"Sort Locn?"})).toBeInTheDocument;
//   expect(screen.getByRole("Put_Up")).toBeInTheDocument;
//   expect(screen.getByRole("Pull_Down")).toBeInTheDocument;
//   expect(screen.getByRole("Transfer")).toBeInTheDocument;
//   expect(screen.getByRole("Replenish")).toBeInTheDocument;
//   expect(screen.getByRole("InSite_Replenishment")).toBeInTheDocument;
//   expect(screen.getByRole("Processing")).toBeInTheDocument;
//   expect(screen.getByRole("Add_Inventory")).toBeInTheDocument;
//   expect(screen.getByRole("Inventory_Check")).toBeInTheDocument;
//   expect(screen.getByRole("Replenishment_Transfer")).toBeInTheDocument;
//   expect(screen.getByRole("Split_Pallet_Transfer")).toBeInTheDocument;
//   expect(screen.getByRole("Picking_Transfer")).toBeInTheDocument;
// })


// test("ADD WORKZONE:When button is clicked the popup window is opening without any errors", () => {
//   render(
//     <Router>
//       <UserWorkZone/>
//     </Router>
//   );
//   userEvent.click(screen.getByText(/add WorkZone/i));
//   expect(screen.getByRole("dialog",{name:/Warehouse Name : /i})).toBeInTheDocument;
// });


// test("ADD WORKZONE:Pop up contains all the required fields", () => {
//   render(
//     <Router>
//       <UserWorkZone/>
//     </Router>
//   );
//   userEvent.click(screen.getByText(/add WorkZone/i));
//   expect(screen.getByRole("textbox")).toBeInTheDocument;
//   expect(screen.getByRole("button",{name:/create/i})).toBeInTheDocument;
//   expect(screen.getByRole("button",{name:"A"})).toBeInTheDocument;
// });




