import React from 'react';



import { createBrowserRouter } from "react-router";
import App from '../src/App';
import Root from '../src/Root/Root';
import Homepage from '../src/page/Homepage';




export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    children:[

      {index:true,
       Component:Homepage   
      },
    ]

    
  }

]);