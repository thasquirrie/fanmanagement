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
  <nav className='bg-black px-6 py-5 max-w-full'>
   <div>
    <img className='h-8' src='/img/pngegg.png' alt='big machine' />
   </div>
   <div></div>
  </nav>
 );
};

export default Header;
