import { FaFacebookSquare } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { Link } from "react-router-dom";


export default function Insta(){
    const currentYear = new Date().getFullYear();

    return(
        <div className="flex flex-col w-full justify-center items-center min-h-screen">
      <div className="flex flex-col items-center free md:git-border lg:git-border mt-4">
        <div className="bg-white p-10 shadow-lg max-w-md w-full">
          <div className="flex justify-center mb-6">
            <img
              src="https://www.instagram.com/static/images/web/logged_out_wordmark.png/7a252de00b20.png"
              alt="Instagram Logo"
              className="w-3/4"
            />
          </div>
          <form className="">
            <div className="mb-2">
              <input
                type="text"
                placeholder="Phone number, username, or email"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full px-4 py-2 border focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button className="w-full py-2 mt-4 text-white bg-blue-500 rounded-lg hover:bg-blue-600">
              Log In
            </button>
          </form>
          <div className="flex items-center my-4">
            <div className="flex-grow border-t border-gray-300"></div>
            <span className="px-4 text-gray-500">OR</span>
            <div className="flex-grow border-t border-gray-300"></div>
          </div>
          <div className="flex items-center justify-center">
          <FaFacebookSquare />
            <a href="/" className="text-blue-500 hover:underline">Log in with Facebook</a>
          </div>
          <div className="flex justify-center mt-4">
            <Link to="/forgot-password-instagram" className="text-sm text-gray-500 hover:underline">Forgot password?</Link>
          </div>
        </div>
      </div>

      <div className="bg-white mt-4 p-4 shadow-lg w-fit text-center git-border">
          <p className="text-gray-700">Don't have an account? <a href="/" className="text-blue-500 hover:underline">Sign up</a></p>
        </div>


        <div className="flex items-center justify-center gap-3 mt-[2rem]">
            <img src='https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png' alt="get it" className="w-[8rem]" />

            <img src='https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png' alt="get it" className="w-[7rem]"/>


        </div>



        <ul className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-11 w-full items-center justify-center gap-2 md:gap-3 lg:gap-5 mt-6 px-3">
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