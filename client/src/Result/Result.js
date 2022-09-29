import React from 'react'
import Paper from '@mui/material/Paper'
import Alert from '@mui/material/Alert';
function Result(props) {
    return (
        <div>
            <Paper elevation={12} style={{ background: "rgba(255,255,255,0.4)", width: '25vw', height: '13vw',padding:'1%',borderRadius:10 }}>
                <h5 className='result' >
                    Course: {props.name}
                </h5>
                <h5 className='result' >
                    Course Code: {props.code}
                </h5>
                <h5 className='result' >
                    Grade: {props.grade}
                </h5>
                <Alert variant="filled" severity="success" style={{justifySelf:"center",justifyContent:"center",alignItems:"center",background:"rgba(0,128,0,0.7)",paddingTop:'3%',width:'20vw',marginLeft:'6%',borderRadius:50 }}>
                     Passed   — check it out!
                </Alert>
            </Paper>
        </div >
    )
}

export default Result