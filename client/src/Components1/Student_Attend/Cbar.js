import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Grid from "@mui/material/Grid";
import { Paper } from "@mui/material";
import Progress from '../Progress'
const percentage = 85;

const Cbar = (props) => (
    <div >
        <Paper elevation={10} style={{ height: '%', width: '68vh', marginLeft: "0%", marginTop: 50, borderRadius: 10, padding: 10 ,background: "linear-gradient(132deg, rgb(113, 143, 175) 0.00%, rgb(69, 92, 114) 100.00%)"}} >
       
                <h5 style={{padding:10}}>{props.course}</h5>
            
            <Grid container spacing={2}>
                <Grid item  >
                    <Paper elevation={5} style={{ height: '30vh', width: '23vh', paddingTop: "5%",borderRadius:10 ,background:"rgba(255,255,255,0.55)"}}>

                        <div style={{width: "80%", margin:'auto'}} >
                           
                                <h5>Skill</h5> 
                                <Progress done={75} />
                                <h5>Practical</h5> 
                                <Progress done={75} />
                            
                            </div>
                    </Paper>
                </Grid>
                <Grid item>
                    <Paper elevation={5} style={{ height: '30vh', width: '40vh', paddingTop: 25,borderRadius:10 ,background:"rgba(255,255,255,0.55)" }}>

                        <div style={{ height: '30%', width: "40%", margin: 'auto' }} >
                                <h3>Over All</h3> 
                            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={6} /></div>
                    </Paper>
                </Grid>
            </Grid>
        </Paper>
    </div>


);
export default Cbar;