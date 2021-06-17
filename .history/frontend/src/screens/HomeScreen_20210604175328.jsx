// import React from 'react';
// import Pricing from '../components/Pricing';

// const HomeScreen = () => {
//  return (
//   <>
//    <section className='bg-hero-pattern bg-cover flex lg:justify-end'>
//     <div className='px-8 py-12 max-w-lg mx-auto lg:w-1/2 lg:max-w-full lg:py-56 lg:px-12 lg:ml-24'>
//      <img className='hidden h-14' src='/img/pngegg.png' alt='Big Machine' />
//      <img
//       className='mt-6 rounded-lg sm:mt-8 sm:w-full sm:object-cover sm:object-center lg:hidden'
//       src='/img/Communication.png'
//       alt='Woman organizing'
//      />
//      <h1 className='mt-6 text-2xl font-bold text-gray-900 leading-tight lg:text-4xl'>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
//       <span className='text-red-700'>
//        Illo assumenda repellendus quas laborum tempora!
//       </span>
//      </h1>
//      <p className=' lg:text-2xl mt-4 text-gray-800 '>
//       Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
//       deleniti. Odio libero sequi quae, repellat quam rem excepturi error
//       molestias ab, maxime est temporibus aut!
//      </p>

//      <div className='mt-4'>
//       <button className='inline-block px-5 py-3 rounded-lg bg-red-700 text-white uppercase tracking-wider shadow-lg font-semibold lg:text-xl hover:bg-red-600 focus:outline-none focus:shadow-outline active:bg-red-700'>
//        Get Started
//       </button>
//      </div>
//     </div>
//     <div className='hidden lg:block lg:w-1/2 relative'>
//      <div className='flex'>
//       <img
//        className='absolute inset-0 object-cover object-center '
//        src='/img/Communication.png'
//        alt='Woman organizing'
//       />
//       <img
//        className='absolute inset-y-96 inset-x-48 object-cover overflow-hidden object-center'
//        src='/img/Media.png'
//        alt='Woman organizing'
//       />
//      </div>
//     </div>
//    </section>
//    <div className='bg-gradient-to-br from-yellow-400 via-white to-blue-500'>
//     <Pricing />
//     {/* <div class='text-5xl font-extrabold text-center'>
//      <span class='bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-blue-500'>
//       Hello world
//      </span>
//     </div> */}
//     {/* <h2 className='p-5 text-5xl font-extrabold text-center bg-clip-text text-transparent  bg-gradient-to-br from-yellow-400 to-red-700'>
//      Membership Details
//     </h2>
//     <h4 className='text-center text-gray-700 text-lg font-semibold px-3 py-3'>
//      Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur at
//      incidunt exercitationem corrupti soluta illo facere eaque nesciunt odio
//      perspiciatis?
//     </h4>
//     <div className='px-8 py-4 lg:px-12 lg:ml-24'>
//      <h4>Choose the right plan for you</h4>
//      <p> &bull; It's affordable</p>
//      <p> &bull; It's affordable</p>
//      <p> &bull; It's affordable</p>
//     </div>
//     <div className='px-3 md:max-w-5xl mx-auto'>
//      <div className='flex px-1 md:mx-auto justify-between md:justify-end'>
//       <div className='w-1/3 m-3'>
//        <button className='bg-red-500 py-8 w-full text-white hover:bg-red-700 focus:bg-red-700 rounded-md'>
//         Standard
//        </button>
//       </div>
//       <div className='w-1/3 m-3'>
//        <button className='bg-red-500 py-8 w-full text-white hover:bg-red-700 focus:bg-red-700 rounded-md'>
//         Standard
//        </button>
//       </div>
//       <div className='w-1/3 m-3'>
//        <button className='bg-red-500 py-8 w-full text-white hover:bg-red-700 focus:bg-red-700 rounded-md'>
//         Standard
//        </button>
//       </div>
//      </div>
//      <div className='border-b border-gray-400'>
//       <div>
//        <span className='text-center w-full inline-block mt-1'>
//         Subscription
//        </span>
//        <div className='flex justify-between'>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//        </div>
//       </div>
//      </div>

//      <div className='border-b border-gray-400'>
//       <div>
//        <span className='text-center w-full inline-block mt-1'>
//         Subscription
//        </span>
//        <div className='flex justify-between'>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//        </div>
//       </div>
//      </div>

//      <div className='border-b border-gray-400'>
//       <div>
//        <span className='text-center w-full inline-block mt-1'>
//         Subscription
//        </span>
//        <div className='flex justify-between'>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//         <div className='w-1/3'>
//          <p className='py-4 w-full text-gray-700 items-center text-center text-xl tracking-wider font-bold'>
//           $500
//          </p>
//         </div>
//        </div>
//       </div>
//      </div>
//     </div> */}
//    </div>
//    <section>
//     <div>
//      <form>
//       <input />
//      </form>
//     </div>
//    </section>
//   </>
//  );
// };

