import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

const SignupScreen = () => {
 const [name, setName] = useState('');
 const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');
 const [confirmPassword, setConfirmPassword] = useState('');

 const dispatch = useDispatch();
 return (
  <div className='antialiased text-gray-900 px-6 bg-gradient-to-r from-yellow-400 to-red-700'>
   <div className='max-w-xl mx-auto py-12 divide-y mad:max-w-4xl'>
    <div className='bg-white'>
     <div class='py-12'>
      <h2 class='text-2xl font-bold'>Sign up</h2>
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
        <div>
         <button
          type='submit'
          className='p-2 bg-red-700 uppercase tracking-wider rounded text-white'
         >
          Sign up
         </button>
        </div>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};
export default SignupScreen;
