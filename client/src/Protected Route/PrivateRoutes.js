import { Outlet, Navigate } from 'react-router-dom'
import {useUser} from '../auth/useUser';
const PrivateRoutes = () => {
    
    let auth = {'token':false}
    const token  = localStorage.getItem('token');
    auth.token= token? true : false;
    return(
        auth.token ? <Outlet/> : <Navigate to="/login"/>
    )
}
export default PrivateRoutes