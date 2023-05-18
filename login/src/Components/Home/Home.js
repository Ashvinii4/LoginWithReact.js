import React, { useContext } from 'react';
import Button from '../UI/Button/Button'
import './Home.css'
import Card from '../UI/Card/Card';
import AuthContext from '../../store/Auth-context';

const Home = (props) => {

    const ctx = useContext(AuthContext);
    return (
        <Card className={'home'}>
            <h1>Welcome!</h1>
            {ctx.isLoggedIn ? <Button onClick={ctx.onLogout}>Logout</Button> :''}
            
        </Card>
    )
}
export default Home;