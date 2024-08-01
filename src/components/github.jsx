import { Link } from "react-router-dom"


export default function Github() {
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-2 md:gap-5 lg:gap-9">
        <div className="flex flex-col justify-center gap-6 items-center mb-5">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-16 h-16"
            />
          <h2 className="text-2xl text-center text-gray-700 font-light">Sign in to GitHub</h2>

          </div>
        <div className="w-[19rem] p-6 bg-[rgb(246,248,250)] rounded-md shadow-md git-border">
          
          <form className="mt-2">
            <div>
              <label htmlFor="username" className="block text-sm text-gray-800">Username or email address</label>
              <input
                type="text"
                id="username"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="mt-2">
            <div className="flex justify-between">
              <label htmlFor="password" className="block text-sm text-gray-800">Password</label>
              <Link to="/forgot-password-github" className="text-sm text-blue-500 hover:underline">Forgot password?</Link>

              </div>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>
            <div className="flex items-center justify-between mt-2">
              <button className="px-4 py-2 text-white bg-[rgb(31,136,61)] rounded-md hover:bg-[rgb(29,92,47)] focus:outline-none focus:bg-[rgb(29,92,47)] w-full">
                Sign in
              </button>
            </div>
          </form>
          
        </div>
        <div className="w-[19rem] p-6 rounded-sm git-border flex flex-col items-center justify-center gap-2">
        <a href="/" className="text-blue-700 hover:underline text-sm">
            Signin with a passkey
        </a>

        <span className="text-sm">
            New to Github?
            <a href="/" className="text-blue-700 hover:underline">
                Create an account
            </a>
        </span>
        </div>
        <ul className="w-full flex items-center justify-center gap-1 md:gap-3 lg:gap-9">
            <li className="text-xs text-gray-400 hover:text-blue-700 hover:underline cursor-pointer">Terms</li>
            <li className="text-xs text-gray-400 hover:text-blue-700 hover:underline cursor-pointer">Privacy</li>
            <li className="text-xs text-gray-400 hover:text-blue-700 hover:underline cursor-pointer">Docs</li>
            <li className="text-xs text-gray-400 hover:text-blue-700 hover:underline cursor-pointer">Contact Github Support</li>
            <li className="text-xs text-gray-400 hover:text-blue-700 hover:underline cursor-pointer">Manage cookies</li>
            <li className="text-xs text-gray-400 hover:text-blue-700 hover:underline cursor-pointer">Do not share my personal info</li>

        </ul>
      </div>
    )
}