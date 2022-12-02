import { Navigate, Route } from 'react-router-dom';
import { useUser } from './useUser';
export const PrivateRoute = props => {
    const user = useUser();
    const role= localStorage.getItem('role');
    console.log(user, role);
    if (!user) return <Navigate to="/login" />
    if(role === 'admin') return  <Route {...props} />
        return <Navigate to ='/normal'/>
}