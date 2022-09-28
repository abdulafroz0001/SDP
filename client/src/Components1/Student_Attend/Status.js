import React from 'react'
import Cbar from './Cbar'
import { Grid ,Paper} from '@mui/material'
import FlippableCard from './flippable-card';
import Login from '../../components/Login'
function Status() {
  return (
    <Paper elevation={0} style={{background: "rgba(255,255,255,0.0)",marginTop:40}}>
      <Grid container spacing={5}  >
          <Grid item  >
          <FlippableCard course="MSWD" />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>

          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item  >
          <FlippableCard />
          </Grid>
          <Grid item>
          <Cbar course="DAA"/>
          </Grid>
          <Grid item>
          <Cbar course="CNS"/>
          </Grid>
          <Grid item>
          <Cbar course="MSWD"/>
          </Grid>
          <Grid item  >
            <Cbar course="MSWD"/>
          </Grid>
          <Grid item>
          <Cbar course="DAA"/>
          </Grid>
          <Grid item>
          <Cbar course="CNS"/>
          </Grid>
          <Grid item>
          <Cbar course="DBMS"/>
          </Grid>
      </Grid>

    </Paper>

    
    

  )
}

export default Status