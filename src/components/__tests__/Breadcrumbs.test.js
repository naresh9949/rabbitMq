import { render, screen ,cleanup,waitForElement} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Breadcrumbs from "./../Breadcrumbs";
import { MemoryRouter as Router } from "react-router-dom";
import Enzyme from "enzyme";
import AxiosMock from "axios";
import { shallow, mount, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
Enzyme.configure({ adapter: new Adapter() });

afterEach(cleanup);

const data = {
  "Header": {
    "Code": 0,
    "IsSuccess": true,
    "Error": "string",
    "Warning": "string"
  },
  "Body": {
    "HomeURL": "#",
    "BackButtonURL": "#",
    "BreadCrumbs": [
      {
        "BreadCrumbName": "NAME1",
        "BreadCrumbURL": "#1"
      },
      {
        "BreadCrumbName": "NAME2",
        "BreadCrumbURL": "#2"
      }
    ]
  }
};

// test("Renders Breadcrumbs component without crashing", async() => {
//   render( <Router><Breadcrumbs cur_screen="User WorkZone"/></Router>);
// });

// test("Breadcrumbs component conatins the correct current function", async() => {
//   render( <Router><Breadcrumbs cur_screen="User WorkZone"/></Router>);
//   expect(screen.getByText('User WorkZone')).toBeInTheDocument;
// });

// test("Breadcrumbs component conatins Back button and Home Link", async() => {
//   render( <Router><Breadcrumbs cur_screen="User WorkZone"/></Router>);
//   expect(screen.getByRole('button',{name:/back/i})).toBeInTheDocument;
//   expect(screen.getByRole('link',{name:/Home/i})).toBeInTheDocument;
// });

 
test("Breadcrumbs showing the correct data from axios", async() =>{
  AxiosMock.get.mockResolvedValue({data:data});
  render( <Router><Breadcrumbs cur_screen="User WorkZone"/></Router>);
  const resolveElement = await waitForElement(()=>screen.getByText("NAME1"))
  
  screen.getByRole('  ')
});

