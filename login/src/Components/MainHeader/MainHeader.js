import './MainHeader.css'
import Navigation from './Navigation';
import AuthContext from '../../store/Auth-context';
import { useContext } from 'react';

const MainHeader=(props)=>{

    const ctx=useContext(AuthContext);

    return(
        <header className={'main-header'}>
            <h1>A Typical Page</h1>
            {/* <Navigation isLoggedIn ={props.isAuthenticated} onLogout={props.onLogout}/> */}
            <Navigation onLogout = {ctx.onLogout} isLoggedIn ={ctx.isAuthenticated}/>
            
        </header>

    )
}
export default MainHeader;