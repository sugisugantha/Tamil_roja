
import Business from "../../Pages/Business/Business";
import Home from "../../Pages/Home/Home";

import ManageBusiness from "../../Pages/Manage/Business/ManageBusiness";


import Contact from "../../Pages/Manage/Contact/Contact";
import ManageService from "../../Pages/Manage/Services/ManageService";

import UserContact from "../../Pages/Manage/UserContact/UserContact";
import Services from "../../Pages/Services/Services";

import NotFound from "../NotFound/NotFound";


const route = [
  { path: "/", element: <Home /> },
  {path:"/service",element:<Services/>},
  {path:"/business",element:<Business/>},
  {path:"/manage/contact",element:<Contact/>},
  {path:"/manage/service",element:<ManageService/>},
  {path:"/manage/business",element:<ManageBusiness/>},

  {path:"/manage/user-contact",element:<UserContact/>},


  { path: "*", element: <NotFound /> },
];

export default route;
