import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
 let collapse = document.querySelector('#navbar-collapse');

 const handleClick = (e) => {
  console.log(collapse);
  collapse.classList.toggle('hidden');
  collapse.classList.toggle('flex');
 };

 return (
  <nav className='flex justify-between bg-black px-6 py-5 w-full items-center'>
   <div>
    <img className='h-8' src='/img/pngegg.png' alt='big machine' />
   </div>
   <div>
    <button className='bg-gray-200 text-white py-3 px-4 rounded-md'>X</button>
   </div>
  </nav>
 );
};

export default Header;
