import logo from '../assets/pinterest-logo.png'
import facebook from '../assets/facebook-logo.png'
import Google from './google'

import { Link } from 'react-router-dom'

export default function Pinterest() {
    return(
        <div className="w-full flex flex-col items-center justify-center bg-gray-200 h-full">

            <div className='flex flex-col items-center justify-center w-fit py-4 px-5 rounded-[15px] shadow-xl bg-white mt-4'>
                <div className='flex flex-col items-center justify-center py-4 px-3 gap-3'>
                    <img src={logo} alt='pinterest-logo' className='w-[3rem]'/>

                    <h1 className='text-2xl font-semibold'>
                        Login to see more
                    </h1>
                </div>

                <form className="mt-2">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                placeholder='Email'
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border-[2px] border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="mt-2">
              <label htmlFor="password" className="block text-sm text-gray-800">Password</label>

              
              <input
                type="password"
                id="password"
                placeholder='Password'
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border-[2px] border-gray-300 rounded-lg focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <Link>
                <p className='mt-2'>
                    Forgot Password?
                </p>
            </Link>
            <div className="flex items-center justify-between mt-2">
              <button className="px-4 py-2 text-white bg-[rgb(230,0,35)] rounded-md hover:bg-[rgb(230,0,31)] focus:outline-none focus:bg-[rgb(230,0,35)] w-full radius-1">
                Log in
              </button>
            </div>
          </form>

          <div className="flex items-center justify-center mt-2">
            <div className="flex-grow h-[1px] w-full border-gray-600"></div>
            <span className="px-4 text-gray-700 font-bold text-xl">OR</span>
            <div className="flex-grow border-t border-gray-600"></div>
          </div>

          <Link to='/facebook'>
            <buttton className='py-1 px-4 bg-[rgb(0,116,232)] flex gap-3 items-center radius-1 mt-2'>
                <img src={facebook} alt='facebook-logo' className='w-[2rem]'/>
                <p className='text-white font-bold text-xs'>Continue with Facebook</p>
            </buttton>
          </Link>


        <div className='mt-2'>
          <Google />
        </div>

        <div className='mt-4 flex justify-center'>
            <p className='text-gray-500 text-[9px] text-center sm:w-full md:w-full lg:w-[70%]'>
            By continuing, you agree to Pinterest's <span className='text-black font-bold hover:underline cursor-pointer'>Terms of Service</span>  and acknowledge you've read our <span className='text-black font-bold hover:underline cursor-pointer'>Privacy Policy</span>. <span className='text-black font-bold hover:underline cursor-pointer'>Notice at collection</span>.
            </p>
        </div>

      <Link>
        <p className='mt-4 text-[9px] font-bold'>
          Not on Pinterest yet?Sign up
        </p>
        </Link>

        <Link>
        <p className='mt-4 text-[9px] font-bold'>
          Are you a business? Get started here!
        </p>
        </Link>
            </div>

        </div>
    )
}