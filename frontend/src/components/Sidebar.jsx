import { Fragment, useState, useEffect } from 'react';
import { Dialog, Menu, Transition } from '@headlessui/react';
import {
 BellIcon,
 ClockIcon,
 CogIcon,
 CreditCardIcon,
 DocumentReportIcon,
 HomeIcon,
 MenuAlt1Icon,
 QuestionMarkCircleIcon,
 ScaleIcon,
 ShieldCheckIcon,
 UserGroupIcon,
 XCircleIcon,
 XIcon,
} from '@heroicons/react/outline';
import {
 CashIcon,
 CheckCircleIcon,
 ChevronDownIcon,
 ChevronRightIcon,
 OfficeBuildingIcon,
 SearchIcon,
} from '@heroicons/react/solid';
import { useDispatch, useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
// import SettingsScreen from './SettingsScreen';
// import Details from './Details';
import { getMyDetails } from '../actions/userActions';
import Modal from '../components/Modal';

const navigation = [
 {
  name: 'Dashboard',
  href: '/dashboard',
  icon: DocumentReportIcon,
  current: false,
 },
 { name: 'Home', href: '/', icon: HomeIcon, current: false },
 { name: 'Profile', href: '/profile', icon: CreditCardIcon, current: false },
 {
  name: 'Contact Us',
  href: '/contact',
  icon: UserGroupIcon,
  current: false,
 },
 //  { name: 'History', href: '#', icon: ClockIcon, current: false },
 //  { name: 'Balances', href: '#', icon: ScaleIcon, current: false },
];
const secondaryNavigation = [
 { name: 'Settings', href: '/settings', icon: CogIcon },
 //  { name: 'Help', href: '', icon: QuestionMarkCircleIcon },
 { name: 'Privacy', href: '/privacy', icon: ShieldCheckIcon },
];

function classNames(...classes) {
 return classes.filter(Boolean).join(' ');
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
 //  const [sidebarOpen, setSidebarOpen] = useState(false);

 return (
  <>
   <Transition.Root show={sidebarOpen} as={Fragment}>
    <Dialog
     as='div'
     static
     className='fixed inset-0 flex z-40 lg:hidden'
     open={sidebarOpen}
     onClose={setSidebarOpen}
    >
     <Transition.Child
      as={Fragment}
      enter='transition-opacity ease-linear duration-300'
      enterFrom='opacity-0'
      enterTo='opacity-100'
      leave='transition-opacity ease-linear duration-300'
      leaveFrom='opacity-100'
      leaveTo='opacity-0'
     >
      <Dialog.Overlay className='fixed inset-0 bg-gray-600 bg-opacity-75' />
     </Transition.Child>
     <Transition.Child
      as={Fragment}
      enter='transition ease-in-out duration-300 transform'
      enterFrom='-translate-x-full'
      enterTo='translate-x-0'
      leave='transition ease-in-out duration-300 transform'
      leaveFrom='translate-x-0'
      leaveTo='-translate-x-full'
     >
      <div className='relative flex-1 flex flex-col max-w-xs w-full pt-5 pb-4 bg-cyan-700'>
       <Transition.Child
        as={Fragment}
        enter='ease-in-out duration-300'
        enterFrom='opacity-0'
        enterTo='opacity-100'
        leave='ease-in-out duration-300'
        leaveFrom='opacity-100'
        leaveTo='opacity-0'
       >
        <div className='absolute top-0 right-0 -mr-12 pt-2'>
         <button
          className='ml-1 flex items-center justify-center h-10 w-10 rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
          onClick={() => setSidebarOpen(false)}
         >
          <span className='sr-only'>Close sidebar</span>
          <XIcon className='h-6 w-6 text-white' aria-hidden='true' />
         </button>
        </div>
       </Transition.Child>
       <div className='flex-shrink-0 flex items-center px-4'>
        <img
         className='h-8 w-auto'
         //  src='https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg'
         src='/img/pngegg.png'
         alt='Big Machine logo'
        />
       </div>
       <nav
        className='mt-5 flex-shrink-0 h-full divide-y divide-cyan-800 overflow-y-auto'
        aria-label='Sidebar'
       >
        <div className='px-2 space-y-1'>
         {navigation.map((item) => (
          <NavLink
           key={item.name}
           to={item.href}
           className={classNames(
            item.current
             ? 'bg-cyan-800 text-white'
             : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
            'group flex items-center px-2 py-2 text-base font-medium rounded-md'
           )}
           aria-current={item.current ? 'page' : undefined}
          >
           <item.icon
            className='mr-4 flex-shrink-0 h-6 w-6 text-cyan-200'
            aria-hidden='true'
            onClick={() => console.log('I was clicked!')}
           />
           {item.name}
          </NavLink>
         ))}
        </div>
        <div className='mt-6 pt-6'>
         <div className='px-2 space-y-1'>
          {secondaryNavigation.map((item) => (
           <Link
            key={item.name}
            to={item.href}
            className='group flex items-center px-2 py-2 text-base font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600'
           >
            <item.icon
             className='mr-4 h-6 w-6 text-cyan-200'
             aria-hidden='true'
            />
            {item.name}
           </Link>
          ))}
         </div>
        </div>
       </nav>
      </div>
     </Transition.Child>
     <div className='flex-shrink-0 w-14' aria-hidden='true'>
      {/* Dummy element to force sidebar to shrink to fit close icon */}
     </div>
    </Dialog>
   </Transition.Root>

   {/* Static sidebar for desktop */}
   <div className='hidden lg:flex lg:flex-shrink-0'>
    <div className='flex flex-col w-64'>
     {/* Sidebar component, swap this element with another sidebar if you like */}
     <div className='flex flex-col flex-grow bg-cyan-700 pt-5 pb-4 overflow-y-auto'>
      <div className='flex items-center flex-shrink-0 px-4'>
       {/* <img
    className='h-8 w-auto'
    src='https://tailwindui.com/img/logos/easywire-logo-cyan-300-mark-white-text.svg'
    alt='Easywire logo'
   /> */}
      </div>
      <nav
       className='mt-5 flex-1 flex flex-col divide-y divide-cyan-800 overflow-y-auto'
       aria-label='Sidebar'
      >
       <div className='px-2 space-y-1'>
        {navigation.map((item) => (
         <Link
          key={item.name}
          to={item.href}
          className={classNames(
           item.current
            ? 'bg-cyan-800 text-white'
            : 'text-cyan-100 hover:text-white hover:bg-cyan-600',
           'group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md'
          )}
          aria-current={item.current ? 'page' : undefined}
         >
          <item.icon
           className='mr-4 flex-shrink-0 h-6 w-6 text-cyan-200'
           aria-hidden='true'
          />
          {item.name}
         </Link>
        ))}
       </div>
       <div className='mt-6 pt-6'>
        <div className='px-2 space-y-1'>
         {secondaryNavigation.map((item) => (
          <Link
           key={item.name}
           to={item.href}
           className='group flex items-center px-2 py-2 text-sm leading-6 font-medium rounded-md text-cyan-100 hover:text-white hover:bg-cyan-600'
          >
           <item.icon
            className='mr-4 h-6 w-6 text-cyan-200'
            aria-hidden='true'
           />
           {item.name}
          </Link>
         ))}
        </div>
       </div>
      </nav>
     </div>
    </div>
   </div>
  </>
 );
};
export default Sidebar;
