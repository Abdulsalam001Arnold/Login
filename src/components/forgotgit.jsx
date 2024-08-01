


export default function Forgotgit(){
    return(
        <div className="flex flex-col justify-center items-center min-h-screen gap-6 px-4">

<div className="flex flex-col justify-center gap-6 items-center mb-5">
            <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-16 h-16"
            />
          <h2 className="text-2xl text-center text-gray-700 font-light">Reset your password</h2>
          </div>

        <div className="p-6 bg-[rgb(246,248,250)] rounded-md shadow-md git-border">
            <p className="font-semibold w-[90%]">
                Enter your user account's verified email address and we will send you a password reset link.
            </p>
            <input
                type="text"
                id="username"
                className="w-full px-4 py-2 mt-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:outline-none focus:ring"
              />

              <h3 className="mt-4">
                Verify your account
              </h3>

              <div className="flex items-center justify-center relative h-[8rem]">
              <img
              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
              alt="GitHub Logo"
              className="w-16 h-16"
            />
            <div className="spinner absolute z-10"></div>

              </div>

              <button className="px-4 py-2 mt-7 text-white bg-[rgb(31,136,61)] rounded-md hover:bg-[rgb(29,92,47)] focus:outline-none focus:bg-[rgb(29,92,47)] w-full" disabled={true}>
                Send password reset email
              </button>
        </div>

          <ul className="flex items-center justify-center gap-2 md:gap-3 lg:gap-9">
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