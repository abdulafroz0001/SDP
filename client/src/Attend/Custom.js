import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Progress from './Progress';
import axios from 'axios';
import Isoswitch from './Isoswitch';
import { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
function Custom() {
  const [att, setAtt] = useState([]);
  const [search, setSearch] = useState("");
  //dialog
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  //dialog

  const getAttData = async () => {
    try {
      const data = await axios.get(
        "/getAtt"
      );
      console.log(data.data);
      setAtt(data.data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getAttData();
  }, []);
  return (

    <div>
      <center>
        <div style={{marginTop:50}}>

          <input style={{ borderRadius: 10, height: 30, widht: 50, marginLeft: 500, marginTop: -37, position: 'absolute' }}
            type="text"
            placeholder="Search here"
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>


      </center>
      <Table striped bordered hover style={{width:"120%",background:'rgba(255,255,255,0.5)'}}>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Overall</th>
            <th>Lecture</th>
            <th>Tutorial</th>
            <th>Practical</th>


          </tr>
        </thead>
        <tbody>
          {att.filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          }).map((item) => {
            return (
              <tr key={item.id} >
                <td><Isoswitch /></td>
                <td>{item.id} </td>
                <td>{item.name} </td>
                <td><Progress done={item.pro} /></td>
                <td><Progress done={item.pro} /></td>
                <td><Progress done={item.pro} /></td>
                <td><Progress done={item.pro} /></td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      <button class="custom-btn btn-6"  onClick={handleClickOpen}>
        Proceed
      </button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
        
      >
        <DialogTitle>{"Absenties Are :"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <Table striped bordered hover style={{width:"120%",background:'rgba(255,255,255,0.5)'}}>
        <thead>
          <tr>
            <th>Select</th>
            <th>ID</th>
            <th>Name</th>
            <th>Overall</th>
          </tr>
        </thead>
        <tbody>
          {att.filter((item) => {
            if (search === "") {
              return item;
            } else if (
              item.name.toLowerCase().includes(search.toLowerCase())
            ) {
              return item;
            }
          }).map((item) => {
            return (
              <tr key={item.id} >
                <td><Isoswitch /></td>
                <td>{item.id} </td>
                <td>{item.name} </td>
                <td><Progress done={item.pro} /></td>
                
              </tr>
            );
          })}
        </tbody>
      </Table>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>GO back</Button>
          <Button onClick={handleClose}>Submit</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}
export default Custom