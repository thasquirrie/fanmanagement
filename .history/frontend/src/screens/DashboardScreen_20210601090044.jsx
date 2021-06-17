import React from 'react';

const Dashboard = (props) => (
 <>
  <div className='bg-gray-100 h-screen' style={{ minHeight: '768px' }}>
   <div
    data-todo-x-data='{ open: true }'
    data-todo-at-keydown-window-escape='open = false; setTimeout(() => open = true, 1000);'
    className='fixed inset-0 overflow-hidden'
   >
    <div className='absolute inset-0 overflow-hidden'>
     <section
      data-todo-at-click-away='open = false; setTimeout(() => open = true, 1000);'
      className='absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'
      aria-labelledby='slide-over-heading'
     >
      <div
       className='w-screen max-w-md'
       data-todo-x-description='Slide-over panel, show/hide based on slide-over state.'
       data-todo-x-show='open'
       data-todo-x-transition-enter='transform transition ease-in-out duration-500 sm:duration-700'
       data-todo-x-transition-enter-start='translate-x-full'
       data-todo-x-transition-enter-end='translate-x-0'
       data-todo-x-transition-leave='transform transition ease-in-out duration-500 sm:duration-700'
       data-todo-x-transition-leave-start='translate-x-0'
       data-todo-x-transition-leave-end='translate-x-full'
      >
       <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
        <div className='p-6'>
         <div className='flex items-start justify-between'>
          <h2
           id='slide-over-heading'
           className='text-lg font-medium text-gray-900'
          >
           Team
          </h2>
          <div className='ml-3 h-7 flex items-center'>
           <button
            data-todo-at-click='open = false; setTimeout(() => open = true, 1000);'
            className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
           >
            <span className='sr-only'>Close panel</span>
            <svg
             className='h-6 w-6'
             data-todo-x-description='Heroicon name: x'
             xmlns='http://www.w3.org/2000/svg'
             fill='none'
             viewBox='0 0 24 24'
             stroke='currentColor'
             aria-hidden='true'
            >
             <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M6 18L18 6M6 6l12 12'
             ></path>
            </svg>
           </button>
          </div>
         </div>
        </div>
        <div className='border-b border-gray-200'>
         <div className='px-6'>
          <nav
           className='-mb-px flex space-x-6'
           data-todo-x-descriptions='Tab component'
          >
           {/* Current: "border-indigo-500 text-indigo-600", Default: "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300" */}
           <a
            href='/'
            className='border-indigo-500 text-indigo-600 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
            aria-current='page'
           >
            All
           </a>

           <a
            href='/'
            className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
           >
            Online
           </a>

           <a
            href='/'
            className='border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm'
           >
            Offline
           </a>
          </nav>
         </div>
        </div>
        <ul className='divide-y divide-gray-200 overflow-y-auto'>
         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Jenny Wilson
              </p>
              <p className='text-sm text-gray-500 truncate'>@jennyw91</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-0'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-0'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Bob Schwartz
              </p>
              <p className='text-sm text-gray-500 truncate'>@bobschwartz</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-1'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-1'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Jane Cooper
              </p>
              <p className='text-sm text-gray-500 truncate'>@janecoops</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-2'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-2'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Brooklyn Simmons
              </p>
              <p className='text-sm text-gray-500 truncate'>@brook_simmons</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-3'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-3'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Billy Cooper
              </p>
              <p className='text-sm text-gray-500 truncate'>@bcooper</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-4'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-4'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Diane Russell
              </p>
              <p className='text-sm text-gray-500 truncate'>@dee_russ</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-5'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-5'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Bob Schwartz
              </p>
              <p className='text-sm text-gray-500 truncate'>@bobschwartz</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-6'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-6'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Jane Cooper
              </p>
              <p className='text-sm text-gray-500 truncate'>@janecoops</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-7'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-7'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Brooklyn Simmons
              </p>
              <p className='text-sm text-gray-500 truncate'>@brook_simmons</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-8'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-8'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Jenny Wilson
              </p>
              <p className='text-sm text-gray-500 truncate'>@jennyw91</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-9'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-9'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Billy Cooper
              </p>
              <p className='text-sm text-gray-500 truncate'>@bcooper</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-10'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-10'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Diane Russell
              </p>
              <p className='text-sm text-gray-500 truncate'>@dee_russ</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-11'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-11'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Bob Schwartz
              </p>
              <p className='text-sm text-gray-500 truncate'>@bobschwartz</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-12'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-12'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Jane Cooper
              </p>
              <p className='text-sm text-gray-500 truncate'>@janecoops</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-13'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-13'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Brooklyn Simmons
              </p>
              <p className='text-sm text-gray-500 truncate'>@brook_simmons</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-14'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-14'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-green-400'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Jenny Wilson
              </p>
              <p className='text-sm text-gray-500 truncate'>@jennyw91</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-15'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-15'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1586297098710-0382a496c814?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Billy Cooper
              </p>
              <p className='text-sm text-gray-500 truncate'>@bcooper</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-16'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-16'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>

         <li className='px-6 py-5 relative'>
          <div className='group flex justify-between items-center'>
           <a href='/' className='-m-1 p-1 block'>
            <div
             className='absolute inset-0 group-hover:bg-gray-50'
             aria-hidden='true'
            ></div>
            <div className='flex-1 flex items-center min-w-0 relative'>
             <span className='flex-shrink-0 inline-block relative'>
              <img
               className='h-10 w-10 rounded-full'
               src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=2&amp;w=256&amp;h=256&amp;q=80'
               alt=''
              />
              <span
               className='absolute top-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white bg-gray-300'
               aria-hidden='true'
              ></span>
             </span>
             <div className='ml-4 truncate'>
              <p className='text-sm font-medium text-gray-900 truncate'>
               Diane Russell
              </p>
              <p className='text-sm text-gray-500 truncate'>@dee_russ</p>
             </div>
            </div>
           </a>
           <div
            data-todo-x-data='{ open: false }'
            data-todo-at-keydown-window-escape='open = false'
            data-todo-at-click-away='open = false'
            className='ml-2 relative inline-block text-left'
           >
            <button
             data-todo-at-click='open = !open'
             className='group relative w-8 h-8 bg-white rounded-full inline-flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
             id='options-menu-17'
             aria-haspopup='true'
             aria-expanded='false'
             data-todo-x-bind-aria-expanded='open'
            >
             <span className='sr-only'>Open options menu</span>
             <span className='flex items-center justify-center h-full w-full rounded-full'>
              <svg
               className='w-5 h-5 text-gray-400 group-hover:text-gray-500'
               data-todo-x-description='Heroicon name: dots-vertical'
               xmlns='http://www.w3.org/2000/svg'
               viewBox='0 0 20 20'
               fill='currentColor'
               aria-hidden='true'
              >
               <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
              </svg>
             </span>
            </button>

            <div
             data-todo-x-show='open'
             data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
             data-todo-x-transition-enter='transition ease-out duration-100'
             data-todo-x-transition-enter-start='transform opacity-0 scale-95'
             data-todo-x-transition-enter-end='transform opacity-100 scale-100'
             data-todo-x-transition-leave='transition ease-in duration-75'
             data-todo-x-transition-leave-start='transform opacity-100 scale-100'
             data-todo-x-transition-leave-end='transform opacity-0 scale-95'
             className='origin-top-right absolute z-10 top-0 right-9 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
             aria-label='options-menu'
            >
             <div
              className='py-1'
              role='menu'
              aria-orientation='vertical'
              aria-labelledby='options-menu-17'
             >
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               View profile
              </a>
              <a
               href='/'
               className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
               role='menuitem'
              >
               Send message
              </a>
             </div>
            </div>
           </div>
          </div>
         </li>
        </ul>
       </div>
      </div>
     </section>
    </div>
   </div>
  </div>
 </>
 //  <>
 //   <div className='bg-gray-100 h-screen' style={{ minHeight: '800px' }}>
 //    <div
 //     data-todo-x-data='{ open: true }'
 //     data-todo-at-keydown-window-escape='open = false; setTimeout(() => open = true, 1000);'
 //     className='fixed inset-0 overflow-hidden'
 //    >
 //     <div className='absolute inset-0 overflow-hidden'>
 //      <section
 //       data-todo-at-click-away='open = false; setTimeout(() => open = true, 1000);'
 //       className='absolute inset-y-0 right-0 pl-10 max-w-full flex sm:pl-16'
 //       aria-labelledby='slide-over-heading'
 //      >
 //       <div
 //        className='w-screen max-w-md'
 //        data-todo-x-description='Slide-over panel, show/hide based on slide-over state.'
 //        data-todo-x-show='open'
 //        data-todo-x-transition-enter='transform transition ease-in-out duration-500 sm:duration-700'
 //        data-todo-x-transition-enter-start='translate-x-full'
 //        data-todo-x-transition-enter-end='translate-x-0'
 //        data-todo-x-transition-leave='transform transition ease-in-out duration-500 sm:duration-700'
 //        data-todo-x-transition-leave-start='translate-x-0'
 //        data-todo-x-transition-leave-end='translate-x-full'
 //       >
 //        <div className='h-full flex flex-col bg-white shadow-xl overflow-y-scroll'>
 //         <div className='px-4 py-6 sm:px-6'>
 //          <div className='flex items-start justify-between'>
 //           <h2
 //            id='slide-over-heading'
 //            className='text-lg font-medium text-gray-900'
 //           >
 //            Profile
 //           </h2>
 //           <div className='ml-3 h-7 flex items-center'>
 //            <button
 //             data-todo-at-click='open = false; setTimeout(() => open = true, 1000);'
 //             className='bg-white rounded-md text-gray-400 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500'
 //            >
 //             <span className='sr-only'>Close panel</span>
 //             <svg
 //              className='h-6 w-6'
 //              data-todo-x-description='Heroicon name: x'
 //              xmlns='http://www.w3.org/2000/svg'
 //              fill='none'
 //              viewBox='0 0 24 24'
 //              stroke='currentColor'
 //              aria-hidden='true'
 //             >
 //              <path
 //               strokeLinecap='round'
 //               strokeLinejoin='round'
 //               strokeWidth='2'
 //               d='M6 18L18 6M6 6l12 12'
 //              ></path>
 //             </svg>
 //            </button>
 //           </div>
 //          </div>
 //         </div>
 //         {/* Main */}
 //         <div>
 //          <div className='pb-1 sm:pb-6'>
 //           <div>
 //            <div className='relative h-40 sm:h-56'>
 //             <img
 //              className='absolute h-full w-full object-cover'
 //              src='https://images.unsplash.com/photo-1501031170107-cfd33f0cbdcc?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;h=600&amp;q=80'
 //              alt=''
 //             />
 //            </div>
 //            <div className='mt-6 px-4 sm:mt-8 sm:flex sm:items-end sm:px-6'>
 //             <div className='sm:flex-1'>
 //              <div>
 //               <div className='flex items-center'>
 //                <h3 className='font-bold text-xl text-gray-900 sm:text-2xl'>
 //                 Ashley Porter
 //                </h3>
 //                <span className='ml-2.5 bg-green-400 flex-shrink-0 inline-block h-2 w-2 rounded-full'>
 //                 <span className='sr-only'>Online</span>
 //                </span>
 //               </div>
 //               <p className='text-sm text-gray-500'>@ashleyporter</p>
 //              </div>
 //              <div className='mt-5 flex flex-wrap space-y-3 sm:space-y-0 sm:space-x-3'>
 //               <button
 //                type='button'
 //                className='flex-shrink-0 w-full inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:flex-1'
 //               >
 //                Message
 //               </button>
 //               <button
 //                type='button'
 //                className='flex-1 w-full inline-flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
 //               >
 //                Call
 //               </button>
 //               <span className='ml-3 inline-flex sm:ml-0'>
 //                <div
 //                 data-todo-x-data='{ open: false }'
 //                 data-todo-at-keydown-window-escape='open = false'
 //                 data-todo-at-click-away='open = false'
 //                 className='relative inline-block text-left'
 //                >
 //                 <button
 //                  id='options-menu'
 //                  data-todo-at-click='open = !open'
 //                  type='button'
 //                  className='inline-flex items-center p-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-400 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
 //                 >
 //                  <span className='sr-only'>Open options menu</span>
 //                  <svg
 //                   className='h-5 w-5'
 //                   data-todo-x-description='Heroicon name: dots-vertical'
 //                   xmlns='http://www.w3.org/2000/svg'
 //                   viewBox='0 0 20 20'
 //                   fill='currentColor'
 //                   aria-hidden='true'
 //                  >
 //                   <path d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z'></path>
 //                  </svg>
 //                 </button>

 //                 <div
 //                  data-todo-x-show='open'
 //                  data-todo-x-description='Dropdown panel, show/hide based on dropdown state.'
 //                  data-todo-x-transition-enter='transition ease-out duration-100'
 //                  data-todo-x-transition-enter-start='transform opacity-0 scale-95'
 //                  data-todo-x-transition-enter-end='transform opacity-100 scale-100'
 //                  data-todo-x-transition-leave='transition ease-in duration-75'
 //                  data-todo-x-transition-leave-start='transform opacity-100 scale-100'
 //                  data-todo-x-transition-leave-end='transform opacity-0 scale-95'
 //                  className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5'
 //                 >
 //                  <div
 //                   className='py-1'
 //                   role='menu'
 //                   aria-orientation='vertical'
 //                   aria-labelledby='options-menu'
 //                  >
 //                   <a
 //                    href='/'
 //                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
 //                    role='menuitem'
 //                   >
 //                    View profile
 //                   </a>
 //                   <a
 //                    href='/'
 //                    className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900'
 //                    role='menuitem'
 //                   >
 //                    Copy profile link
 //                   </a>
 //                  </div>
 //                 </div>
 //                </div>
 //               </span>
 //              </div>
 //             </div>
 //            </div>
 //           </div>
 //          </div>
 //          <div className='px-4 pt-5 pb-5 sm:px-0 sm:pt-0'>
 //           <dl className='space-y-8 px-4 sm:px-6 sm:space-y-6'>
 //            <div>
 //             <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
 //              Bio
 //             </dt>
 //             <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
 //              <p>
 //               Enim feugiat ut ipsum, neque ut. Tristique mi id elementum
 //               praesent. Gravida in tempus feugiat netus enim aliquet a, quam
 //               scelerisque. Dictumst in convallis nec in bibendum aenean arcu.
 //              </p>
 //             </dd>
 //            </div>
 //            <div>
 //             <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
 //              Location
 //             </dt>
 //             <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
 //              New York, NY, USA
 //             </dd>
 //            </div>
 //            <div>
 //             <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
 //              Website
 //             </dt>
 //             <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
 //              ashleyporter.com
 //             </dd>
 //            </div>
 //            <div>
 //             <dt className='text-sm font-medium text-gray-500 sm:w-40 sm:flex-shrink-0'>
 //              Birthday
 //             </dt>
 //             <dd className='mt-1 text-sm text-gray-900 sm:col-span-2'>
 //              <time dateTime='1988-06-23'>June 23, 1988</time>
 //             </dd>
 //            </div>
 //           </dl>
 //          </div>
 //         </div>
 //        </div>
 //       </div>
 //      </section>
 //     </div>
 //    </div>
 //   </div>
 //  </>
);

export default Dashboard;
