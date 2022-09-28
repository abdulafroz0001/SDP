import React, { useState } from 'react';
import {
    FaBars,
    FaRegChartBar,

}from "react-icons/fa";
import {GrHomeRounded} from 'react-icons/gr'
import {GiNotebook} from 'react-icons/gi'
import {SiBookmeter} from 'react-icons/si'
import { NavLink } from 'react-router-dom';


const Sidebar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Home",
            icon:<GrHomeRounded/>
        },
        {
            path:"/satt",
            name:"SAttendance",
            icon:<GiNotebook/>
        },
        {
            path:"/sec",
            name:"FAttendance",
            icon:<SiBookmeter/>
        },
        {
            path:"/login",
            name:"Login",
            icon:<SiBookmeter/>
        },
        
    ]
    return (
        <div className="container" style={{marginLeft:'-1%',bsGgutterX: '0rem'}}>
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none", fontSize:23}} className="logo"><span>KL </span><span>ERP</span></h1><br></br>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Sidebar;