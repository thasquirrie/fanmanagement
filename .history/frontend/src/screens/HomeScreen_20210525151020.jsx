import React from 'react';

const HomeScreen = () => {
 return (
  <>
   <div className='bg-gray-100 flex'>
    <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl lg:w-1/2 lg:max-w-full lg:py-24 sm:px-12'>
     <img className='lg:h-16' src='/img/pngegg.png' alt='Big Machine' />
     <img
      className='mt-6 rounded-lg sm:mt-8 sm:w-full sm:object-cover sm:object-center lg:hidden'
      src='/img/Communication.png'
      alt='Woman organizing'
     />
     <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
      <span className='text-red-700'>
       Illo assumenda repellendus quas laborum tempora!
      </span>
     </h1>
     <p className='mt-4 text-gray-600'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
      deleniti. Odio libero sequi quae, repellat quam rem excepturi error
      molestias ab, maxime est temporibus aut!
     </p>

     <div className='mt-4'>
      <button className='inline-block px-5 py-3 rounded-lg bg-red-700 text-white uppercase tracking-wider shadow-lg font-semibold'>
       Get Started
      </button>
     </div>
    </div>
    <div className='hidden bg-gray-100 lg:block lg:w-1/2'>
     <img
      className='mt-6 rounded-lg sm:mt-8 sm:w-full absolute inset-0 h-full w-full sm:object-cover sm:object-center'
      src='/img/Communication.png'
      alt='Woman organizing'
     />
    </div>
   </div>
  </>
 );
};

export default HomeScreen;
