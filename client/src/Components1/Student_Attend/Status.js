import React from 'react'
import Cbar from './Cbar'
import { Grid, Paper } from '@mui/material'
import FlippableCard from './flippable-card';
import Login from '../../components/Login'
import { useState, useEffect } from 'react';
import axios from 'axios';
function Status() {
  const [att, setAtt] = useState([]);
  const [search, setSearch] = useState("");
  const getAttData = async () => {
    try {
      const data = await axios.get(
        "/getAttStu"
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
    <Paper elevation={0} style={{ background: "rgba(255,255,255,0.0)", marginTop: 5}}>
      <Grid container spacing={5}>
        {/* {att.map((item) => 
        {
          return (
            <Grid item key={item.id} >
            <FlippableCard course={item.Cname} />
        </Grid>
          );
        })} */}
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
        {/* <Grid item  >
          <FlippableCard />
        </Grid> */}
        {/* <Grid item  >
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
        </Grid> */}
        {/* <Grid item>
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
          </Grid> */}
      </Grid>

    </Paper>




  )
}

export default Status