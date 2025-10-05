import React from 'react';



import { createBrowserRouter } from "react-router";
import App from '../src/App';
import Root from '../src/Root/Root';
import Homepage from '../src/page/Homepage';
import DashBoardLayout from '../src/Dashboard/Dashboard';
import MyProfile from '../src/Dashboard/MyProfile';



export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[

      {index:true,
       Component:Homepage   
      },
    ]

    
  },
  {
    path: "/dashboard",
    Component:DashBoardLayout,
    children:[
      {
        path:"myProfile",
        Component:MyProfile
      }
    ]
  }
]);