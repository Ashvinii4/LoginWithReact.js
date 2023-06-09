import React, { useContext } from 'react';
import AuthContext from '../../store/Auth-context';
import './Navigation.css';


const Navigation = () => {

    const ctx= useContext(AuthContext);

 return (
   <nav className={'nav'}>
         <ul>
           {ctx.isLoggedIn && (
             <li>
               <a href="/">Users</a>
             </li>
           )}
           {ctx.isLoggedIn && (
             <li>
               <a href="/">Admin</a>
             </li>
           )}
           {ctx.isLoggedIn && (
             <li>
               <button onClick={ctx.onLogout}>Logout</button>
             </li>
           )}
         </ul>
       </nav>
 )
     }


   
 
export default Navigation;


