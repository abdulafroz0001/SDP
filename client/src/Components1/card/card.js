import "./card.css";
import "./flip-transition.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { Paper, Grid } from "@mui/material";
import Progress from "./Progress";
import CardBack from "./CardBack";
const percentage = 85;
function Card({ onClick }) {
  return (
    <div className="card" onClick={onClick}>
      <div className="card-back">
        <CardBack/>

      </div>
      <div className="card-front">
      
        <Grid container spacing={1} style={{marginTop:-1,marginLeft:"0.5%"}}>
          
          <Grid item >
          <h4 style={{padding:10}} >MSWD</h4>
            <Paper elevation={5} style={{ height: '25vh', width: '25vh', marginLeft:3,borderRadius:10,paddingTop:10,background: "rgba(255,255,255,0.55)" }}>
              <div style={{ width: "80%", margin: 'auto' }} >
                
                <h5>Skill</h5>
                <Progress done={75} />
                <h5>Practical</h5>
                <Progress done={75} />

              </div>
            </Paper>
          </Grid>
          <Grid item>
                    <Paper elevation={5} style={{ height: '25vh', width: '35vh',marginTop:55,paddingTop: 5,borderRadius:10 ,background:"rgba(255,255,255,0.55)" }}>

                        <div style={{ height: '50%', width: "50%", margin: 'auto' }} >
                                <h3>Over All</h3> 
                            <CircularProgressbar value={percentage} text={`${percentage}%`} strokeWidth={6} /></div>
                    </Paper>
                </Grid>
                
        </Grid>




      </div>
    </div>
  );
}

export default Card;
