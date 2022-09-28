import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, Card, CardActionArea, CardContent, CardMedia,Paper } from '@mui/material'
function Tempcard(props) {
  return (
    <Paper elevation={20} style={{marginTop:60, height:"15vh",width:"100%",padding:5 ,borderRadius:10}}> 
      {/* <Card  variant='outlined' style={{marginTop:6,height:100,width:500,marginLeft:10,borderRadius:10,marginLeft:2
         }}>
      <CardActionArea>
          <CardContent>
            <div>
              <h4>
                <center>
             
                
              </center>
              </h4>
              
              
            </div>
          </CardContent>
      </CardActionArea>
    </Card> */}
    <center>
      <div>
        <Button  style={{height:"100%",width:"100%",borderRadius:10}} 
                variant="filled" fullWidth ><h3>{props.name}</h3> <NavigateNextIcon style={{height:50,width:35}}/></Button>
      </div>
    
    </center>

    </Paper>
    
  )
}

export default Tempcard