import React from 'react'
import {useNavigate} from 'react-router-dom'
function Logout() 
{
    const navigate = useNavigate();
    localStorage.removeItem('token');
        navigate('/login');
    return(
        <h3>
            LogOut Successfull
        </h3>
    )


}

export default Logout