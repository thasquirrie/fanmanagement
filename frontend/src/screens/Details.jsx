import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { PaperClipIcon, CheckIcon, XIcon } from '@heroicons/react/solid';

export default function Details() {
 const dispatch = useDispatch();

 const userDetails = useSelector((state) => state.userDetails);

 const { error, loading, user } = userDetails;

 return (
  <div className='bg-white shadow overflow-hidden sm:rounded-lg'>
   <div className='px-4 py-5 sm:px-6'>
    <h3 className='text-lg leading-6 font-medium text-gray-900'>
     Customer's Information
    </h3>
    <p className='mt-1 max-w-2xl text-sm text-gray-500'>
     Personal details and application.
    </p>
   </div>
   <div className='border-t border-gray-200 px-4 py-5 sm:p-0'>
    <dl className='sm:divide-y sm:divide-gray-200'>
     <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Full name</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
       {`${user.firstName} ${user.lastName}`}
      </dd>
     </div>
     <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Verification status</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
       {user.verified ? (
        <p className='flex'>
         <CheckIcon
          className='flex-shrink-0 mr-1.5 h-5 w-5 text-green-400'
          aria-hidden='true'
         />{' '}
         Verified Member
        </p>
       ) : (
        'Unverified Member'
       )}
      </dd>
     </div>
     <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Email address</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
       {user.email}
      </dd>
     </div>
     <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Membership payment</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>$120</dd>
     </div>
     <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>About</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
       Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt
       cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit
       id mollit nulla mollit nostrud in ea officia proident. Irure nostrud
       pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
      </dd>
     </div>
     <div className='py-4 sm:py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6'>
      <dt className='text-sm font-medium text-gray-500'>Attachments</dt>
      <dd className='mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2'>
       <ul className='border border-gray-200 rounded-md divide-y divide-gray-200'>
        <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
         <div className='w-0 flex-1 flex items-center'>
          <PaperClipIcon
           className='flex-shrink-0 h-5 w-5 text-gray-400'
           aria-hidden='true'
          />
          <span className='ml-2 flex-1 w-0 truncate'>
           resume_back_end_developer.pdf
          </span>
         </div>
         <div className='ml-4 flex-shrink-0'>
          <a
           href='#'
           className='font-medium text-indigo-600 hover:text-indigo-500'
          >
           Download
          </a>
         </div>
        </li>
        <li className='pl-3 pr-4 py-3 flex items-center justify-between text-sm'>
         <div className='w-0 flex-1 flex items-center'>
          <PaperClipIcon
           className='flex-shrink-0 h-5 w-5 text-gray-400'
           aria-hidden='true'
          />
          <span className='ml-2 flex-1 w-0 truncate'>
           coverletter_back_end_developer.pdf
          </span>
         </div>
         <div className='ml-4 flex-shrink-0'>
          <a
           href='#'
           className='font-medium text-indigo-600 hover:text-indigo-500'
          >
           Download
          </a>
         </div>
        </li>
       </ul>
      </dd>
     </div>
    </dl>
   </div>
  </div>
 );
}
