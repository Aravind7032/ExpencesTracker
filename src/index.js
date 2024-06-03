import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';



import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Signup from './components/signup';
import { Login1 } from './components/Login1';
import { Dashboard } from './components/Dashboard';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
       <Route index element={< Signup/>} />
      <Route path="signup" element={< Signup/>} />
      <Route path="Login1" element={< Login1/>} />
      <Route path="dashboard" element={< Dashboard/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);