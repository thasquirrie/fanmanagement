import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
 return (
  <nav className='grid grid-cols-6 text-2xl'>
   <div className='col-span-2'>
    <NavLink to='/'>Home</NavLink>
   </div>
   <div className='col-span-4 '>
    <NavLink to='/products' className='space-x-2'>
     Products
    </NavLink>
    <NavLink to='/about'>About Us</NavLink>
    <NavLink to='/technology'>Technology</NavLink>
    <NavLink to='/contact'>Contact Us</NavLink>
    <NavLink to='/login'>Login</NavLink>
   </div>
  </nav>
 );
};

export default Header;
