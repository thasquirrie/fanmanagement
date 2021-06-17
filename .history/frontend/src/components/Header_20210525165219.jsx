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
  <nav>
   <div>
    <img src='/img/bigmachine.png' alt='big machine' />
   </div>
   <div></div>
  </nav>
 );
};

export default Header;