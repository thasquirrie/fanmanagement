import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../actions/userActions';

const LoginScreen = ({ location, history }) => {
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const redirect = location.search ? location.search.split('=')[1] : '/';

 const dispatch = useDispatch();

 const userLogin = useSelector((state) => state.userLogin);

 const { loading, error, userInfo } = userLogin;

 useEffect(() => {
  if (userInfo) {
   history.push(redirect);
  }
 }, [history, userInfo, redirect]);

 const submitHandler = (e) => {
  e.preventDefault();
  dispatch(login(email, password));
 };

 return (
  <div className='bg-gradient-to-br from-yellow-400 via-white to-red-700'>
   <form>
    <div>
     <label for='email'>Email:</label>
     <input type='text' />
    </div>
    <div>
     <label for='password'>Password</label>
     <input type='password' />
    </div>
    <div>
     <button onSubmit={submitHandler}>Login</button>
    </div>
   </form>
  </div>
 );
};

export default LoginScreen;
