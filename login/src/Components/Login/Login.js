import React, { useContext, useEffect, useReducer, useState } from 'react';

import Card from '../UI/Card/Card';
import './Login.css';
import Button from '../UI/Button/Button';
import AuthContext from '../../store/Auth-context';

const emailReducer = (state, action) =>{
  if(action.type === 'USER_INPUT'){
    return {value:action.val , isValid: action.val.includes('@')}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value , isValid: state.value.includes('@')}
  }
  return {value:'',isValid:false}
}
//

const passwordReducer = (state,action) => {
  if(action.type === 'USER_INPUT'){
    return {value:action.val , isValid: action.val.trim().length>6}
  }
  if(action.type === 'INPUT_BLUR'){
    return {value:state.value , isValid: state.value.trim().length>6}
  }
  return {value:'',isValid:false}
}


const Login = (props) => {
  //const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
  //const [passwordIsValid, setPasswordIsValid] = useState();
  //const [formIsValid, setFormIsValid] = useState(false);

  /* useEffect(()=>{dispatchFn
    const identifier = setTimeout(()=>{
      console.log('checking form validity');
      setFormIsValid(
        enteredEmail.includes('@') && enteredPassword.trim().length > 6
      );
    },500);
    return () => {
      console.log('Cleanup');
      clearTimeout(identifier);
    }
  },[enteredEmail,enteredPassword]) */
  const ctx=useContext(AuthContext);

  const [emailState,dispatchEmail] = useReducer(emailReducer,{value:'',isValid:null})
  const[passwordState,dispatchPassword] = useReducer(passwordReducer,{value:'',isValid:null})


  const emailChangeHandler = (event) => {
    dispatchEmail({type:'USER_INPUT',val:event.target.value})
    //setEnteredEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type:'USER_INPUT',val:event.target.value})
    //setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEmail({type:'INPUT_BLUR'})
    //setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    dispatchPassword({type:'INPUT_BLUR'})
    //setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(emailState);
    console.log(passwordState);
    ctx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={'login'}>
      <form onSubmit={submitHandler}>
        <div
          className={`${'control'} ${
            emailState.isValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.value}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${'control'} ${
            passwordState.isValid === false ? 'invalid' : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.value}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div className={'actions'}>
          <Button type="submit" className={'btn'} disabled={emailState.isValid ? !passwordState.isValid : true}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;

