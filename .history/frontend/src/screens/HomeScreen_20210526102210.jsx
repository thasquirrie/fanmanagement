import React from 'react';

const HomeScreen = () => {
 return (
  <>
   <section className='flex lg:justify-end bg-gradient-to-r from-yellow-400 via-white to-red-700'>
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
       className='absolute inset-y-96 inset-x-48 object-contain object-center'
       src='/img/Media.png'
       alt='Woman organizing'
      />
     </div>
    </div>
   </section>
   <div className='mt-4 bg-green-50'>
    <div class='text-5xl font-extrabold text-center'>
     <span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
      Hello world
     </span>
    </div>
    <h2 className='text-5xl text-center bg-clip-text text-transparent  bg-gradient-to-r from-yellow-400 to-red-700'>
     Membership Details
    </h2>
   </div>
  </>
 );
};

export default HomeScreen;
