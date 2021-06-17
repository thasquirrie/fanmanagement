import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
 return (
  <div className='grid grid-cols-6'>
   <div>
    <NavLink to='/'>Home</NavLink>
   </div>
   <div>
    <NavLink>Product</NavLink>
    <NavLink>About Us</NavLink>
    <NavLink>Technology</NavLink>
    <NavLink></NavLink>
   </div>
  </div>
 );
};

export default Header;
