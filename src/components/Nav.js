import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav
      className='flex justify-between items-center w-screen px-8 py-12'
      role='navigation'
    >
      <Link
        to='/'
        className='text-4xl w-4/12 flex flex-col font-black leading-7 text-gray-light'
      >
        <span>COOPER</span>
        <span>SHANG</span>
      </Link>

      {/* <Link to='/mobile-menu' className=''>
        <svg
          className='w-8 h-8 md:hidden'
          fill='currentColor'
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 320 512'
        >
          <path
            d='M501.333,96H10.667C4.779,96,0,100.779,0,106.667s4.779,10.667,10.667,10.667h490.667c5.888,0,10.667-4.779,10.667-10.667
			S507.221,96,501.333,96z'
          />
          <path
            d='M501.333,245.333H10.667C4.779,245.333,0,250.112,0,256s4.779,10.667,10.667,10.667h490.667
			c5.888,0,10.667-4.779,10.667-10.667S507.221,245.333,501.333,245.333z'
          />
          <path
            d='M501.333,394.667H10.667C4.779,394.667,0,399.445,0,405.333C0,411.221,4.779,416,10.667,416h490.667
			c5.888,0,10.667-4.779,10.667-10.667C512,399.445,507.221,394.667,501.333,394.667z'
          />
        </svg>
      </Link> */}

      <div className='flex items-center text-xl justify-between w-3/12'>
        <Link className='' to='/projects'>
          Projects
        </Link>
        <Link className='' to='/resume'>
          Resume
        </Link>
        <Link className='' to='/contact'>
          Contact
        </Link>
        {/* linkedin link */}
        <a href='https://www.linkedin.com/in/coopershang/'>
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 512 512'
          >
            <path d='m475.074219 0h-438.148438c-20.394531 0-36.925781 16.53125-36.925781 36.925781v438.148438c0 20.394531 16.53125 36.925781 36.925781 36.925781h438.148438c20.394531 0 36.925781-16.53125 36.925781-36.925781v-438.148438c0-20.394531-16.53125-36.925781-36.925781-36.925781zm-293.464844 387h-62.347656v-187.574219h62.347656zm-31.171875-213.1875h-.40625c-20.921875 0-34.453125-14.402344-34.453125-32.402344 0-18.40625 13.945313-32.410156 35.273437-32.410156 21.328126 0 34.453126 14.003906 34.859376 32.410156 0 18-13.53125 32.402344-35.273438 32.402344zm255.984375 213.1875h-62.339844v-100.347656c0-25.21875-9.027343-42.417969-31.585937-42.417969-17.222656 0-27.480469 11.601563-31.988282 22.800781-1.648437 4.007813-2.050781 9.609375-2.050781 15.214844v104.75h-62.34375s.816407-169.976562 0-187.574219h62.34375v26.558594c8.285157-12.78125 23.109375-30.960937 56.1875-30.960937 41.019531 0 71.777344 26.808593 71.777344 84.421874zm0 0' />
          </svg>
        </a>
        {/* GitHub link */}
        <a href='https://github.com/vvEii'>
          <svg
            className='w-6 h-6'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 24 24'
          >
            <path
              d='m12 .5c-6.63 0-12 5.28-12 11.792 0 5.211 3.438 9.63 8.205 11.188.6.111.82-.254.82-.567 0-.28-.01-1.022-.015-2.005-3.338.711-4.042-1.582-4.042-1.582-.546-1.361-1.335-1.725-1.335-1.725-1.087-.731.084-.716.084-.716 1.205.082 1.838 1.215 1.838 1.215 1.07 1.803 2.809 1.282 3.495.981.108-.763.417-1.282.76-1.577-2.665-.295-5.466-1.309-5.466-5.827 0-1.287.465-2.339 1.235-3.164-.135-.298-.54-1.497.105-3.121 0 0 1.005-.316 3.3 1.209.96-.262 1.98-.392 3-.398 1.02.006 2.04.136 3 .398 2.28-1.525 3.285-1.209 3.285-1.209.645 1.624.24 2.823.12 3.121.765.825 1.23 1.877 1.23 3.164 0 4.53-2.805 5.527-5.475 5.817.42.354.81 1.077.81 2.182 0 1.578-.015 2.846-.015 3.229 0 .309.21.678.825.56 4.801-1.548 8.236-5.97 8.236-11.173 0-6.512-5.373-11.792-12-11.792z'
              fill='currentColor'
            />
          </svg>
        </a>
      </div>
    </nav>
  );
};

export default Nav;
