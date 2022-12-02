import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Paper, TextField } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';
import './Profile.css'

export default function ProfilePage() {

  const getPayloadFromToken = token => {
    console.log(token);
    const encodedPayload = token.split('.')[1];
    return JSON.parse(atob(encodedPayload));

    
    }
const decode = getPayloadFromToken(localStorage.getItem('token'));
    console.log(decode);
  return (

    <Paper elevation={20} style={{height:'60vh',widht:'60vh',marginLeft:'30vh',marginTop:'10vh',borderRadius:'10',background: 'rgba(255,255,255,0.5)'}} >
      <div className='info' style={{paddingTop:'5vh'}} >
        <Avatar alt={decode.Fname} src=""   sx={{ width: 76, height: 76 }} />
      </div>


      <div style={{paddingTop:'5vh'}} >
      
        <TextField size='small' label='U Id'  disabled value={decode.username}   style={{marginLeft:'2vh' , marginBottom:'2vh'}} />
        <TextField size='small' label='Fist Name'  disabled value={decode.Fname}   style={{marginLeft:'2vh' , marginBottom:'2vh'}} />
        <TextField size='small' label='Last Name'  disabled value={decode.Lname}   style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='User'  disabled value={decode.User}      style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='Age'  disabled value={decode.Age}            style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='Dob'  disabled value={decode.Dob}    style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='Gender'  disabled value={decode.Gender}       style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='Phone'  disabled value={decode.Phone}    style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='Email'  disabled value={decode.Email}          style={{marginLeft:'2vh', marginBottom:'2vh'}} />
        <TextField size='small' label='Address' multiline
          maxRows={4} disabled value={decode.Address}           style={{marginLeft:'2vh', marginBottom:'2vh'}} />
      </div>

    </Paper>
  );
}