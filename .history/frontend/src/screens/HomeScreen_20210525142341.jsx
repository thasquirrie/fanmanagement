import React from 'react';

const HomeScreen = () => {
 return (
  <>
   <div className='px-8 py-12'>
    <img className='lg:h-16' src='/img/pngegg.png' alt='Big Machine' />
    <img
     className='mt-6 rounded-lg'
     src='/img/pablita-522.png'
     alt='Woman organizing shadow-xl'
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
   </div>
  </>
 );
};

export default HomeScreen;
