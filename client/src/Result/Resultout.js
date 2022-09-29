import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Sem1 from './Sem1'
import Sem2 from './Sem2'
import Sem3 from './Sem3'
import { Button } from '@mui/material';
function Resultout() {
    const [res, setRes] = React.useState(<Sem3 />)
    React.useEffect(() => {
        console.log('resource type changed')
    }, [res]
    )
    return (
        <div  >
            <Alert style={{ width: '95vw', marginBottom: '3%' }} >
                <AlertTitle>Results</AlertTitle>
                Are Out  — <strong>check it out! &nbsp;</strong>
                <Button variant='contained' style={{borderRadius:30, marginRight:13}} onClick={() => setRes(<Sem1 />)} >Sem1</Button>
                <Button variant='contained' style={{borderRadius:30, marginRight:13}} onClick={() => setRes(<Sem2 />)} >Sem2</Button>
                <Button variant='contained' style={{borderRadius:30, marginRight:13}} onClick={() => setRes(<Sem3 />)} >Sem3</Button>
            </Alert>
            <h5>{res}</h5>

        </div>
    )
}

export default Resultout