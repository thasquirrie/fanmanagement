import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
 return (
  <div className='grid grid-cols-6'>
   <div>
    <NavLink to='/'>Home</NavLink>
   </div>
   <div>
    <NavLink to='/products'>Products</NavLink>
    <NavLink to='/about'>About Us</NavLink>
    <NavLink to='/technology'>Technology</NavLink>
    <NavLink to='/contact'>Contact Us</NavLink>
    <NavLink to='/login'>Login</NavLink>
   </div>
  </div>
 );
};

export default Header;
