// import React, { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Link, NavLink } from 'react-router-dom';
// import { logout } from '../actions/userActions';

// const Header = () => {
//  //  let collapse = document.querySelector('#navbar-collapse');

//  //  const handleClick = (e) => {
//  //   console.log(collapse);
//  //   collapse.classList.toggle('hidden');
//  //   collapse.classList.toggle('flex');
//  //  };

//  const dispatch = useDispatch();
//  const [isOpen, setIsOpen] = useState(false);

//  const userLogin = useSelector((state) => state.userLogin);
//  const { userInfo } = userLogin;

//  const logoutHandler = () => {
//   dispatch(logout());
//  };

//  const showClass = isOpen ? 'block' : 'hidden';

//  return (
//   <nav className='bg-black sm:flex sm:justify-between'>
//    <div className='flex justify-between bg-black px-6 py-5 items-center'>
//     <div>
//      <NavLink to='/'>
//       <img className='h-8' src='/img/pngegg.png' alt='big machine' />
//      </NavLink>
//     </div>
//     <div>
//      <button
//       onClick={() => {
//        setIsOpen(!isOpen);
//       }}
//       className='bg-gray-200 text-white py-1 px-2 rounded-md sm:hidden'
//      >
//       X
//      </button>
//     </div>
//    </div>
//    <div
//     className={`${showClass} px-3 pt-2 pb-4 sm:flex sm:justify-between sm:ml-3 sm:mr-3 sm:p-3`}
//    >
//     <NavLink
//      className='block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-gray-400 text-white font-semibold text-center'
//      to='/about'
//     >
//      About us
//     </NavLink>
//     <NavLink
//      className='block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-gray-400 text-white font-semibold text-center'
//      to='/faq'
//     >
//      FAQ
//     </NavLink>
//     {userInfo ? (
//      <NavLink
//       to='/'
//       className='block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-gray-400 text-white font-semibold text-center'
//       onClick={logoutHandler}
//      >
//       Logout
//      </NavLink>
//     ) : (
//      <NavLink
//       className='bg-red-700 block py-2 px-3 mt-1 sm:ml-3 rounded hover:bg-red-400 text-white font-semibold text-center'
//       to='/signup'
//      >
//       Get Started
//      </NavLink>
//     )}
//    </div>
//   </nav>
//  );
//  //  }
// };

// export default Header;

// // import React from "react";
// // import ReactDOM from "react-dom";

