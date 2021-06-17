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
  <div className='antialiased text-gray-900 px-6'>
   <div className='max-w-xl mx-auto py-12 divide-y mad:max-w-4xl'>
    <div className='py-12'>
     <h2 className='text-2xl font-bold'>Solid</h2>
     <div className='mt-8 max-w-md'>
      <div className='grid grid-cols-1 gap-6'>
       <label className='block'>
        <span className='text-gray-700'>Email address</span>
        <input
         type='email'
         className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
         placeholder='john@example.com'
         value={email}
         onChange={(e) => {}}
        />
       </label>
       <label className='block'>
        <span className='text-gray-700'>Password</span>
        <input
         type='password'
         className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
         placeholder={'Enter your password'}
         value={password}
         onChange={(e) => {
          setPassword(e.target.value);
         }}
        />
       </label>
      </div>
     </div>
    </div>
   </div>
  </div>
  // <div className='bg-gradient-to-br from-yellow-400 via-white to-red-700 h-screen'>
  //  <div className=''>
  //   <form
  //    className='max-w-md mx-auto bg-white px-3 shadow-lg py-6 rounded-lg'
  //    onSubmit={submitHandler}
  //   >
  //    <div>
  //     <div>
  //      <label htmlFor='email'>Email:</label>
  //     </div>
  //     <div className='p-1'>
  //      <input
  //       className='w-full border-none bg-gray-200 rounded-full focus:outline-none outline-white'
  //       type='text'
  //       placeholder='Enter email'
  //       value={email}
  //       onChange={(e) => {
  //        setEmail(e.target.value);
  //       }}
  //      />
  //     </div>
  //    </div>
  //    <div className='mt-2'>
  //     <div className='mt-1'>
  //      <label htmlFor='password'>Password:</label>
  //     </div>
  //     <div className='mt-2'>
  //      <input
  //       className='w-full bg-gray-200 border-none rounded-full'
  //       type='password'
  //       placeholder='Enter your password'
  //       value={password}
  //       onChange={(e) => {
  //        setPassword(e.target.value);
  //       }}
  //      />
  //     </div>
  //    </div>
  //    <button
  //     className='px-2 py-2 bg-red-700 rounded-lg text-white uppercase tracking-wide mt-3'
  //     type='submit'
  //    >
  //     Login
  //    </button>
  //   </form>
  //  </div>
  // </div>
 );
};

export default LoginScreen;
