import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { getMyDetails, userUpdateDetails } from '../actions/userActions';
import Modal from '../components/Modal';

const SettingsScreen = ({ userInfo, user, history, location }) => {
 const [firstName, setFirstName] = useState('');
 const [lastName, setLastName] = useState('');
 const [email, setEmail] = useState('');
 const [username, setUsername] = useState('');
 const [phone, setPhone] = useState('');
 const [country, setCountry] = useState('');
 //  const [state, setState] = useState('');
 const [photo, setPhoto] = useState('');
 const [city, setCity] = useState('');
 const [uploading, setUploading] = useState(false);

 const dispatch = useDispatch();

 console.log(firstName);

 useEffect(() => {
  // if (user.firstName) {
  //  //  dispatch(getMyDetails());
  // } else {
  setFirstName(user.firstName);
  setLastName(user.lastName);
  setEmail(user.email);
  setUsername(user.username);
  setPhone(user.phone);
  setCity(user.city);
  setPhoto(user.photo);
  setCountry(user.country);
  // }
 }, [user]);

 let buttonClasses =
  'ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500';

 //  console.log(user);

 if (!user.verified) {
  buttonClasses += ' disabled disabled:opacity-50 cursor-not-allowed';
 }

 const submitHandler = (e) => {
  if (user.verified) {
   e.preventDefault();
   console.log('Yes we did it!');
   const form = new FormData();
   form.append('firstName', document.querySelector('#firstName').value);
   form.append('lastName', document.querySelector('#lastName').value);
   form.append('email', document.querySelector('#email').value);
   form.append('username', document.querySelector('#username').value);
   form.append('phone_number', document.querySelector('#phone_number').value);
   form.append('state', document.querySelector('#state').value);
   if (document.querySelector('#photo').files[0]) {
    form.append('photo', document.querySelector('#photo').files[0]);
   }
   form.append('country', document.querySelector('#country').value);

   //  console.log(document.querySelector('#firstName').value);
   //  for (let pair of form.entries()) {
   //   console.log(pair[0], pair[1]);
   //  }
   dispatch(userUpdateDetails(form));
   //  location.reload();
  } else {
   e.preventDefault();
   console.log('Working');
  }
 };

 const uploadHandler = async (e) => {
  const file = e.target.files[0];
  const formData = new FormData();
  formData.append('photo', file);

  console.log(formData);
  setUploading(true);

  try {
   const headers = {
    'Content-Type': 'multipart/form-data',
   };

   const data = await axios({
    method: 'PATCH',
    url: '/api/v1/users/update-me',
    data: formData,
    headers,
   });

   console.log(data);
  } catch (err) {
   console.log(err);
  }
  console.log('Alright, here we go!');
 };

 const clickHandler = (e) => {
  if (!user.verified) {
   e.preventDefault();

   console.log('indeed');
  }
 };

 return (
  <>
   {!user.verified && (
    <Modal
     error={'Get verified and enjoy the full benefits.'}
     value={'Get verified'}
     url={'/pricing'}
    />
   )}
   <div className='flex-1 xl:overflow-y-auto'>
    <div className='max-w-3xl mx-auto py-10 px-4 sm:px-6 lg:py-12 lg:px-8'>
     <h1 className='text-3xl font-extrabold text-blue-gray-900'>Account</h1>

     <form
      onSubmit={submitHandler}
      className='mt-6 space-y-8 divide-y divide-y-blue-gray-200'
     >
      <div className='grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
       <div className='sm:col-span-6'>
        <h2 className='text-xl font-medium text-blue-gray-900'>Profile</h2>
        <p className='mt-1 text-sm text-blue-gray-500'>
         This information won't be displayed publicly.
        </p>
       </div>

       <div className='sm:col-span-3'>
        <label
         htmlFor='first_name'
         className='block text-sm font-medium text-blue-gray-900'
        >
         First name
        </label>
        <input
         type='text'
         name='firstName'
         id='firstName'
         autoComplete='firstName'
         value={firstName}
         onChange={(e) => setFirstName(e.target.value)}
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div>

       <div className='sm:col-span-3'>
        <label
         htmlFor='lastName'
         className='block text-sm font-medium text-blue-gray-900'
        >
         Last name
        </label>
        <input
         type='text'
         name='lastName'
         id='lastName'
         autoComplete='lastName'
         value={lastName}
         onChange={(e) => setLastName(e.target.value)}
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div>

       <div className='sm:col-span-6'>
        <label
         htmlFor='username'
         className='block text-sm font-medium text-blue-gray-900'
        >
         Username
        </label>
        <div className='mt-1 flex rounded-md shadow-sm'>
         <span className='inline-flex items-center px-3 rounded-l-md border border-r-0 border-blue-gray-300 bg-blue-gray-50 text-blue-gray-500 sm:text-sm'>
          bigmachinelg.com/
         </span>
         <input
          type='text'
          name='username'
          id='username'
          autoComplete='username'
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='flex-1 block w-full min-w-0 border-blue-gray-300 rounded-none rounded-r-md text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
         />
        </div>
       </div>

       <div className='sm:col-span-6'>
        <label
         htmlFor='photo'
         className='block text-sm font-medium text-blue-gray-900'
        >
         Photo
        </label>
        <div className='mt-1 flex items-center'>
         <img
          className='inline-block h-12 w-12 rounded-full'
          // src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2.5&w=256&h=256&q=80'
          src={user.photo}
          alt={`${user.firstName}`}
         />
         <div className='ml-4 flex'>
          <div className='relative bg-white py-2 px-3 border border-blue-gray-300 rounded-md shadow-sm flex items-center cursor-pointer hover:bg-blue-gray-50 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-offset-blue-gray-50 focus-within:ring-blue-500'>
           <label
            htmlFor='user_photo'
            className='relative text-sm font-medium text-blue-gray-900 pointer-events-none'
           >
            <span>Change</span>
            <span className='sr-only'> user photo</span>
           </label>
           <input
            id='photo'
            name='photo'
            type='file'
            className='absolute inset-0 w-full h-full opacity-0 cursor-pointer border-gray-300 rounded-md'
            onChange={uploadHandler}
           />
          </div>
          {/* <button
           type='button'
           className='ml-3 bg-transparent py-2 px-3 border border-transparent rounded-md text-sm font-medium text-blue-gray-900 hover:text-blue-gray-700 focus:outline-none focus:border-blue-gray-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-gray-50 focus:ring-blue-500'
          >
           Remove
          </button> */}
         </div>
        </div>
       </div>

       <div className='sm:col-span-6'>
        <label
         htmlFor='description'
         className='block text-sm font-medium text-blue-gray-900'
        >
         About You
        </label>
        <div className='mt-1'>
         <textarea
          id='description'
          name='description'
          rows={4}
          className='block w-full border-blue-gray-300 rounded-md shadow-sm sm:text-sm focus:ring-blue-500 focus:border-blue-500'
          value={user.aboutYou}
         />
        </div>
        <p className='mt-3 text-sm text-blue-gray-500'>
         Brief description for your profile. URLs are hyperlinked.
        </p>
       </div>

       {/* <div className='sm:col-span-6'>
        <label
         htmlFor='url'
         className='block text-sm font-medium text-blue-gray-900'
        >
         URL
        </label>
        <input
         type='text'
         name='url'
         id='url'
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div> */}
      </div>

      <div className='pt-8 grid grid-cols-1 gap-y-6 sm:grid-cols-6 sm:gap-x-6'>
       <div className='sm:col-span-6'>
        <h2 className='text-xl font-medium text-blue-gray-900'>
         Personal Information
        </h2>
        <p className='mt-1 text-sm text-blue-gray-500'>
         This information won't be displayed publicly.
        </p>
       </div>

       <div className='sm:col-span-3'>
        <label
         htmlFor='email'
         className='block text-sm font-medium text-blue-gray-900'
        >
         Email address
        </label>
        <input
         type='text'
         name='email'
         id='email'
         autoComplete='email'
         value={email}
         onChange={(e) => setEmail(e.target.value)}
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div>

       <div className='sm:col-span-3'>
        <label
         htmlFor='phone_number'
         className='block text-sm font-medium text-blue-gray-900'
        >
         Phone number
        </label>
        <input
         type='text'
         name='phone_number'
         id='phone_number'
         autoComplete='tel'
         value={phone}
         onChange={(e) => setPhone(e.target.value)}
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div>

       <div className='sm:col-span-3'>
        <label
         htmlFor='state'
         className='block text-sm font-medium text-blue-gray-900'
        >
         State
        </label>
        <input
         type='text'
         name='state'
         id='state'
         value={city}
         onChange={(e) => setCity(e.target.value)}
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div>

       <div className='sm:col-span-3'>
        <label
         htmlFor='country'
         className='block text-sm font-medium text-blue-gray-900'
        >
         Country
        </label>
        <input
         type='text'
         name='country'
         id='country'
         autoComplete='country'
         value={country}
         onChange={(e) => setCountry(e.target.value)}
         className='mt-1 block w-full border-blue-gray-300 rounded-md shadow-sm text-blue-gray-900 sm:text-sm focus:ring-blue-500 focus:border-blue-500'
        />
       </div>

       <p className='text-sm text-blue-gray-500 sm:col-span-6'>
        This account was created on{' '}
        <time dateTime='2017-01-05T20:35:40'>
         {new Date(user.dateCreated).toDateString()}
        </time>
        .
       </p>
      </div>

      <div className='pt-8 flex justify-end'>
       {/* <button
        type='button'
        className='bg-white py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-blue-gray-900 hover:bg-blue-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
       >
        Cancel
       </button> */}
       <button type='submit' className={buttonClasses} onClick={clickHandler}>
        Save
       </button>
      </div>
     </form>
    </div>
   </div>
   ;
  </>
 );
};

export default SettingsScreen;

// frontend\public\default.jpg
// backend\public\images\default.jpg
// C:\Works\ArtistManage\backend\public\images\default.jpg