// // const Header = (props) => (
// //  <>
// //   <div className='bg-gray-100' style={{ minHeight: '192px' }}>
// //    <nav data-todo-x-data='{ open: false }' className='bg-gray-800'>
// //     <div className='max-w-7xl mx-auto px-2 sm:px-4 lg:px-8'>
// //      <div className='relative flex items-center justify-between h-16'>
// //       <div className='flex items-center px-2 lg:px-0'>
// //        <div className='flex-shrink-0'>
// //         <img
// //          className='block lg:hidden h-8 w-auto'
// //          src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
// //          alt='Workflow'
// //         />
// //         <img
// //          className='hidden lg:block h-8 w-auto'
// //          src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
// //          alt='Workflow'
// //         />
// //        </div>
// //        <div className='hidden lg:block lg:ml-6'>
// //         <div className='flex space-x-4'>
// //          {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
// //          <a
// //           href='/'
// //           className='bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium'
// //          >
// //           Dashboard
// //          </a>
// //          <a
// //           href='/dashboard'
// //           className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// //          >
// //           Team
// //          </a>
// //          <a
// //           href='/'
// //           className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// //          >
// //           Projects
// //          </a>
// //          <a
// //           href='/'
// //           className='text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium'
// //          >
// //           Calendar
// //          </a>
// //         </div>
// //        </div>
// //       </div>
// //       <div className='flex-1 flex justify-center px-2 lg:ml-6 lg:justify-end'>
// //        <div className='max-w-lg w-full lg:max-w-xs'>
// //         <label htmlFor='search' className='sr-only'>
// //          Search
// //         </label>
// //         <div className='relative'>
// //          <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
// //           <svg
// //            className='h-5 w-5 text-gray-400'
// //            data-todo-x-description='Heroicon name: search'
// //            xmlns='http://www.w3.org/2000/svg'
// //            viewBox='0 0 20 20'
// //            fill='currentColor'
// //            aria-hidden='true'
// //           >
// //            <path
// //             fillRule='evenodd'
// //             d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
// //             clipRule='evenodd'
// //            ></path>
// //           </svg>
// //          </div>
// //          <input
// //           id='search'
// //           name='search'
// //           className='block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-white focus:border-white focus:ring-white focus:text-gray-900 sm:text-sm'
// //           placeholder='Search'
// //           type='search'
// //          />
// //         </div>
// //        </div>
// //       </div>
// //       <div className='flex lg:hidden'>
// //        {/* Mobile menu button */}
// //        <button
// //         data-todo-at-click='open = !open'
// //         className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
// //         data-todo-x-bind-aria-expanded='open'
// //         aria-expanded='false'
// //        >
// //         <span className='sr-only'>Open main menu</span>
// //         {/* Icon when menu is closed. */}
// //         <svg
// //          data-todo-x-state-on='Menu open'
// //          data-todo-x-state-off='Menu closed'
// //          data-todo-colon-className="{ 'hidden': open, 'block': !open }"
// //          className='block h-6 w-6'
// //          data-todo-x-description='Heroicon name: menu'
// //          xmlns='http://www.w3.org/2000/svg'
// //          fill='none'
// //          viewBox='0 0 24 24'
// //          stroke='currentColor'
// //          aria-hidden='true'
// //         >
// //          <path
// //           strokeLinecap='round'
// //           strokeLinejoin='round'
// //           strokeWidth='2'
// //           d='M4 6h16M4 12h16M4 18h16'
// //          ></path>
// //         </svg>
// //         {/* Icon when menu is open. */}
// //         <svg
// //          data-todo-x-state-on='Menu open'
// //          data-todo-x-state-off='Menu closed'
// //          data-todo-colon-className="{ 'hidden': !open, 'block': open }"
// //          className='hidden h-6 w-6'
// //          data-todo-x-description='Heroicon name: x'
// //          xmlns='http://www.w3.org/2000/svg'
// //          fill='none'
// //          viewBox='0 0 24 24'
// //          stroke='currentColor'
// //          aria-hidden='true'
// //         >
// //          <path
// //           strokeLinecap='round'
// //           strokeLinejoin='round'
// //           strokeWidth='2'
// //           d='M6 18L18 6M6 6l12 12'
// //          ></path>
// //         </svg>
// //        </button>
// //       </div>
// //       <div className='hidden lg:block lg:ml-4'>
// //        <div className='flex items-center'>
// //         <button className='flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
// //          <span className='sr-only'>View notifications</span>
// //          <svg
// //           className='h-6 w-6'
// //           data-todo-x-description='Heroicon name: bell'
// //           xmlns='http://www.w3.org/2000/svg'
// //           fill='none'
// //           viewBox='0 0 24 24'
// //           stroke='currentColor'
// //           aria-hidden='true'
// //          >
// //           <path
// //            strokeLinecap='round'
// //            strokeLinejoin='round'
// //            strokeWidth='2'
// //            d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
// //           ></path>
// //          </svg>
// //         </button>

// //         {/* Profile dropdown */}
// //         <div
// //          data-todo-at-click-away='open = false'
// //          className='ml-4 relative flex-shrink-0'
// //          data-todo-x-data='{ open: false }'
// //         >
// //          <div>
// //           <button
// //            data-todo-at-click='open = !open'
// //            className='bg-gray-800 rounded-full flex text-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
// //            id='user-menu'
// //            aria-haspopup='true'
// //            data-todo-x-bind-aria-expanded='open'
// //           >
// //            <span className='sr-only'>Open user menu</span>
// //            <img
// //             className='h-8 w-8 rounded-full'
// //             src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
// //             alt=''
// //            />
// //           </button>
// //          </div>
// //          <div
// //           data-todo-x-show='open'
// //           data-todo-x-description='Profile dropdown panel, show/hide based on dropdown state.'
// //           data-todo-x-transition-enter='transition ease-out duration-100'
// //           data-todo-x-transition-enter-start='transform opacity-0 scale-95'
// //           data-todo-x-transition-enter-end='transform opacity-100 scale-100'
// //           data-todo-x-transition-leave='transition ease-in duration-75'
// //           data-todo-x-transition-leave-start='transform opacity-100 scale-100'
// //           data-todo-x-transition-leave-end='transform opacity-0 scale-95'
// //           className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5'
// //           role='menu'
// //           aria-orientation='vertical'
// //           aria-labelledby='user-menu'
// //          >
// //           <a
// //            href='/'
// //            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //            role='menuitem'
// //           >
// //            Your Profile
// //           </a>
// //           <a
// //            href='/'
// //            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //            role='menuitem'
// //           >
// //            Settings
// //           </a>
// //           <a
// //            href='/'
// //            className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100'
// //            role='menuitem'
// //           >
// //            Sign out
// //           </a>
// //          </div>
// //         </div>
// //        </div>
// //       </div>
// //      </div>
// //     </div>

