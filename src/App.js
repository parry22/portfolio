import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const Layout=({
  children
})=>{
  return <>
  <div className="d-flex-container">
    <div className="d-flex">
      <Sidebar/>
    {children}
    </div>
  </div>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Dashboard /></Layout>,
  },
]);

function App() {
  return (
    <Router>
      <div className="bg-gray-900 min-h-screen w-full">
       {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        <RouterProvider router={router} />
        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes> */}
      </div>
    </Router>
  );
}

export default App;

