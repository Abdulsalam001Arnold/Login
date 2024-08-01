import { CiLock } from "react-icons/ci";
import { Link } from "react-router-dom";
import { FaAngleDown } from "react-icons/fa6";

export default function Forgotinsta() {
    const currentYear = new Date().getFullYear();

    return(
        <div className="flex w-full flex-col justify-center items-center min-h-screen px-4 mt-2">
            <div className="flex w-[20rem] flex-col justify-center items-center gap-5 git-border px-3 py-4">
                <div className="p-4 lock">
                    <CiLock className="text-3xl"/>
                </div>
                <h2>Try Logging in?</h2>

                <p className="font-semibold sm:w-full md:w-full lg:w-[90%]">
                Enter your email, phone, or username and we'll send you a link to get back into your account.
            </p>

            <input
                type="text"
                id="username"
                placeholder="Email, Phone, or username"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />

<button className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-600 w-full">
                Send login link
              </button>

              <Link>
                <p>
                    Can't reset your password?
                </p>
              </Link>

              <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-grow border-t-2 border-gray-300"></div>
          </div>

            <h3>
                Create new account
            </h3>

            </div>

            <div className="git-border px-5 py-2">
                <Link to='/instagram'>
                    Back to Login
                </Link>
            </div>

            <ul className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 w-full items-center justify-center gap-2 md:gap-3 lg:gap-5 mt-4 px-3">
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Meta</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">About</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Jobs</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Blog</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Help</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">API</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Privacy</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Terms</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Locations</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Instagram Lite</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Threads</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Contact Uploading & Non-Users</li>
            <li className="text-xs text-gray-400 hover:underline cursor-pointer">Meta Verified</li>
        </ul>

        <div className="mt-4 flex justify-center gap-3">
            <span className="flex items-center justify-center text-gray-400">
                <p>English</p>

            <FaAngleDown/>
            </span>
            
            <p className="text-gray-400 font-light">
                &copy; {currentYear} Instagram from Meta
            </p>

        </div>
        </div>
    )
}