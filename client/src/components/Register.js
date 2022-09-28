import React from 'react'
import { Grid, Avatar, TextField, Button } from '@mui/material';
import Paper from '@mui/material/Paper';
import FormControlLabel from '@mui/material/FormControlLabel';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import { Radio, FormLabel, RadioGroup, FormControl, MenuItem, InputLabel, Select } from '@mui/material';
import axios from 'axios';
function Register() {

  const submitHandler = (e) => {
    e.preventDefault();
    const fname = e.target.fname.value
    const lname = e.target.lname.value
    const idnum = e.target.idnum.value
    const dob = e.target.dob.value
    const phone = e.target.phone.value
    const email = e.target.email.value
    const age = e.target.age.value
    const gender = e.target.gender.value
    const user = e.target.user.value
    const address = e.target.address.value
    axios.post('/new', {
      fname,
      lname,
      idnum,
      dob,
      user,
      age,
      gender,
      phone,
      email,
      address,
    })
      .then(res => {
        console.log(res)
      })
      .catch(error => {
        console.log(error);
      });
      console.log(fname,idnum);
  }
  const avatarStyle = { backgroundColor: 'violet' }
  return (
    <Grid>
      <Paper elevation={24} style={{ padding: 20, width: '40vw', margin: "20px auto", borderRadius: "4%", background: 'linear-gradient(to top, rgba(168, 237, 234, 0.45), rgba(254, 214, 227, 0.45))' }}>
        <Grid align='center'>
          <Avatar style={avatarStyle}><InsertEmoticonIcon></InsertEmoticonIcon></Avatar>
          <h2 style={{ margin: 0 }}>Register</h2><br></br>
        </Grid>
        <Grid style={{ marginTop: 0 }}>
        </Grid>
        <form onSubmit={submitHandler}>
          <TextField id='fname' label='First Name' placeholder="Enter your First name" style={{ width: '18vw', marginTop: '0.5vw', marginRight: '0.5vw' }} />
          <TextField id='lname' label='Last Name' placeholder="Enter your Last name" style={{ width: '18vw', marginTop: '0.5vw' }} />
          <TextField id='idnum' label='Id Number' placeholder="Enter your Id number" style={{ width: '18vw', marginTop: '1vw', marginRight: '0.5vw' }} />

          <TextField id='phone' label='Phone' placeholder="Enter your phone number" style={{ marginTop: 0.5, marginTop: '1vw', width: "18vw" }} />
          <TextField id='email' label='Email' placeholder="Enter your email" style={{ marginTop: 5, marginTop: 10, width: "18vw" }} />
          <TextField id='dob' label='Dob' placeholder="Enter your DOB" style={{ marginTop: 5, marginTop: 10, width: "18vw" }} />

          <FormControl id='gender' component="fieldset" style={{ marginTop: 5, marginLeft: 20 }}>
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup aria-label="gender" name="gender" style={{ display: 'initial' }}>
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel value="female" control={<Radio />} label="Female" />

            </RadioGroup>

          </FormControl>
          <FormControl id='user' component="fieldset" style={{ marginTop: 5, marginLeft: 20 }}>
            <FormLabel component="legend">User</FormLabel>
            <RadioGroup aria-label="user" name="user" style={{ display: 'initial' }}>
              <FormControlLabel value="Student" control={<Radio />} label="Student" />
              <FormControlLabel value="Faculty" control={<Radio />} label="Faculty" />
              <FormControlLabel value="Employee" control={<Radio />} label="Employee" />
            </RadioGroup>
          </FormControl>

          <TextField id='age' label="Age" type="text" placeholder=" Age" style={{ marginTop: 15, marginLeft: '1vw', width: "10vw" }} />


          <TextField id='address' label="Address" multiline rows={2} placeholder="Enter Your Current Address" style={{ width: "38vw" }} />


          <div>
            <Button type='submit' variant='contained' style={{ marginBottom: 10, marginTop: 5, padding: 12, background: 'linear-gradient(to right, rgba(55, 236, 186, 0.5), rgba(114, 175, 211, 0.5)' }} fullWidth > Submit</Button>
          </div>

        </form>

      </Paper>
    </Grid>
  );
}
export default Register