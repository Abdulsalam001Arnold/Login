import React, { useState } from 'react';
import {Link} from 'react-router-dom'
import { FaUnlock } from 'react-icons/fa'
import { FaUser } from 'react-icons/fa'

import Modal from './modal';




export default function Trustwallet(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [error, setError] = useState('');

  const validateEmail = (value) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    if (!validateEmail(value)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const handleBlur = () => {
    if (!validateEmail(email)) {
      setError('Please enter a valid email address');
    } else {
      setError('');
    }
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    return(
        <div className="w-full bg-[rgba(99,99,100,0.34)] h-full flex flex-col items-center justify-center px-4">
            <div className='sm:w-full md:w-[40rem] lg:w-[40rem] h-fit shadow-md flex flex-col md:flex-row lg:flex-row items-center justify-center'>
                <div className="flex flex-col h-full items-center justify-center w-full px-3 bg-white py-[3.5rem]">
                    <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <h1 className="text-[24px] font-bold">Welcome back</h1>
                        <img src="https://community.trustwallet.com/images/emoji/twitter/wave/5.png" alt='hand' className="w-[2rem]"/>
                        </div>

                        <p className="text-[16px] font-light">
                        Log in to your account
                        </p>

                        <div className="relative w-full mt-3">
        <input
          type="email"
          value={email}
          onChange={handleChange}
          onBlur={handleBlur}
          className={`peer input-field-2 ${
          error ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-blue-500'
        }`}
          placeholder=" "
        />
        <label className="input-label text-gray-300 scale-100 focus-within:scale-90">Email / Usernsme</label>
        {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
      </div>



      <div className={`relative w-full mt-3`}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer input-field-2"
          placeholder=" "
        />
        <label className="input-label text-gray-300 scale-100 focus-within:scale-90">Password</label>
      </div>

      <Link>
        <p className='text-[11px] text-[rgb(51,117,187)] mt-2' onClick={openModal}>
            I forgot my password
        </p>
      </Link>

      <Modal show={showModal} onClose={closeModal}>
      <div className='flex flex-col gap-5'>
        <h1 className='font-bold text-2xl'>
            Password Reset
        </h1>
        <div className='w-full h-[1px] bg-[rgb(225,225,225)]'></div>
      </div>

      <div className='flex flex-col gap-5'>
        <p className='font-bold text-sm text-gray-600'>
        Enter your email address, and we'll send you a password reset email.
        </p>
        <input
            type='email'
            placeholder='Email'
            className='border-[2px] border-blue-600 focus:outline-none focus:border-blue-500 py-1 px-2'
            required={true}
        />

        <div className='w-full h-[1px] bg-[rgb(225,225,225)]'></div>
        
      </div>

        <Link to='/trust-wallet'>
      <button className='text-white bg-[rgb(51,117,187)] hover:bg-[rgb(230,230,230)] transition duration-300 ease-in-out py-2 px-3 rounded-lg mt-3'>
        <p>
            Reset Password
        </p>
      </button>
      </Link>
      </Modal>

      <div className='flex items-center gap-4 mt-3'>
        <button className='flex items-center gap-2 bg-[rgb(51,117,187)] hover:bg-[rgb(230,230,230)] transition duration-300 ease-in-out py-2 px-3 rounded-lg'>
            <FaUnlock className='text-white'/>
            <p className='text-white hover:text-blue-600 transition duration-300 ease-in-out'>Log in</p>
        </button>

        <button className='bg-white hover:bg-[rgb(230,230,230)] border border-blue-600 transition duration-300 ease-in-out py-2 px-3 rounded-sm'>
            
            <p className='text-blue-600'>Create your account</p>
        </button>
      </div>
                    </div>

                </div>

                <div className='bg-[rgb(51,117,187)] h-full py-5 w-full flex flex-col items-center justify-center px-3'>
                <button className='flex items-center gap-2 border border-white hover:border-black bg-transparent hover:bg-[rgb(230,230,230)] transition duration-300 ease-in-out py-1 px-3 rounded-sm'>
            <FaUser className='text-black'/>
            <p className='text-white hover:text-blue-600 transition duration-300 ease-in-out'>Log in with a passkey</p>
        </button>
                </div>
            </div>
        </div>
    )
}