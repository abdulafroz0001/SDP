import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Status from './Components1/Student_Attend/Status';
import Home from './Components1/Home';
import Login from './components/Login'
import Logout from './components/Logout';
import Register from './components/Register'
import Custom from './Attend/Custom';
import Dialog from './Attend/Dialog';
import Section from './Attend/Section';
import PrivateRoutes from './Protected Route/PrivateRoutes';
import FacultyRoutes from './Protected Route/FacultyRoutes';
import StudentRoutes from './Protected Route/StudentRoutes';
import Result from './Result/Result';
import Resultout from './Result/Resultout';
import Student from './Admin/Stu'
import ProfilePage from './Profile/ProfilePage';
import Alldetails from './Admin/Alldetails'
import AdminRoutes from './Protected Route/AdminRoutes';
const App = () => {

  return (
    <div className='Home'>
      <BrowserRouter>
        <Sidebar>
          <Routes>

            <Route element={<PrivateRoutes />} >
              
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path='/profile' element={<ProfilePage />} />
            
            {/* Public Routes End */}
              {/* Student Routes */}

              <Route element={<StudentRoutes/>}>

                    <Route path="/satt" element={<Status />} />
                    <Route path='/result' element={<Resultout />} />
              </Route>
              
              {/* Student Routes End*/}

              {/* Faculty Routes */}
                  <Route element={<FacultyRoutes />}>
                      <Route path="/sec" element={<Section />} />
                      <Route path="/sec/fatt" element={<Custom />} />
                      <Route path='/sec/fatt/alter' element={<Dialog />} />
                  </Route>
              {/* FacultyRoutes End */}

              {/* Admin Routes */}
              <Route element={<AdminRoutes/>} >
                    <Route path='/admin/getAll' element={<Alldetails />} />
                    <Route path='/register' element={<Register />} />
                    
              </Route>
              
              {/* Admin Routes End*/}

            

             </Route>
             <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </Sidebar>
      </BrowserRouter>
    </div>
  );
};

export default App;