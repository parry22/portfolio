import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import About from './About';
import Testimonials from './Testimonials';
import Contact from './Contact';
import SchoolIntegral from './SchoolIntegral';
import Fantasia from './Fantasia/Fantasia';
import IntuitionAI from './IntuitionAI';
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
      <Sidebar>

    {children}
      </Sidebar>
    </div>
  </div>
  </>
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout><Dashboard /></Layout>,
  },
  {
    path: "/About",
    element: <Layout><About /></Layout>,
  },
  {
    path: "/Testimonials",
    element: <Layout><Testimonials /></Layout>,
  },
  {
    path: "/Contact",
    element: <Layout><Contact /></Layout>,
  },
  {
    path: "/SchoolIntegral",
    element: <Layout><SchoolIntegral /></Layout>,
  },
  {
    path: "/Fantasia",
    element: <Layout><Fantasia /></Layout>,
  },
  {
    path: "/IntuitionAI",
    element: <Layout><IntuitionAI /></Layout>,
  },
]);

function App() {
  return (
    
      <div className="bg-gray-900 min-h-screen w-full">
       {/* <Sidebar /> */}
        {/* <Dashboard /> */}
        <RouterProvider router={router} />
        {/* <Routes>
          <Route path="/" element={<Dashboard />} />
        </Routes> */}
      </div>
    
  );
}

export default App;

