import React, { useState } from 'react';
import { FaRegArrowAltCircleRight } from 'react-icons/fa';
import { Link } from 'react-router-dom';
export default function AppleId(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [isVisible, setIsVisible] = useState(false)
    const currentYear = new Date().getFullYear();
    return(
        <div className='w-full h-full flex flex-col items-center justify-center'>
            <div className="flex flex-col items-center justify-center bg-white py-6 mt-[6rem] px-4 sm:w-fit md:w-fit lg:w-[34rem] shadow-none md:shadow-lg lg:shadow-xl rounded-none md:rounded-[30px] lg:rounded-[30px]">
                <img src="https://www.icloud.com/system/icloud.com/2420Hotfix12/en-us/4f72d89d71e9abcc4e37c71fb77fe65b.svg" alt="apple" className="w-[9rem]"/>

                <h1 className="text-[30px] font-[450] mt-4">
                    Sign in with APPLE ID
                </h1>

                <div className="relative w-full mt-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="peer input-field"
          placeholder=" "
        />
        <label className="input-label text-gray-300 scale-100 focus-within:scale-90">Email or Phone Number</label>
        <div
          className={`absolute top-4 right-3 cursor-pointer ${email ? 'text-black-900' : 'pointer-events-none text-gray-400'}`}
          onClick={() => email && setIsVisible(true)}
        >
          <FaRegArrowAltCircleRight size={20} />
        </div>
      </div>

      <div className={`relative w-full mt-0 transition-all duration-500 ease-in-out ${isVisible ? 'max-h-full opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="peer input-field"
          placeholder=" "
        />
        <label className="input-label text-gray-300 scale-100 focus-within:scale-90">Password</label>
        <div
          className={`absolute top-4 right-3 cursor-pointer ${password ? 'text-blue-500' : 'pointer-events-none text-gray-400'}`}
          onClick={() => password && alert('Icon clicked')}
        >
          <FaRegArrowAltCircleRight size={20} />
        </div>
      </div>

      <div className='w-full flex gap-1 mt-9 items-center justify-center'>
      <input
                        type="checkbox"
                        className="focus:border-blue-500 focus:outline-none border focus:ring"
                    />

                    <p className="text-[17px] font-[400] text-[rgba(0,0,0,0.88)]">
                        Keep me signed in
                    </p>
      </div>
    <Link to='https://iforgot.apple.com/password/verify/appleid'>
      <p className='text-blue-600 underline text-[15px] mt-4'>
        Forgot password?
      </p>
      </Link>

      <Link to=''>
      <p className='text-blue-600 text-[15px] mt-4'>
        Create Apple ID
      </p>
      </Link>
            </div>

            <div className='mt-[5rem] bg-[rgb(242,242,247)] w-full flex flex-col items-center justify-center px-4 py-[2rem]'>
                <div className='flex flex-col w-full md:flex-row lg:flex-row items-center justify-between'>
                    <ul className='flex items-center gap-4'>
                        <li className='text-[rgb(153,153,156)] text-[12px]'>
                            System Status
                        </li>

                        <li className='w-[1px] h-full bg-[rgb(153,153,156)]'></li>

                        <li className='text-[rgb(153,153,156)] text-[12px]'>
                            Privacy Policy
                        </li>

                        <li className='w-[1px] h-full bg-[rgb(153,153,156)]'></li>


                        <li className='text-[rgb(153,153,156)] text-[12px]'>
                            Terms & Conditions
                        </li>


                    </ul>

                    <div>
                        <p className='text-[rgb(153,153,156)] text-[12px]'>
                            Copyright &copy; {currentYear} Apple Inc. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}