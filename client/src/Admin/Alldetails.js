import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Emp from './Emp'
import Fac from './Fac'
import Stu from './Stu'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'
function Alldetails() {
    const [res, setRes] = React.useState(<Stu />)
    React.useEffect(() => {
        console.log('resource type changed')
    }, [res]
    )
    const navigate= useNavigate();
    const handleAdduser=()=>
    {
        navigate('/register');
    }
    return (
        <div  >
            <Alert style={{ width: '75vw',height:'18vh', marginBottom: '1%' ,marginRight:'-10',paddingBottom:-10}} >
                <AlertTitle>Welcome Admin</AlertTitle>
                All the details of users are  — <strong>Available here! &nbsp;</strong>
                <Button class="custom-btn btn-6" variant='contained' style={{ marginRight:13}} onClick={() => setRes(<Stu />)} >Students</Button>
                <Button class="custom-btn btn-6" variant='contained' style={{ marginRight:13}} onClick={() => setRes(<Fac />)} >Faculty</Button>
                <Button class="custom-btn btn-6" variant='contained' style={{ marginRight:13}} onClick={() => setRes(<Emp />)} >Employee</Button>
                <Button class="custom-btn btn-6" variant='contained' style={{ marginRight:13}} onClick={handleAdduser} >Add Users </Button>
            </Alert>
            {res}

        </div>
    )
}

export default Alldetails