// export default HomeScreen;

/*
  This example requires Tailwind CSS v2.0+ 
  
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  const colors = require('tailwindcss/colors')
  
  module.exports = {
    // ...
    theme: {
      extend: {
        colors: {
          teal: colors.teal,
          cyan: colors.cyan,
        }
      }
    },
    plugins: [
      // ...
      require('@tailwindcss/forms'),
      require('@tailwindcss/aspect-ratio'),
    ]
  }
  ```
*/
import { Fragment } from 'react';
import {
 CloudUploadIcon,
 CogIcon,
 LockClosedIcon,
 RefreshIcon,
 ServerIcon,
 ShieldCheckIcon,
} from '@heroicons/react/outline';
import { ChevronRightIcon, ExternalLinkIcon } from '@heroicons/react/solid';
import { Link } from 'react-router-dom';

const features = [
 {
  name: 'Push to Deploy',
  description:
   'Ac tincidunt sapien vehicula erat auctor pellentesque rhoncus. Et magna sit morbi vitae lobortis.',
  icon: CloudUploadIcon,
 },
 {
  name: 'SSL Certificates',
  description:
   'Qui aut temporibus nesciunt vitae dicta repellat sit dolores pariatur. Temporibus qui illum aut.',
  icon: LockClosedIcon,
 },
 {
  name: 'Simple Queues',
  description:
   'Rerum quas incidunt deleniti quaerat suscipit mollitia. Amet repellendus ut odit dolores qui.',
  icon: RefreshIcon,
 },
 {
  name: 'Advanced Security',
  description:
   'Ullam laboriosam est voluptatem maxime ut mollitia commodi. Et dignissimos suscipit perspiciatis.',
  icon: ShieldCheckIcon,
 },
 {
  name: 'Powerful API',
  description:
   'Ab a facere voluptatem in quia corrupti veritatis aliquam. Veritatis labore quaerat ipsum quaerat id.',
  icon: CogIcon,
 },
 {
  name: 'Database Backups',
  description:
   'Quia qui et est officia cupiditate qui consectetur. Ratione similique et impedit ea ipsum et.',
  icon: ServerIcon,
 },
];
const blogPosts = [
 {
  id: 1,
  title: 'Boost your conversion rate',
  href: '#',
  date: 'Mar 16, 2020',
  datetime: '2020-03-16',
  category: { name: 'Article', href: '#' },
  imageUrl:
   'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  preview:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto accusantium praesentium eius, ut atque fuga culpa, similique sequi cum eos quis dolorum.',
  author: {
   name: 'Roel Aufderehar',
   imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   href: '#',
  },
  readingLength: '6 min',
 },
 {
  id: 2,
  title: 'How to use search engine optimization to drive sales',
  href: '#',
  date: 'Mar 10, 2020',
  datetime: '2020-03-10',
  category: { name: 'Video', href: '#' },
  imageUrl:
   'https://images.unsplash.com/photo-1547586696-ea22b4d4235d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  preview:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit facilis asperiores porro quaerat doloribus, eveniet dolore. Adipisci tempora aut inventore optio animi., tempore temporibus quo laudantium.',
  author: {
   name: 'Brenna Goyette',
   imageUrl:
    'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   href: '#',
  },
  readingLength: '4 min',
 },
 {
  id: 3,
  title: 'Improve your customer experience',
  href: '#',
  date: 'Feb 12, 2020',
  datetime: '2020-02-12',
  category: { name: 'Case Study', href: '#' },
  imageUrl:
   'https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1679&q=80',
  preview:
   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint harum rerum voluptatem quo recusandae magni placeat saepe molestiae, sed excepturi cumque corporis perferendis hic.',
  author: {
   name: 'Daniela Metz',
   imageUrl:
    'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
   href: '#',
  },
  readingLength: '11 min',
 },
];

