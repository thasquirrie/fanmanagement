import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
 //  let collapse = document.querySelector('#navbar-collapse');

 //  const handleClick = (e) => {
 //   console.log(collapse);
 //   collapse.classList.toggle('hidden');
 //   collapse.classList.toggle('flex');
 //  };
 const state = {
  isOpen: false,
 };
 return (
  <nav className='bg-black w-full'>
   <div className='w-full flex justify-between bg-black px-6 py-5 items-center'>
    <div>
     <img className='h-8' src='/img/pngegg.png' alt='big machine' />
    </div>
    <div>
     <button className='bg-gray-200 text-white py-1 px-2 rounded-md'>X</button>
    </div>
   </div>
   <div className=' px-3 pt-2 pb-4'>
    <NavLink
     className='block py-2 px-3 mt-1 rounded hover:bg-gray-400 text-white font-semibold'
     to='/about'
    >
     About us
    </NavLink>
    <NavLink
     className='block py-2 px-3 mt-1 rounded hover:bg-gray-400 text-white font-semibold'
     to='/faq'
    >
     FAQ
    </NavLink>
    <NavLink
     className='block py-2 px-3 mt-1 rounded hover:bg-gray-400 text-white font-semibold'
     to='/start'
    >
     Get Started
    </NavLink>
   </div>
  </nav>
 );
};

export default Header;
