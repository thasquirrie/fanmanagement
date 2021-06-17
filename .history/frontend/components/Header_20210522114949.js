import React from 'react';
import { Link, NavLink } from 'react-router-dom';
const Header = () => {
 return (
  <div className='grid grid-cols-6'>
   <div>
    <NavLink to='/' />
   </div>
   <div></div>
  </div>
 );
};

export default Header;