export default function Example() {
 return (
  <>
   <div className='pt-10 bg-gray-900 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden'>
    <div className='mx-auto max-w-7xl lg:px-8'>
     <div className='lg:grid lg:grid-cols-2 lg:gap-8'>
      <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center'>
       <div className='lg:py-24'>
        <Link
         to='/'
         className='inline-flex items-center text-white bg-black rounded-full p-1 pr-2 sm:text-base lg:text-sm xl:text-base hover:text-gray-200'
        >
         <span className='px-3 py-0.5 text-white text-xs font-semibold leading-5 uppercase tracking-wider bg-gradient-to-r from-teal-500 to-cyan-600 rounded-full'>
          Welcome Stranger
         </span>
         <span className='ml-4 text-sm'>Visit our blog page</span>
         <ChevronRightIcon
          className='ml-2 w-5 h-5 text-gray-500'
          aria-hidden='true'
         />
        </Link>
        <h1 className='mt-4 text-4xl tracking-tight font-extrabold text-white sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl'>
         <span className='block'>A better way to</span>
         <span className='pb-3 block bg-clip-text text-transparent bg-gradient-to-r from-teal-200 to-cyan-400 sm:pb-5'>
          reach our prestigious fans
         </span>
        </h1>
        <p className='text-base text-gray-300 sm:text-xl lg:text-lg xl:text-xl'>
         Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui Lorem
         cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat.
        </p>
        <div className='mt-10 sm:mt-12'>
         <form action='#' className='sm:max-w-xl sm:mx-auto lg:mx-0'>
          <div className='sm:flex'>
           <div className='min-w-0 flex-1'>
            <label htmlFor='email' className='sr-only'>
             Email address
            </label>
            <input
             id='email'
             type='email'
             placeholder='Enter your email'
             className='block w-full px-4 py-3 rounded-md border-0 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
            />
           </div>
           <div className='mt-3 sm:mt-0 sm:ml-3'>
            <button
             type='submit'
             className='block w-full py-3 px-4 rounded-md shadow bg-gradient-to-r from-teal-500 to-cyan-600 text-white font-medium hover:from-teal-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-400 focus:ring-offset-gray-900'
            >
             Get Started
            </button>
           </div>
          </div>
          <p className='mt-3 text-sm text-gray-300 sm:mt-4'>
           Start your free 14-day trial, no credit card necessary. By providing
           your email, you agree to our{' '}
           <a href='#' className='font-medium text-white'>
            terms or service
           </a>
           .
          </p>
         </form>
        </div>
       </div>
      </div>
      <div className='mt-12 -mb-16 sm:-mb-48 lg:m-0 lg:relative'>
       <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0'>
        {/* Illustration taken from Lucid Illustrations: https://lucid.pixsellz.io/ */}
        <img
         className='w-full lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-auto lg:max-w-none'
         src='https://tailwindui.com/img/component-images/cloud-illustration-teal-cyan.svg'
         alt=''
        />
       </div>
      </div>
     </div>
    </div>
   </div>

   {/* Feature section with screenshot */}
   <div className='relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32'>
    <div className='mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl'>
     <div>
      <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
       Serverless
      </h2>
      <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
       No server? No problem.
      </p>
      <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
       Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
       in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra
       nulla.
      </p>
     </div>
     <div className='mt-12 -mb-10 sm:-mb-24 lg:-mb-80'>
      <img
       className='rounded-lg shadow-xl ring-1 ring-black ring-opacity-5'
       src='https://tailwindui.com/img/component-images/green-project-app-screenshot.jpg'
       alt=''
      />
     </div>
    </div>
   </div>

   {/* Feature section with grid */}
   <div className='relative bg-white py-16 sm:py-24 lg:py-32'>
    <div className='mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
     <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
      Deploy faster
     </h2>
     <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
      Everything you need to deploy your app
     </p>
     <p className='mt-5 max-w-prose mx-auto text-xl text-gray-500'>
      Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in
      quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra
      nulla.
     </p>
     <div className='mt-12'>
      <div className='grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3'>
       {features.map((feature) => (
        <div key={feature.name} className='pt-6'>
         <div className='flow-root bg-gray-50 rounded-lg px-6 pb-8'>
          <div className='-mt-6'>
           <div>
            <span className='inline-flex items-center justify-center p-3 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-md shadow-lg'>
             <feature.icon className='h-6 w-6 text-white' aria-hidden='true' />
            </span>
           </div>
           <h3 className='mt-8 text-lg font-medium text-gray-900 tracking-tight'>
            {feature.name}
           </h3>
           <p className='mt-5 text-base text-gray-500'>{feature.description}</p>
          </div>
         </div>
        </div>
       ))}
      </div>
     </div>
    </div>
   </div>

   {/* Testimonial section */}
   <div className='pb-16 bg-gradient-to-r from-teal-500 to-cyan-600 lg:pb-0 lg:z-10 lg:relative'>
    <div className='lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-3 lg:gap-8'>
     <div className='relative lg:-my-8'>
      <div
       aria-hidden='true'
       className='absolute inset-x-0 top-0 h-1/2 bg-white lg:hidden'
      />
      <div className='mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:p-0 lg:h-full'>
       <div className='aspect-w-10 aspect-h-6 rounded-xl shadow-xl overflow-hidden sm:aspect-w-16 sm:aspect-h-7 lg:aspect-none lg:h-full'>
        <img
         className='object-cover lg:h-full lg:w-full'
         src='https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80'
         alt=''
        />
       </div>
      </div>
     </div>
     <div className='mt-12 lg:m-0 lg:col-span-2 lg:pl-8'>
      <div className='mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:px-0 lg:py-20 lg:max-w-none'>
       <blockquote>
        <div>
         <svg
          className='h-12 w-12 text-white opacity-25'
          fill='currentColor'
          viewBox='0 0 32 32'
          aria-hidden='true'
         >
          <path d='M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z' />
         </svg>
         <p className='mt-6 text-2xl font-medium text-white'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna
          nulla vitae laoreet augue. Amet feugiat est integer dolor auctor
          adipiscing nunc urna, sit.
         </p>
        </div>
        <footer className='mt-6'>
         <p className='text-base font-medium text-white'>Judith Black</p>
         <p className='text-base font-medium text-cyan-100'>
          CEO at PureInsights
         </p>
        </footer>
       </blockquote>
      </div>
     </div>
    </div>
   </div>

   {/* Blog section */}
   <div className='relative bg-gray-50 py-16 sm:py-24 lg:py-32'>
    <div className='relative'>
     <div className='text-center mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl'>
      <h2 className='text-base font-semibold tracking-wider text-cyan-600 uppercase'>
       Learn
      </h2>
      <p className='mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl'>
       Helpful Resources
      </p>
      <p className='mt-5 mx-auto max-w-prose text-xl text-gray-500'>
       Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan
       in quis quis nunc, ullamcorper malesuada. Eleifend condimentum id viverra
       nulla.
      </p>
     </div>
     <div className='mt-12 mx-auto max-w-md px-4 grid gap-8 sm:max-w-lg sm:px-6 lg:px-8 lg:grid-cols-3 lg:max-w-7xl'>
      {blogPosts.map((post) => (
       <div
        key={post.id}
        className='flex flex-col rounded-lg shadow-lg overflow-hidden'
       >
        <div className='flex-shrink-0'>
         <img className='h-48 w-full object-cover' src={post.imageUrl} alt='' />
        </div>
        <div className='flex-1 bg-white p-6 flex flex-col justify-between'>
         <div className='flex-1'>
          <p className='text-sm font-medium text-cyan-600'>
           <a href={post.category.href} className='hover:underline'>
            {post.category.name}
           </a>
          </p>
          <a href={post.href} className='block mt-2'>
           <p className='text-xl font-semibold text-gray-900'>{post.title}</p>
           <p className='mt-3 text-base text-gray-500'>{post.preview}</p>
          </a>
         </div>
         <div className='mt-6 flex items-center'>
          <div className='flex-shrink-0'>
           <a href={post.author.href}>
            <img
             className='h-10 w-10 rounded-full'
             src={post.author.imageUrl}
             alt={post.author.name}
            />
           </a>
          </div>
          <div className='ml-3'>
           <p className='text-sm font-medium text-gray-900'>
            <a href={post.author.href} className='hover:underline'>
             {post.author.name}
            </a>
           </p>
           <div className='flex space-x-1 text-sm text-gray-500'>
            <time dateTime={post.datetime}>{post.date}</time>
            <span aria-hidden='true'>&middot;</span>
            <span>{post.readingLength} read</span>
           </div>
          </div>
         </div>
        </div>
       </div>
      ))}
     </div>
    </div>
   </div>

   {/* CTA Section */}
   <div className='relative bg-gray-900'>
    <div className='relative h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2'>
     <img
      className='w-full h-full object-cover'
      src='https://images.unsplash.com/photo-1525130413817-d45c1d127c42?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1920&q=60&sat=-100'
      alt=''
     />
     <div
      aria-hidden='true'
      className='absolute inset-0 bg-gradient-to-r from-teal-500 to-cyan-600 mix-blend-multiply'
     />
    </div>
    <div className='relative mx-auto max-w-md px-4 py-12 sm:max-w-7xl sm:px-6 sm:py-20 md:py-28 lg:px-8 lg:py-32'>
     <div className='md:ml-auto md:w-1/2 md:pl-10'>
      <h2 className='text-base font-semibold uppercase tracking-wider text-gray-300'>
       Award winning support
      </h2>
      <p className='mt-2 text-white text-3xl font-extrabold tracking-tight sm:text-4xl'>
       We’re here to help
      </p>
      <p className='mt-3 text-lg text-gray-300'>
       Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et, egestas
       tempus tellus etiam sed. Quam a scelerisque amet ullamcorper eu enim et
       fermentum, augue. Aliquet amet volutpat quisque ut interdum tincidunt
       duis.
      </p>
      <div className='mt-8'>
       <div className='inline-flex rounded-md shadow'>
        <a
         href='#'
         className='inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50'
        >
         Visit the help center
         <ExternalLinkIcon
          className='-mr-1 ml-3 h-5 w-5 text-gray-400'
          aria-hidden='true'
         />
        </a>
       </div>
      </div>
     </div>
    </div>
   </div>
  </>
 );
}
