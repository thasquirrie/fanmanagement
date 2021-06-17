import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
  <nav className='grid grid-cols-6'>
   <div className='col-span-2'>
    <Link to='/'>Home</Link>
   </div>
   <div className='col-span-4'>
    <Link to='/products'>Products</Link>
    <Link to='/about'>About Us</Link>
    <Link to='/technology'>Technology</Link>
    <Link to='/contact'>Contact Us</Link>
    <Link to='/login'>Login</Link>
   </div>
  </nav>
 );
};

export default Header;
