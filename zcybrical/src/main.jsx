import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import Home from './component/Home/Home';
import Work from './component/Work/Work';
import Technologies from './component/Technologies/Technologies';
import HireDeveloper  from "./component/HireDeveloper/HireDeveloper";
import Company from "./component/Company/Company"


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="work" element={<Work />} />
      <Route path="technologies" element={<Technologies />} />
      <Route path="hiredeveloper" element={<HireDeveloper />} />
      <Route path="company" element={<Company />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
