import React from 'react'
import Tempcard from './Tempcard'
import { Grid } from '@mui/material'
import { Paper } from '@mui/material'
import { Link } from 'react-router-dom'
function Home() {
  return (

    <div style={{ marginLeft: 20 }}>
      <Paper elevation={2} style={{ background: 'rgba(255,255,255,0.0)', borderRadius: 2, marginTop: "10%", padding: 0 }}>
        <Grid container spacing={5} style={{ marginLeft: "5%" }}>
          <Grid item  >
            <Link to='/satt' style={{ textdecration: 'none' }} >

              <button class="custom-btn btn-6"><center>
                Attendance Student</center><span></span></button> </Link>
          </Grid>
          <Grid item  >
            <Link to='/sec' style={{ textdecration: 'none' }} >

              <button class="custom-btn btn-6"><center>
                Attendance Faculty</center><span></span></button> </Link>
          </Grid>
          <Grid item  >
            <Link to='/result' style={{ textdecration: 'none' }} >

              <button class="custom-btn btn-6"><center>
                Result</center><span></span></button> </Link>
          </Grid>
          <Grid item  >
            <Link to='/time' style={{ textdecration: 'none' }} >

              <button class="custom-btn btn-6"><center>
                Time Table</center><span></span></button> </Link>
          </Grid>
        </Grid>

      </Paper>

    </div>
  )
}

export default Home