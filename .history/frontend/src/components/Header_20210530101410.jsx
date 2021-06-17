import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { logout } from '../actions/userActions';

// class Header extends Component {
const Header = () => {
 //  let collapse = document.querySelector('#navbar-collapse');

 //  const handleClick = (e) => {
 //   console.log(collapse);
 //   collapse.classList.toggle('hidden');
 //   collapse.classList.toggle('flex');
 //  };

 const dispatch = useDispatch();
 const [isOpen, setIsOpen] = useState(false);

 const userLogin = useSelector((state) => state.userLogin);
 const { userInfo } = userLogin;

 const logoutHandler = () => {
  dispatch(logout());
 };

 const showClass = isOpen ? 'block' : 'hidden';

 return (
  <nav className='bg-black sm:flex sm:justify-between'>
   <div className='flex justify-between bg-black px-6 py-5 items-center'>
    <div>
     <NavLink to='/'>
      <img className='h-8' src='/img/pngegg.png' alt='big machine' />
     </NavLink>
    </div>
    <div>
     <button
      onClick={() => {
       setIsOpen(!isOpen);
      }}
      className='bg-gray-200 text-white py-1 px-2 rounded-md sm:hidden'
     >
      X
     </button>
    </div>
   </div>
   <div
    className={`${showClass} px-3 pt-2 pb-4 sm:flex sm:justify-between sm:ml-3 sm:mr-3 sm:p-3`}
   >
    <NavLink
     className='block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-gray-400 text-white font-semibold text-center'
     to='/about'
    >
     About us
    </NavLink>
    <NavLink
     className='block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-gray-400 text-white font-semibold text-center'
     to='/faq'
    >
     FAQ
    </NavLink>
    {userInfo ? (
     <NavLink
      className='block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-gray-400 text-white font-semibold text-center'
      to='/'
     >
      Logout
     </NavLink>
    ) : (
     <NavLink
      className='bg-red-700 block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-red-400 text-white font-semibold text-center'
      to='/start'
     >
      Get Started
     </NavLink>
    )}
   </div>
  </nav>
 );
 //  }
};

export default Header;