// //     <div
// //      data-todo-x-description='Mobile menu, toggle classes based on menu state.'
// //      data-todo-x-state-on='Menu open'
// //      data-todo-x-state-off='Menu closed'
// //      data-todo-colon-className="{ 'block': open, 'hidden': !open }"
// //      className='hidden lg:hidden'
// //     >
// //      <div className='px-2 pt-2 pb-3 space-y-1'>
// //       {/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
// //       <a
// //        href='/'
// //        className='bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium'
// //       >
// //        Dashboard
// //       </a>
// //       <a
// //        href='/dashboard'
// //        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
// //       >
// //        Team
// //       </a>
// //       <a
// //        href='/'
// //        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
// //       >
// //        Projects
// //       </a>
// //       <a
// //        href='/'
// //        className='text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium'
// //       >
// //        Calendar
// //       </a>
// //      </div>
// //      <div className='pt-4 pb-3 border-t border-gray-700'>
// //       <div className='flex items-center px-5'>
// //        <div className='flex-shrink-0'>
// //         <img
// //          className='h-10 w-10 rounded-full'
// //          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
// //          alt=''
// //         />
// //        </div>
// //        <div className='ml-3'>
// //         <div className='text-base font-medium text-white'>Tom Cook</div>
// //         <div className='text-sm font-medium text-gray-400'>tom@example.com</div>
// //        </div>
// //        <button className='ml-auto flex-shrink-0 bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
// //         <span className='sr-only'>View notifications</span>
// //         <svg
// //          className='h-6 w-6'
// //          data-todo-x-description='Heroicon name: bell'
// //          xmlns='http://www.w3.org/2000/svg'
// //          fill='none'
// //          viewBox='0 0 24 24'
// //          stroke='currentColor'
// //          aria-hidden='true'
// //         >
// //          <path
// //           strokeLinecap='round'
// //           strokeLinejoin='round'
// //           strokeWidth='2'
// //           d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
// //          ></path>
// //         </svg>
// //        </button>
// //       </div>
// //       <div className='mt-3 px-2 space-y-1'>
// //        <a
// //         href='/'
// //         className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
// //        >
// //         Your Profile
// //        </a>
// //        <a
// //         href='/'
// //         className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
// //        >
// //         Settings
// //        </a>
// //        <a
// //         href='/'
// //         className='block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700'
// //        >
// //         Sign out
// //        </a>
// //       </div>
// //      </div>
// //     </div>
// //    </nav>
// //   </div>
// //  </>
// // );

// // export default Header;

// // ReactDOM.render(<Header/>, document.getElementById('root'));

// import { Fragment } from 'react';
// import { Disclosure, Menu, Transition } from '@headlessui/react';
// import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
// import { NavLink } from 'react-router-dom';

// function classNames(...classes) {
//  return classes.filter(Boolean).join(' ');
// }

