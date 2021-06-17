import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const dispatch = useDispatch();
 return (
  <div className='antialiased text-gray-900 px-6 bg-gradient-to-r from-yellow-400 via-white to-red-700'>
   <div className='max-w-xl mx-auto py-12 divide-y mad:max-w-4xl'>
    <div className='bg-white rounded-xl shadow-2xl'>
     <div className='px-4 py-12'>
      <h2 className='text-2xl font-bold'>Sign up</h2>
      <div className='mt-8 max-w-md'>
       <form className='grid grid-cols-1 gap-6'>
        <label className='block'>
         <span className='text-gray-700'>Full name</span>
         <input
          type='text'
          className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          placeholder='John Smith'
          value={name}
          onChange={(e) => {
           setName(e.target.value);
          }}
         />
        </label>
        <label className='block'>
         <span className='text-gray-700'>Email address</span>
         <input
          type='email'
          className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          placeholder='john@example.com'
          value={email}
          onChange={(e) => {
           setEmail(e.target.value);
          }}
         />
        </label>
        <label className='block'>
         <span className='text-gray-700'>When is your event?</span>
         <input
          type='password'
          className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
         />
        </label>
        <label className='block'>
         <span className='text-gray-700'>What type of event is it?</span>
         <select className='block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'>
          <option>Corporate event</option>
          <option>Wedding</option>
          <option>Birthday</option>
          <option>Other</option>
         </select>
        </label>
        <label className='block'>
         <span className='text-gray-700'>Additional details</span>
         <textarea
          className='mt-1 block w-full rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0'
          rows='3'
         ></textarea>
        </label>
        <div>
         <button
          type='submit'
          className='px-3 py-2 bg-red-700 uppercase tracking-wider rounded text-white shadow-xl hover:bg-red-600'
         >
          Sign up
         </button>
        </div>
       </form>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
export default SignupScreen;
