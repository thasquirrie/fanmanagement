import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
 return (
  // <nav className='grid grid-cols-6'>
  //  <div className='col-span-2'>
  //   <Link to='/'>Home</Link>
  //  </div>
  //  <div className='col-span-4'>
  //   <Link to='/products'>Products</Link>
  //   <Link to='/about'>About Us</Link>
  //   <Link to='/technology'>Technology</Link>
  //   <Link to='/contact'>Contact Us</Link>
  //   <Link to='/login'>Login</Link>
  //  </div>
  // </nav>
  <nav className='grid grid-cols-2'>
   <div className='col-span-1'>
    <a href='#'>Home</a>
   </div>
   <div className='col-span-1'>
    <a href='#'>Sign up</a>
    <a href='#'>Login</a>
   </div>
  </nav>
 );
};

export default Header;
