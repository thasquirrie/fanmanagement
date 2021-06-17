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
  console.log(e);
  e.preventDefault();
  console.log('Yeah');
  console.log(email, password);
  dispatch(login(email, password));
 };

 return (
  <div className='bg-gradient-to-br from-yellow-400 via-white to-red-700'>
   <div className='max-w-md mx-auto max-h-md'>
    <form onSubmit={submitHandler}>
     <div>
      <label htmlFor='email'>Email:</label>
      <input
       type='text'
       placeholder='Enter email'
       value={email}
       onChange={(e) => {
        setEmail(e.target.value);
       }}
      />
     </div>
     <div>
      <label htmlFor='password'>Password</label>
      <input
       type='password'
       placeholder='Enter your password'
       value={password}
       onChange={(e) => {
        setPassword(e.target.value);
       }}
      />
     </div>
     <button type='submit'>Login</button>
    </form>
   </div>
  </div>
 );
};

export default LoginScreen;
