import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Header extends Component {
 //  let collapse = document.querySelector('#navbar-collapse');

 //  const handleClick = (e) => {
 //   console.log(collapse);
 //   collapse.classList.toggle('hidden');
 //   collapse.classList.toggle('flex');
 //  };

 state = {
  isOpen: false,
 };

 clickHandler = () => {
  this.setState((prevState) => {
   return {
    isOpen: !prevState.isOpen,
   };
  });
 };

 render() {
  const showClass = this.state.isOpen ? 'block' : 'hidden';

  return (
   <nav className='bg-black w-full sm:flex sm:justify-between'>
    <div className='flex justify-between bg-black px-6 py-5 items-center'>
     <div>
      <img className='h-8' src='/img/pngegg.png' alt='big machine' />
     </div>
     <div>
      <button
       onClick={this.clickHandler}
       className='bg-gray-200 text-white py-1 px-2 rounded-md sm:hidden'
      >
       X
      </button>
     </div>
    </div>
    <div
     className={`${showClass} px-3 pt-2 pb-4 sm:flex sm:justify-between sm:ml-3`}
    >
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
 }
}

export default Header;
