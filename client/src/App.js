import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Status from './Components1/Student_Attend/Status';
import Home from './Components1/Home';
import Login from './components/Login'
import Register from './components/Register'
import Custom from './Attend/Custom';
import Dialog from './Attend/Dialog';
import Section from './Attend/Section';
import PrivateRoutes from './Protected Route/PrivateRoutes';
const App = () => {
  return (
    <div className='Home'>
      <BrowserRouter>
        <Sidebar>
          <Routes>

            <Route element={<PrivateRoutes />} >
              <Route path="/" element={<Home />} />
              <Route path="/sec" element={<Section />} />
              <Route path="/sec/fatt" element={<Custom />} />
              <Route path="/satt" element={<Status />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/sec/fatt/alter' element={<Dialog />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;