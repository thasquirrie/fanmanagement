import React from 'react';

const HomeScreen = () => {
 return (
  <>
   <div className='flex lg:justify-end bg-gradient-to-r from-black via-red-500 to-red-700'>
    <div className='px-8 py-12 max-w-lg mx-auto lg:w-1/2 lg:max-w-full lg:py-56 lg:px-12 lg:ml-24'>
     <img className='hidden h-14' src='/img/pngegg.png' alt='Big Machine' />
     <img
      className='mt-6 rounded-lg sm:mt-8 sm:w-full sm:object-cover sm:object-center lg:hidden'
      src='/img/Communication.png'
      alt='Woman organizing'
     />
     <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight lg:text-4xl'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <span className='text-red-700'>
       Illo assumenda repellendus quas laborum tempora!
      </span>
     </h1>
     <p className=' lg:text-2xl mt-4 text-gray-600 '>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      deleniti. Odio libero sequi quae, repellat quam rem excepturi error
      molestias ab, maxime est temporibus aut!
     </p>

     <div className='mt-4'>
      <button className='inline-block px-5 py-3 rounded-lg bg-red-700 text-white uppercase tracking-wider shadow-lg font-semibold lg:text-xl hover:bg-red-600 focus:outline-none focus:shadow-outline active:bg-red-700'>
       Get Started
      </button>
     </div>
    </div>
    <div className='hidden lg:block lg:w-1/2 relative'>
     <div className='flex'>
      <img
       className='absolute inset-0 object-cover object-center '
       src='/img/Communication.png'
       alt='Woman organizing'
      />
      <img
       className='absolute object-cover object-center inset-72'
       src='/img/Media.png'
       alt='Woman organizing'
      />
     </div>
    </div>
   </div>
  </>
 );
};

export default HomeScreen;
