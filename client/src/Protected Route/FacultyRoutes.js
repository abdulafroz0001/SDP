import { Outlet, Navigate } from 'react-router-dom'
import { useUser } from '../auth/useUser';
const FacultyRoutes = () => {
    
    
    let auth = { 'token': false }
    const token = localStorage.getItem('token');
    if(token)
    {
        const getPayloadFromToken = token => {
            console.log(token);
            const encodedPayload = token.split('.')[1];
            return JSON.parse(atob(encodedPayload));
    
    
        }
        const decode = getPayloadFromToken(localStorage.getItem('token'));
        auth.token = token ? true : false;
        return (
            auth.token && ((decode.User === 'Faculty')|| (decode.User === 'Admin')) ? <Outlet /> : <div><h3>Permission Denied</h3></div>
        )
    }
    return <Navigate to='/login'/>
    
}
export default FacultyRoutes