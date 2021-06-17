import React from 'react';

const HomeScreen = () => {
 return (
  <>
   <div className='flex'>
    <div className='px-8 py-12 max-w-md mx-auto sm:max-w-xl'>
     <img className='lg:h-16' src='/img/pngegg.png' alt='Big Machine' />
     <img
      className='mt-6 rounded-lg sm:mt-8 sm:w-full sm:object-cover sm:object-center'
      src='/img/Communication.png'
      alt='Woman organizing'
     />
     <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight'>
      Lorem ipsum dolor sit amet consectetur adipisicing elit.{' '}
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
    <div className='hidden lg:block'>
     <img
      className='mt-6 rounded-lg sm:mt-8 sm:w-full sm:object-cover sm:object-center'
      src='/img/Communication.png'
      alt='Woman organizing'
     />
    </div>
   </div>
  </>
 );
};

export default HomeScreen;
