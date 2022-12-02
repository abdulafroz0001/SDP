import { Navigate, Route } from 'react-router-dom';
import { useUser } from './useUser';

export const NormalRoute = props => {
    const user = useUser();
    const role= localStorage.getItem('role');
    console.log(user, role);
    if (!user) return <Navigate to="/login" />
    if(role === 'user' | role==='admin') return  <Route {...props} />
        return <div>
            <h4> permission denied </h4>
        </div>
}