// export default function Header() {
//  return (
//   <Disclosure as='nav' className='bg-gray-900 shadow'>
//    {({ open }) => (
//     <>
//      <div className='max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
//       <div className='flex justify-between h-16'>
//        <div className='flex'>
//         <div className='flex-shrink-0 flex items-center'>
//          <NavLink to='/'>
//           <img
//            className='block lg:hidden h-8 w-auto'
//            src='/img/pngegg.png'
//            alt='big machine'
//           />
//           <img
//            className='hidden lg:block h-8 w-auto'
//            src='/img/pngegg.png'
//            alt='big machine'
//           />
//          </NavLink>
//          {/* </div> */}
//          {/* <img
//           className='block lg:hidden h-8 w-auto'
//           src='https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg'
//           alt='Workflow'
//          /> */}
//          {/* <img
//           className='hidden lg:block h-8 w-auto'
//           src='https://tailwindui.com/img/logos/workflow-logo-indigo-600-mark-gray-800-text.svg'
//           alt='Workflow'
//          /> */}
//         </div>
//         <div className='hidden sm:ml-6 sm:flex sm:space-x-8'>
//          {/* Current: "border-indigo-500 text-gray-900", Default: "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700" */}
//          <a
//           href='#'
//           className='border-indigo-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
//          >
//           Dashboard
//          </a>
//          <a
//           href='#'
//           className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
//          >
//           Team
//          </a>
//          <a
//           href='#'
//           className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
//          >
//           Projects
//          </a>
//          <a
//           href='#'
//           className='border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium'
//          >
//           Calendar
//          </a>
//         </div>
//        </div>
//        <div className='hidden sm:ml-6 sm:flex sm:items-center'>
//         <button className='bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
//          <span className='sr-only'>View notifications</span>
//          <BellIcon className='h-6 w-6' aria-hidden='true' />
//         </button>

//         {/* Profile dropdown */}
//         <Menu as='div' className='ml-3 relative'>
//          {({ open }) => (
//           <>
//            <div>
//             <Menu.Button className='bg-white rounded-full flex text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
//              <span className='sr-only'>Open user menu</span>
//              <img
//               className='h-8 w-8 rounded-full'
//               src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//               alt=''
//              />
//             </Menu.Button>
//            </div>
//            <Transition
//             show={open}
//             as={Fragment}
//             enter='transition ease-out duration-200'
//             enterFrom='transform opacity-0 scale-95'
//             enterTo='transform opacity-100 scale-100'
//             leave='transition ease-in duration-75'
//             leaveFrom='transform opacity-100 scale-100'
//             leaveTo='transform opacity-0 scale-95'
//            >
//             <Menu.Items
//              static
//              className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
//             >
//              <Menu.Item>
//               {({ active }) => (
//                <a
//                 href='#'
//                 className={classNames(
//                  active ? 'bg-gray-100' : '',
//                  'block px-4 py-2 text-sm text-gray-700 hover:bg-red-700'
//                 )}
//                >
//                 Your Profile
//                </a>
//               )}
//              </Menu.Item>
//              <Menu.Item>
//               {({ active }) => (
//                <a
//                 href='#'
//                 className={classNames(
//                  active ? 'bg-gray-100' : '',
//                  'block px-4 py-2 text-sm text-gray-700 hover:cursor'
//                 )}
//                >
//                 Settings
//                </a>
//               )}
//              </Menu.Item>
//              <Menu.Item>
//               {({ active }) => (
//                <a
//                 href='#'
//                 className={classNames(
//                  active ? 'bg-gray-100' : '',
//                  'block px-4 py-2 text-sm text-gray-700'
//                 )}
//                >
//                 Sign out
//                </a>
//               )}
//              </Menu.Item>
//             </Menu.Items>
//            </Transition>
//           </>
//          )}
//         </Menu>
//        </div>
//        <div className='-mr-2 flex items-center sm:hidden'>
//         {/* Mobile menu button */}
//         <Disclosure.Button className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
//          <span className='sr-only'>Open main menu</span>
//          {open ? (
//           <XIcon className='block h-6 w-6' aria-hidden='true' />
//          ) : (
//           <MenuIcon className='block h-6 w-6' aria-hidden='true' />
//          )}
//         </Disclosure.Button>
//        </div>
//       </div>
//      </div>

