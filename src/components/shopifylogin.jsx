import { Link } from "react-router-dom"
import { GoPasskeyFill } from "react-icons/go";
import shopify from '../assets/shopify.jpg'
import { FaApple } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaGoogle } from "react-icons/fa";


export default function Shopifylogin(){
    return(
        <div className='w-full h-[100vh] background flex flex-col items-center justify-center'>

        <div className="flex flex-col bg-white py-6 px-6 rounded-lg mt-5 sm-w-full md:w-[23rem] lg:w-[30rem]">

        <div className="flex items-center gap-3 mb-3">
            <img src={shopify} alt="logo" className="w-[3rem]"/>
            <h1 className="font-bold text-[18px] text-black">
                Shopify
            </h1>
        </div>
            <div className="flex flex-col gap-1">
                <h1 className="text-[24px] font-[700] text-[rgb(48,48,48)]">
                    Login
                </h1>
                <p className="text-[14px] font-[550] text-[rgb(97,97,97)]">
                    Continue to Shopify
                </p>
            </div>

            <form className="mt-2">
            <div>
              <label htmlFor="email" className="block text-sm text-gray-800">Email</label>
              <input
                type="email"
                id="email"
                placeholder='Email'
                className="w-full px-4 py-2 mt-1 text-gray-700 bg-white border-[1px] border-black rounded-lg focus:border-blue-900 focus:outline-none focus:ring"
              />
            </div>
            

            
            <div className="flex items-center justify-between mt-2">
            <button className="bg-[rgb(63,63,63)] hover:bg-[rgb(46,46,46)] transition ease-in-out px-4 py-2 text-white rounded-lg shadow-md w-full">
                    <p className="text-[14px]">
                        Continue with email
                    </p>
                </button>
            </div>

            <div className="flex items-center justify-center gap-2 mt-2 bg-transparent hover:bg-[rgb(220,220,220)] transition ease-in-out duration-500 py-3 px-2 rounded-md">
                <GoPasskeyFill/>
                <p className="">
                    Signin with passkey
                </p>
            </div>

            <div className="flex items-center justify-center gap-2 mt-2">
            <div className="bg-[rgb(168,168,168)] h-[1px] flex-grow"></div>
            <p>or</p>
            <div className="bg-[rgb(168,168,168)] h-[1px] flex-grow"></div>
            </div>

            <div className="flex items-center justify-center gap-4">
                <div className="py-4 px-5 bg-[rgb(241,241,241)] hover:bg-[rgb(177,177,177)] transition-colors ease-in-out duration-300 rounded-md">
                    <FaApple/>
                </div>

                <div className="py-4 px-5 bg-[rgb(241,241,241)] hover:bg-[rgb(177,177,177)] transition-colors ease-in-out duration-300 rounded-md">
                    <FaFacebook/>
                </div>

                <div className="py-4 px-5 bg-[rgb(241,241,241)] hover:bg-[rgb(177,177,177)] transition-colors ease-in-out duration-300 rounded-md">
                    <FaGoogle/>
                </div>
            </div>
          </form>

          <div className='flex items-center mt-4'>
                <p className='text-[13px] font-[350] text-[rgb(97,97,97)]'>
                    New to Shopify?
                </p>

                <span className='text-blue-500 flex items-center'>
                    <p>
                        Create Acoount
                    </p>

                    <FaLongArrowAltRight />
                </span>
            </div>

            <div className='flex items-center gap-8 mt-4 mb-5'>
            <Link>
                <p className='text-[13px] font-[350] text-[rgb(97,97,97)] hover:underline'>
                    Help
                </p>
                </Link>


                <Link>
                <p className='text-[13px] font-[350] text-[rgb(97,97,97)] hover:underline'>
                    Privacy
                </p>
                </Link>


                <Link>
                <p className='text-[13px] font-[350] text-[rgb(97,97,97)] hover:underline'>
                    Terms
                </p>
                </Link>
            </div>

        </div>

        </div>
    )
}