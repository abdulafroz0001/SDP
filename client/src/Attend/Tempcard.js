import React from 'react'
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Button, Card, CardActionArea, CardContent, CardMedia,Paper } from '@mui/material'
import Toggle from './Toggle';
function Tempcard(props) {
  return (
      <Card  variant='outlined' style={{marginTop:50,height:"100%",width:"40vh",borderRadius:10,marginLeft:50,alignItems:"center"}}>
      <CardActionArea>
          <CardContent>
            <center>
            <div>
              <h3>
                
                ID : {props.id}<br/>
                NAME : {props.name}<br/>
              </h3>
              <Toggle/>
              
              
            </div>
            </center>
          </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default Tempcard