//      <Disclosure.Panel className='sm:hidden'>
//       <div className='pt-2 pb-3 space-y-1'>
//        {/* Current: "bg-indigo-50 border-indigo-500 text-indigo-700", Default: "border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700" */}
//        <a
//         href='#'
//         className='bg-indigo-50 border-indigo-500 text-indigo-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
//        >
//         Dashboard
//        </a>
//        <a
//         href='#'
//         className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
//        >
//         Team
//        </a>
//        <a
//         href='#'
//         className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
//        >
//         Projects
//        </a>
//        <a
//         href='#'
//         className='border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium'
//        >
//         Calendar
//        </a>
//       </div>
//       <div className='pt-4 pb-3 border-t border-gray-200'>
//        <div className='flex items-center px-4'>
//         <div className='flex-shrink-0'>
//          <img
//           className='h-10 w-10 rounded-full'
//           src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
//           alt=''
//          />
//         </div>
//         <div className='ml-3'>
//          <div className='text-base font-medium text-gray-800'>Tom Cook</div>
//          <div className='text-sm font-medium text-gray-500'>
//           tom@example.com
//          </div>
//         </div>
//         <button className='ml-auto flex-shrink-0 bg-white p-1 rounded-full text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
//          <span className='sr-only'>View notifications</span>
//          <BellIcon className='h-6 w-6' aria-hidden='true' />
//         </button>
//        </div>
//        <div className='mt-3 space-y-1'>
//         <a
//          href='#'
//          className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
//         >
//          Your Profile
//         </a>
//         <a
//          href='#'
//          className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
//         >
//          Settings
//         </a>
//         <a
//          href='#'
//          className='block px-4 py-2 text-base font-medium text-gray-500 hover:text-gray-800 hover:bg-gray-100'
//         >
//          Sign out
//         </a>
//        </div>
//       </div>
//      </Disclosure.Panel>
//     </>
//    )}
//   </Disclosure>
//  );
// }

import React, { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Disclosure, Popover, Menu, Transition } from '@headlessui/react';
import { BellIcon, MenuIcon, XIcon } from '@heroicons/react/outline';
import { NavLink } from 'react-router-dom';

const navigation = [
 { name: 'About Us', href: '#' },
 { name: 'Features', href: '#' },
 //  { name: 'Marketplace', href: '#' },
 //  { name: 'Company', href: '#' },
];

