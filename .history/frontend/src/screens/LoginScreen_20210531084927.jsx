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
  <div className='bg-gradient-to-br from-yellow-400 via-white to-red-700 h-screen'>
   <div className=''>
    <form
     className='max-w-md mx-auto bg-white p-3 shadow-lg mt-20'
     onSubmit={submitHandler}
    >
     <div>
      <div>
       <label htmlFor='email'>Email:</label>
      </div>
      <div className='p-1'>
       <input
        className='w-full border-none bg-gray-200 rounded-full focus:outline-none outline-white'
        type='text'
        placeholder='Enter email'
        value={email}
        onChange={(e) => {
         setEmail(e.target.value);
        }}
       />
      </div>
     </div>
     <div>
      <div>
       <label htmlFor='password'>Password</label>
      </div>
      <div>
       <input
        type='password'
        placeholder='Enter your password'
        value={password}
        onChange={(e) => {
         setPassword(e.target.value);
        }}
       />
      </div>
     </div>
     <button type='submit'>Login</button>
    </form>
   </div>
  </div>
 );
};

export default LoginScreen;
