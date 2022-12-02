import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

import { useState, useEffect } from 'react';

import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  function Fac() {
    const [fac, setfac] = useState([]);
    
    const [search, setSearch] = useState("");

    const getfacData = async () => {
      try {
        const data = await axios.get(
          "/admin/getAllfac"
        );
        console.log(data.data);
        setfac(data.data);
      } catch (e) {
        console.log(e);
      }
    };
  
    useEffect(() => {
      getfacData();
    }, []);

    return (
  
      <div>
        <center>
          <div style={{marginTop:50}}>
  
            <input style={{ borderRadius: 10, height: 30, widht: 50, marginLeft: 600, marginTop: -100, position: 'absolute' }}
              type="text"
              placeholder="Enter Faculty ID"
              onChange={(e) => {
                setSearch(e.target.value);
              }}
            />
          </div>
  
  
        </center>
        <Table striped bordered hover style={{width:"120%",background:'rgba(255,255,255,0.5)'}}>
          <thead>
            <tr>
              
            <th>Faculty Id</th>
            <th>Fname</th>
            <th>Lname</th>
            <th>Dob</th>
            <th>Gender</th>
            <th>Age</th>
            <th>Phone</th>
            <th>Address</th>
  
  
            </tr>
          </thead>
          <tbody>
            {fac.filter((item) => {
              if (search === "") {
                return item;
              } else if (
                item.FacultyId.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            }).map((item) => {
              return (
                <tr key={item._id} >
                  <td>{item.FacultyId} </td>
                <td>{item.Fname} </td>
                <td>{item.Lname} </td>
                <td>{item.Dob} </td>
                <td>{item.Gender} </td>
                <td>{item.Age} </td>
                <td>{item.Phone} </td>
                <td>{item.Address} </td>

                </tr>
              );
            })}
          </tbody>
        </Table>
        
      </div>
    )
  }
  export default Fac