const Header = () => {
 const userLogin = useSelector((state) => state.userLogin);

 const { userInfo } = userLogin;

 const classNames = (...classes) => {
  return classes.filter(Boolean).join(' ');
 };
 return (
  <div>
   <Popover as='header' className='relative'>
    {({ open }) => (
     <>
      <div className='bg-gray-900 pt-6 pb-4'>
       <nav
        className='relative max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-6'
        aria-label='Global'
       >
        <div className='flex items-center flex-1'>
         <div className='flex items-center justify-between w-full md:w-auto'>
          <NavLink to='/'>
           <span className='sr-only'>Big Machine</span>
           <img
            className='h-8 w-auto sm:h-20'
            // src='https://tailwindui.com/img/logos/workflow-mark-teal-200-cyan-400.svg'
            src='/img/pngegg.png'
            alt='Big Machine'
           />
          </NavLink>
          <div className='-mr-2 flex items-center md:hidden'>
           <Popover.Button className='bg-gray-900 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-800 focus:outline-none focus:ring-2 focus-ring-inset focus:ring-white'>
            <span className='sr-only'>Open main menu</span>
            <MenuIcon className='h-6 w-6' aria-hidden='true' />
           </Popover.Button>
          </div>
         </div>
         <div className='hidden space-x-8 md:flex md:ml-10'>
          {navigation.map((item) => (
           <a
            key={item.name}
            href={item.href}
            className='text-base font-medium text-white hover:text-gray-300'
           >
            {item.name}
           </a>
          ))}
         </div>
        </div>
        {!userInfo ? (
         <div className='hidden md:flex md:items-center md:space-x-6'>
          <NavLink
           to='/login'
           className='text-base font-medium text-white hover:text-gray-300'
          >
           Log in
          </NavLink>
          <NavLink
           to='/signup'
           className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'
          >
           Get Started
          </NavLink>
         </div>
        ) : (
         <>
          <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
           <button className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
            <span className='sr-only'>View notifications</span>
            <BellIcon className='h-6 w-6' aria-hidden='true' />
           </button>

           {/* Profile dropdown */}
           <Menu as='div' className='ml-3 relative'>
            {({ open }) => (
             <>
              <div>
               <Menu.Button className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'>
                <span className='sr-only'>Open user menu</span>
                <img
                 className='h-8 w-8 rounded-full'
                 src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                 alt=''
                />
               </Menu.Button>
              </div>
              <Transition
               show={open}
               as={Fragment}
               enter='transition ease-out duration-100'
               enterFrom='transform opacity-0 scale-95'
               enterTo='transform opacity-100 scale-100'
               leave='transition ease-in duration-75'
               leaveFrom='transform opacity-100 scale-100'
               leaveTo='transform opacity-0 scale-95'
              >
               <Menu.Items
                static
                className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
               >
                <Menu.Item>
                 {({ active }) => (
                  <a
                   href='#'
                   className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                   )}
                  >
                   Your Profile
                  </a>
                 )}
                </Menu.Item>
                <Menu.Item>
                 {({ active }) => (
                  <a
                   href='#'
                   className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                   )}
                  >
                   Settings
                  </a>
                 )}
                </Menu.Item>
                <Menu.Item>
                 {({ active }) => (
                  <a
                   href='#'
                   className={classNames(
                    active ? 'bg-gray-100' : '',
                    'block px-4 py-2 text-sm text-gray-700'
                   )}
                  >
                   Sign out
                  </a>
                 )}
                </Menu.Item>
               </Menu.Items>
              </Transition>
             </>
            )}
           </Menu>
          </div>
          <Popover.Panel className='sm:hidden'>
           <div className='px-2 pt-2 pb-3 space-y-1'>
            {navigation.map((item) => (
             <a
              key={item.name}
              href={item.href}
              className={classNames(
               item.current
                ? 'bg-gray-900 text-white'
                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
               'block px-3 py-2 rounded-md text-base font-medium'
              )}
              aria-current={item.current ? 'page' : undefined}
             >
              {item.name}
             </a>
            ))}
           </div>
          </Popover.Panel>
         </>
        )}
        {/* <div className='hidden md:flex md:items-center md:space-x-6'>
         <NavLink
          to='/login'
          className='text-base font-medium text-white hover:text-gray-300'
         >
          Log in
         </NavLink>
         <NavLink
          to='/signup'
          className='inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-gray-600 hover:bg-gray-700'
         >
          Get Started
         </NavLink>
        </div> */}
       </nav>
      </div>

      <Transition
       show={open}
       as={Fragment}
       enter='duration-150 ease-out'
       enterFrom='opacity-0 scale-95'
       enterTo='opacity-100 scale-100'
       leave='duration-100 ease-in'
       leaveFrom='opacity-100 scale-100'
       leaveTo='opacity-0 scale-95'
      >
       <Popover.Panel
        focus
        static
        className='absolute top-0 inset-x-0 p-2 transition transform origin-top md:hidden'
       >
        <div className='rounded-lg shadow-md bg-gray-500 ring-1 ring-black ring-opacity-5 overflow-hidden'>
         <div className='px-5 pt-4 flex items-center justify-between'>
          <div>
           <img
            className='h-8 w-auto'
            // src='https://tailwindui.com/img/logos/workflow-mark-teal-500-cyan-600.svg'
            src='/img/pngegg.png'
            alt='Big Machine'
           />
          </div>
          <div className='-mr-2'>
           <Popover.Button className='bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-cyan-600'>
            <span className='sr-only'>Close menu</span>
            <XIcon className='h-6 w-6' aria-hidden='true' />
           </Popover.Button>
          </div>
         </div>
         <div className='pt-5 pb-6'>
          <div className='px-2 space-y-1'>
           {navigation.map((item) => (
            <NavLink
             key={item.name}
             to={item.href}
             className='block px-3 py-2 rounded-md text-base font-medium text-gray-900 hover:bg-gray-50'
            >
             {item.name}
            </NavLink>
           ))}
          </div>
          <div className='mt-6 px-5'>
           <NavLink
            to='/signup'
            className='block text-center w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700'
           >
            Start free trial
           </NavLink>
          </div>
          <div className='mt-6 px-5'>
           <p className='text-center text-base font-medium text-black'>
            Existing fan with a membership?{' '}
            <NavLink to='/login' className='text-gray-900 hover:underline'>
             Login
            </NavLink>
           </p>
          </div>
         </div>
        </div>
       </Popover.Panel>
      </Transition>
     </>
    )}
   </Popover>
  </div>
 );
};

export default Header;
