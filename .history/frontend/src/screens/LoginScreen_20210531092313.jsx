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
  <div class='py-12'>
   <h2 class='text-2xl font-bold'>Solid</h2>
   <div class='mt-8 max-w-md'>
    <div class='grid grid-cols-1 gap-6'>
     <label class='block'>
      <span class='text-gray-700'>Full name</span>
      <input
       type='text'
       class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
       placeholder=''
      />
     </label>
     <label class='block'>
      <span class='text-gray-700'>Email address</span>
      <input
       type='email'
       class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
       placeholder='john@example.com'
      />
     </label>
     <label class='block'>
      <span class='text-gray-700'>When is your event?</span>
      <input
       type='date'
       class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
      />
     </label>
     <label class='block'>
      <span class='text-gray-700'>What type of event is it?</span>
      <select class='block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'>
       <option>Corporate event</option>
       <option>Wedding</option>
       <option>Birthday</option>
       <option>Other</option>
      </select>
     </label>
     <label class='block'>
      <span class='text-gray-700'>Additional details</span>
      <textarea
       class='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
       rows='3'
      ></textarea>
     </label>
     <div class='block'>
      <div class='mt-2'>
       <div>
        <label class='inline-flex items-center'>
         <input
          type='checkbox'
          class='rounded bg-gray-200 border-transparent focus:border-transparent focus:bg-gray-200 text-gray-700 focus:ring-1 focus:ring-offset-2 focus:ring-gray-500'
         />
         <span class='ml-2'>Email me news and special offers</span>
        </label>
       </div>
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
