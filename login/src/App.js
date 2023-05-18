import React, { useContext, useEffect, useState } from 'react';

import Login from './Components/Login/Login';
import Home from './Components/Home/Home';
import MainHeader from './Components/MainHeader/MainHeader';
import AuthContext from './store/Auth-context';

function App() {

  const ctx = useContext(AuthContext);

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const loginStatus = localStorage.getItem('isLoggedIn');
  // useEffect(()=>{
  //   console.log('use effect executed');
  //   if(loginStatus==='1'){
  //     console.log("login status checked");
  //     setIsLoggedIn(true);
  //   }
  // },[loginStatus])

  // const loginHandler = (email, password) => {   
  //   localStorage.setItem('isLoggedIn','1');
  //   setIsLoggedIn(true);
  // };

  // const logoutHandler = () => {
  //   localStorage.removeItem('isLoggedIn');
  //   setIsLoggedIn(false);
  // };

  return (
    // <React.Fragment>
    //   <AuthContext.Provider value={{
    //     isLoggedIn:isLoggedIn,
    //     onLogout:logoutHandler
    //   }}>
        <>
      <MainHeader/>
      <main>  
        {!ctx.isLoggedIn && <Login/>}
        {ctx.isLoggedIn && <Home/>}
      </main>
      </>
      // </AuthContext.Provider>
      // </React.Fragment>
  );
}

export default App;


