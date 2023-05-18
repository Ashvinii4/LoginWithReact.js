
import React, { useEffect, useState } from "react";

const AuthContext = React.createContext({
    isLoggedIn:false,
    isLoggedIn: false,
    onLogout: () => { },
    onLogin: (email,password) => { }
});

export const AuthContextProvider = (props) => {

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const loginStatus = localStorage.getItem('isLoggedIn');
        if (loginStatus === '1') {
          setIsLoggedIn(true);
        }
      }, [])

    const logoutHandler = () => {
        localStorage.removeItem('isLoggedIn');
        setIsLoggedIn(false);
      };

      const loginHandler = (email, password) => {
        localStorage.setItem('isLoggedIn', '1');
        setIsLoggedIn(true);
      };

    return (
        <AuthContext.Provider
            value={{
                isLoggedIn: isLoggedIn,
                onLogout: logoutHandler,
                onLogin:loginHandler,
            }}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;
