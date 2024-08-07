import { Link } from "react-router-dom"
import React, { useState } from 'react';
import Modal from './modal';
import { FaFacebook } from "react-icons/fa";
import { CiMobile3 } from "react-icons/ci";


export default function Messenger(){
    const currentYear = new Date().getFullYear();
    const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
    return(
        <div className='h-full w-full flex flex-col items-center justify-center px-2 md:px-5 lg:px-10'>

            <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-center md:justify-between lg:justify-between gap-6 px-4">
                <div className="flex flex-col mt-4">
                <div className="mt-4">
                <h1 className="gradient-text text-[30px] md:text-[40px] lg:text-[90px] font-[450] sm:w-full md:w-full lg:w-[90%] leading-[30px] md:leading-none lg:leading-[90px]">Hang out <br/> anytime, anywhere</h1>
                </div>

                <div className="mt-4 text-center md:text-start lg:text-start">
                    <p className="text-[10px] md:text-[15px] lg:text-[20px] text-[rgb(89,89,89)] sm:w-full md:w-full lg:w-[70%]">
                    Messenger makes it easy and fun to stay close to your favorite people.
                    </p>
                </div>

                <form className="mt-4 flex flex-col">
                <div className="mt-2">
                <input
                type="email"
                id="email"
                placeholder='Email or phone number'
                className="px-4 py-2 mt-1 text-gray-700 bg-[rgb(245,245,245)] border-[1px] border-transparent rounded-lg focus:border-blue-500 focus:outline-none focus:ring sm:w-full md:w-fit lg:w-fit"
              />
                </div>

                <div className="mt-2 w-full">
                <input
                type="password"
                id="password"
                placeholder='Password'
                className="px-4 py-2 mt-1 text-gray-700 bg-[rgb(245,245,245)] border-[1px] border-transparent rounded-lg focus:border-blue-500 focus:outline-none focus:ring sm:w-full md:w-fit lg:w-fit"
              />
                </div>

                <div className='mt-5 flex items-center gap-6'>
                    <button className="bg-[rgb(10,124,255)] text-white py-2 px-4 rounded-[25px]">
                        <p className="font-semibold text-[12px]">
                            Login
                        </p>
                    </button>

                    <Link>
                        <p className="text-[rgb(10,124,255)] text-[15px] font-[600]" onClick={openModal}>
                            Forgotten your password?
                        </p>
                    </Link>
                </div>

                 <Modal show={showModal} onClose={closeModal}>
                 <Link to='/facebook'>
        <div className="flex items-center gap-2 hover:bg-gray-400 transition duration-400 ease-in-out py-3 px-3 rounded-lg">
            <FaFacebook/>
            <div className='flex flex-col'>
            
                <h2 className=''>
                    Go to Facebook.com
                </h2>
                <p className='text-gray-500 text-[12px] w-[90%]'>
                    If you use Messenger with Facebook, you can reset your password on Facebook.com
                </p>
                
            </div>
        </div>
        </Link>

        <Link>
        <div className="flex items-center gap-2 hover:bg-gray-400 transition duration-400 ease-in-out py-3 px-3 rounded-lg">
            <CiMobile3/>
            <div className='flex flex-col'>
            
                <h2 className=''>
                    Open the Messenger app on your mobile phone
                </h2>
                <p className='text-gray-500 text-[12px] w-[80%]'>
                    If you use Messenger without Facebook, you can reset your password using the Messenger app on your mobile device.
                </p>
                
            </div>
        </div>
        </Link>

      </Modal>

                <div className='mt-5 flex items-center gap-3'>
                    <input
                        type="checkbox"
                        className="focus:border-blue-500 focus:outline-none border focus:ring"
                    />

                    <p className="text-xs">
                        Keep me signed in
                    </p>
                </div>
                </form>

                
                <div className='mt-5 flex items-center gap-3'>

                    <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.8562-6/119597221_2801552506611915_4465041091818364564_n.svg?_nc_cat=106&ccb=1-7&_nc_sid=f537c7&_nc_ohc=RJTNI6923tcQ7kNvgHQJzBW&_nc_ht=scontent-los2-1.xx&oh=00_AYCw0IyRbEDhg7jYDqaX9sfYFTpqQQbkax_BxEWD3yZnaA&oe=66B93CB5" alt="apple-store" className="w-[6rem]" />

                    <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.8562-6/119623783_679418069326044_1960140840932205061_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=8vKpo27JfOQQ7kNvgH_7EA1&_nc_ht=scontent-los2-1.xx&oh=00_AYDbhMi4pqKNf0EoX0Pde3JRPfYiKpsS_OT6wfbc2hyWsw&oe=66B9395D" alt="microsoft" className="w-[5.4rem]" />

                </div>
                </div>
            <div className="w-full flex flex-col items-center justify-center">
                <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.8562-6/120973513_338186077283942_8148888802958728934_n.png?_nc_cat=1&ccb=1-7&_nc_sid=f537c7&_nc_ohc=ck-sMXviFQcQ7kNvgEJvr35&_nc_ht=scontent-los2-1.xx&oh=00_AYBFf-zCbr3nZcqNg7dOaoUZT-SWJHXMvD8MaRde0SQYNA&oe=66B92827" alt="facebook" className="w-[80%]" />
            </div>
            </div>

            <div className="w-full flex flex-col md:flex-row lg:flex-row items-center justify-between px-3 mt-[4rem] gap-5">

            <div>
                <p className="text-[8px]">
                    <span className="font-bold text-[8px]">
                        &copy; Meta {currentYear}
                    </span>
                    The Apple and Google Play logos are trademarks of their respective owners.
                </p>
            </div>

            <div className="flex flex-col md:flex-row lg:flex-row items-center gap-2">
                <Link>
                    <p className="text-[15px] font-[400]">
                        Privacy policy
                    </p>
                </Link>

                <Link>
                    <p className="text-[15px] font-[400]">
                        Cookie policy
                    </p>
                </Link>

                <Link>
                    <p className="text-[15px] font-[400]">
                        Terms
                    </p>
                </Link>

                <Link>
                <select className="sm:w-full md:w-full lg:w-64 p-2 border border-gray-300 rounded-md overflow-auto max-h-40">
      <option value="en">English</option>
      <option value="es">Spanish</option>
      <option value="fr">French</option>
      <option value="de">German</option>
      <option value="zh">Chinese</option>
      <option value="ja">Japanese</option>
      <option value="ru">Russian</option>
      <option value="ar">Arabic</option>
      <option value="pt">Portuguese</option>
      <option value="hi">Hindi</option>
      <option value="bn">Bengali</option>
      <option value="pa">Punjabi</option>
      <option value="jv">Javanese</option>
      <option value="ko">Korean</option>
      <option value="vi">Vietnamese</option>
      <option value="ta">Tamil</option>
      <option value="it">Italian</option>
      <option value="tr">Turkish</option>
      <option value="fa">Persian</option>
      <option value="ur">Urdu</option>
      <option value="nl">Dutch</option>
      <option value="pl">Polish</option>
      <option value="ro">Romanian</option>
      <option value="hu">Hungarian</option>
      <option value="el">Greek</option>
      <option value="sv">Swedish</option>
      <option value="fi">Finnish</option>
      <option value="no">Norwegian</option>
      <option value="da">Danish</option>
      <option value="he">Hebrew</option>
      <option value="id">Indonesian</option>
      <option value="ms">Malay</option>
      <option value="th">Thai</option>
      <option value="cs">Czech</option>
      <option value="sk">Slovak</option>
      <option value="bg">Bulgarian</option>
      <option value="sr">Serbian</option>
      <option value="hr">Croatian</option>
      <option value="lt">Lithuanian</option>
      <option value="lv">Latvian</option>
      <option value="et">Estonian</option>
      <option value="sl">Slovenian</option>
      <option value="is">Icelandic</option>
      <option value="mt">Maltese</option>
      <option value="ga">Irish</option>
      <option value="cy">Welsh</option>
      <option value="sq">Albanian</option>
      <option value="mk">Macedonian</option>
      <option value="bs">Bosnian</option>
      <option value="hy">Armenian</option>
      <option value="ka">Georgian</option>
      <option value="az">Azerbaijani</option>
      <option value="uz">Uzbek</option>
      <option value="kk">Kazakh</option>
      <option value="mn">Mongolian</option>
      <option value="km">Khmer</option>
      <option value="lo">Lao</option>
            </select>
                </Link>

                <Link>
                    <img src="https://scontent-los2-1.xx.fbcdn.net/v/t39.8562-6/401750647_1601653570640810_4087456680134260053_n.png?_nc_cat=100&ccb=1-7&_nc_sid=f537c7&_nc_ohc=NocebCZ2mzMQ7kNvgHEYmw5&_nc_ht=scontent-los2-1.xx&oh=00_AYC8PiO3R3zVes_S5sl6WZYD3lMBabf_NtrEEDcAFRGhNQ&oe=66B90EC8" alt="meta" className="w-[9rem]" />
                </Link>
            </div>

            </div>
        </div>

    )
}