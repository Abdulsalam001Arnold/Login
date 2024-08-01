import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { TbArrowsExchange } from 'react-icons/tb';
import { FaEye, FaEyeSlash, FaTimes } from 'react-icons/fa';
import { FaGoogle } from 'react-icons/fa';
import { FaApple } from 'react-icons/fa';
import { GoArrowRight } from 'react-icons/go';


export default function Bybit() {
    const [inputType, setInputType] = useState("username");
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (type) => {
    setInputType(type);
  };

  const getInputType = () => {
    switch (inputType) {
      case "phoneNumber":
        return "tel";
      case "pinNumber":
        return "password"; // Assuming pin number should be handled as a password input
      default:
        return "text";
    }
  };

  const getInputId = () => inputType;

  const getPlaceholder = () => {
    switch (inputType) {
      case "phoneNumber":
        return "Mobile";
      case "pinNumber":
        return "Enter your pin number";
      default:
        return "Email";
    }
  };


  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const clearPassword = () => {
    setPassword('');
  };


    return(
        <div className='w-full h-full flex flex-col items-center justify-center bg-[rgb(245,247,250)] px-4'>

        <div className='flex flex-col sm:w-full md:w-full lg:w-[32rem] bg-white py-[2rem] rounded-lg'>
            <div className='flex flex-col md:flex-col lg:flex-row px-4 items-center justify-between'>
                <h1 className='text-[18px] md:text-[24px] lg:text-[24px] font-semibold text-[rgb(18,18,20)]'>
                    Welcome to Bybit
                </h1>

                <Link to=''>
                <div className='flex items-center gap-1 text-[rgb(237,173,18)] hover:text-[rgb(241,196,89)] transition ease-in-out duration-300'>
                    <TbArrowsExchange/>
                    <p>Signup</p>
                </div>
                </Link>
            </div>

            <div className='bg-[rgb(228,228,228)] w-full mt-3 h-[1px]'></div>

            <div className='flex flex-col px-1 md:px-2 lg:px-4'>

            <div className=' mt-[2rem]'>
      <div className="flex gap-3 items-center">
      <div className='flex flex-col items-center justify-center gap-1'>
        <button
          className={`px-1 py-1 relative block text-[12px] font-semibold ${inputType === "username" ? "text-black font-bold" : "text-[rgb(117,117,117)]"}`}
          onClick={() => handleInputChange("username")}
        >
          Email
        </button>

        <span className={`h-[2px] bg-[rgb(237,173,18)] transition-all duration-300 ${inputType === "username" ? 'w-full' : 'hover:w-full w-0'}`}></span>
        </div>

        <div className='flex flex-col items-center justify-center gap-1'>
        <button
          className={`px-1 py-1 relative block text-[12px] font-semibold ${inputType === "phoneNumber" ? "text-black font-bold" : "text-[rgb(117,117,117)]"}`}
          onClick={() => handleInputChange("phoneNumber")}
        >
          Mobile
        </button>
        <span className={`h-[2px] bg-[rgb(237,173,18)] transition-all duration-300 ${inputType === "phoneNumber" ? 'w-full' : 'hover:w-full w-0'}`}></span>
        </div>

        {/* <div className='flex flex-col items-center justify-center gap-1'>
        <button
          className={`px-1 py-1 relative block text-[12px] font-semibold ${inputType === "pinNumber" ? "text-black font-bold" : "text-[rgb(117,117,117)]"}`}
          onClick={() => handleInputChange("pinNumber")}
        >
          QR code
        </button>

        <span className={`h-[2px] bg-[rgb(237,173,18)] transition-all duration-300 ${inputType === "pinNumber" ? 'w-full' : 'hover:w-full w-0'}`}></span>
        </div> */}

      </div>

      <div className='flex w-full flex-col'>
      <div className={`${inputType === "phoneNumber" ? "flex gap-2" : "block"}`}>
      <select className={`w-[3rem] p-2 text-gray-700 bg-[rgb(242,242,242)] border-b rounded-md focus:border-b-blue-700 focus:outline-none ${inputType === "phoneNumber" ? "block" : "hidden"}`}>
  <option value="+93">Afghanistan (+93)</option>
  <option value="+355">Albania (+355)</option>
  <option value="+213">Algeria (+213)</option>
  <option value="+1-684">American Samoa (+1-684)</option>
  <option value="+376">Andorra (+376)</option>
  <option value="+244">Angola (+244)</option>
  <option value="+1-264">Anguilla (+1-264)</option>
  <option value="+672">Antarctica (+672)</option>
  <option value="+1-268">Antigua and Barbuda (+1-268)</option>
  <option value="+54">Argentina (+54)</option>
  <option value="+374">Armenia (+374)</option>
  <option value="+297">Aruba (+297)</option>
  <option value="+61">Australia (+61)</option>
  <option value="+43">Austria (+43)</option>
  <option value="+994">Azerbaijan (+994)</option>
  <option value="+1-242">Bahamas (+1-242)</option>
  <option value="+973">Bahrain (+973)</option>
  <option value="+880">Bangladesh (+880)</option>
  <option value="+1-246">Barbados (+1-246)</option>
  <option value="+375">Belarus (+375)</option>
  <option value="+32">Belgium (+32)</option>
  <option value="+501">Belize (+501)</option>
  <option value="+229">Benin (+229)</option>
  <option value="+1-441">Bermuda (+1-441)</option>
  <option value="+975">Bhutan (+975)</option>
  <option value="+591">Bolivia (+591)</option>
  <option value="+387">Bosnia and Herzegovina (+387)</option>
  <option value="+267">Botswana (+267)</option>
  <option value="+55">Brazil (+55)</option>
  <option value="+246">British Indian Ocean Territory (+246)</option>
  <option value="+1-284">British Virgin Islands (+1-284)</option>
  <option value="+673">Brunei (+673)</option>
  <option value="+359">Bulgaria (+359)</option>
  <option value="+226">Burkina Faso (+226)</option>
  <option value="+257">Burundi (+257)</option>
  <option value="+855">Cambodia (+855)</option>
  <option value="+237">Cameroon (+237)</option>
  <option value="+1">Canada (+1)</option>
  <option value="+238">Cape Verde (+238)</option>
  <option value="+1-345">Cayman Islands (+1-345)</option>
  <option value="+236">Central African Republic (+236)</option>
  <option value="+235">Chad (+235)</option>
  <option value="+56">Chile (+56)</option>
  <option value="+86">China (+86)</option>
  <option value="+61">Christmas Island (+61)</option>
  <option value="+61">Cocos Islands (+61)</option>
  <option value="+57">Colombia (+57)</option>
  <option value="+269">Comoros (+269)</option>
  <option value="+682">Cook Islands (+682)</option>
  <option value="+506">Costa Rica (+506)</option>
  <option value="+385">Croatia (+385)</option>
  <option value="+53">Cuba (+53)</option>
  <option value="+599">Curacao (+599)</option>
  <option value="+357">Cyprus (+357)</option>
  <option value="+420">Czech Republic (+420)</option>
  <option value="+243">Democratic Republic of the Congo (+243)</option>
  <option value="+45">Denmark (+45)</option>
  <option value="+253">Djibouti (+253)</option>
  <option value="+1-767">Dominica (+1-767)</option>
  <option value="+1-809, 1-829, 1-849">Dominican Republic (+1-809, 1-829, 1-849)</option>
  <option value="+670">East Timor (+670)</option>
  <option value="+593">Ecuador (+593)</option>
  <option value="+20">Egypt (+20)</option>
  <option value="+503">El Salvador (+503)</option>
  <option value="+240">Equatorial Guinea (+240)</option>
  <option value="+291">Eritrea (+291)</option>
  <option value="+372">Estonia (+372)</option>
  <option value="+251">Ethiopia (+251)</option>
  <option value="+500">Falkland Islands (+500)</option>
  <option value="+298">Faroe Islands (+298)</option>
  <option value="+679">Fiji (+679)</option>
  <option value="+358">Finland (+358)</option>
  <option value="+33">France (+33)</option>
  <option value="+689">French Polynesia (+689)</option>
  <option value="+241">Gabon (+241)</option>
  <option value="+220">Gambia (+220)</option>
  <option value="+995">Georgia (+995)</option>
  <option value="+49">Germany (+49)</option>
  <option value="+233">Ghana (+233)</option>
  <option value="+350">Gibraltar (+350)</option>
  <option value="+30">Greece (+30)</option>
  <option value="+299">Greenland (+299)</option>
  <option value="+1-473">Grenada (+1-473)</option>
  <option value="+1-671">Guam (+1-671)</option>
  <option value="+502">Guatemala (+502)</option>
  <option value="+44-1481">Guernsey (+44-1481)</option>
  <option value="+224">Guinea (+224)</option>
  <option value="+245">Guinea-Bissau (+245)</option>
  <option value="+592">Guyana (+592)</option>
  <option value="+509">Haiti (+509)</option>
  <option value="+504">Honduras (+504)</option>
  <option value="+852">Hong Kong (+852)</option>
  <option value="+36">Hungary (+36)</option>
  <option value="+354">Iceland (+354)</option>
  <option value="+91">India (+91)</option>
  <option value="+62">Indonesia (+62)</option>
  <option value="+98">Iran (+98)</option>
  <option value="+964">Iraq (+964)</option>
  <option value="+353">Ireland (+353)</option>
  <option value="+44-1624">Isle of Man (+44-1624)</option>
  <option value="+972">Israel (+972)</option>
  <option value="+39">Italy (+39)</option>
  <option value="+225">Ivory Coast (+225)</option>
  <option value="+1-876">Jamaica (+1-876)</option>
  <option value="+81">Japan (+81)</option>
  <option value="+44-1534">Jersey (+44-1534)</option>
  <option value="+962">Jordan (+962)</option>
  <option value="+7">Kazakhstan (+7)</option>
  <option value="+254">Kenya (+254)</option>
  <option value="+686">Kiribati (+686)</option>
  <option value="+383">Kosovo (+383)</option>
  <option value="+965">Kuwait (+965)</option>
  <option value="+996">Kyrgyzstan (+996)</option>
  <option value="+856">Laos (+856)</option>
  <option value="+371">Latvia (+371)</option>
  <option value="+961">Lebanon (+961)</option>
  <option value="+266">Lesotho (+266)</option>
  <option value="+231">Liberia (+231)</option>
  <option value="+218">Libya (+218)</option>
  <option value="+423">Liechtenstein (+423)</option>
  <option value="+370">Lithuania (+370)</option>
  <option value="+352">Luxembourg (+352)</option>
  <option value="+853">Macau (+853)</option>
  <option value="+389">Macedonia (+389)</option>
  <option value="+261">Madagascar (+261)</option>
  <option value="+265">Malawi (+265)</option>
  <option value="+60">Malaysia (+60)</option>
  <option value="+960">Maldives (+960)</option>
  <option value="+223">Mali (+223)</option>
  <option value="+356">Malta (+356)</option>
  <option value="+692">Marshall Islands (+692)</option>
  <option value="+222">Mauritania (+222)</option>
  <option value="+230">Mauritius (+230)</option>
  <option value="+262">Mayotte (+262)</option>
  <option value="+52">Mexico (+52)</option>
  <option value="+691">Micronesia (+691)</option>
  <option value="+373">Moldova (+373)</option>
  <option value="+377">Monaco (+377)</option>
  <option value="+976">Mongolia (+976)</option>
  <option value="+382">Montenegro (+382)</option>
  <option value="+1-664">Montserrat (+1-664)</option>
  <option value="+212">Morocco (+212)</option>
  <option value="+258">Mozambique (+258)</option>
  <option value="+95">Myanmar (+95)</option>
  <option value="+264">Namibia (+264)</option>
  <option value="+674">Nauru (+674)</option>
  <option value="+977">Nepal (+977)</option>
  <option value="+31">Netherlands (+31)</option>
  <option value="+687">New Caledonia (+687)</option>
  <option value="+64">New Zealand (+64)</option>
  <option value="+505">Nicaragua (+505)</option>
  <option value="+227">Niger (+227)</option>
  <option value="+234" selected={true}>Nigeria (+234)</option>
  <option value="+683">Niue (+683)</option>
  <option value="+850">North Korea (+850)</option>
  <option value="+1-670">Northern Mariana Islands (+1-670)</option>
  <option value="+47">Norway (+47)</option>
  <option value="+968">Oman (+968)</option>
  <option value="+92">Pakistan (+92)</option>
  <option value="+680">Palau (+680)</option>
  <option value="+970">Palestine (+970)</option>
  <option value="+507">Panama (+507)</option>
  <option value="+675">Papua New Guinea (+675)</option>
  <option value="+595">Paraguay (+595)</option>
  <option value="+51">Peru (+51)</option>
  <option value="+63">Philippines (+63)</option>
  <option value="+64">Pitcairn (+64)</option>
  <option value="+48">Poland (+48)</option>
  <option value="+351">Portugal (+351)</option>
  <option value="+1-787, 1-939">Puerto Rico (+1-787, 1-939)</option>
  <option value="+974">Qatar (+974)</option>
  <option value="+242">Republic of the Congo (+242)</option>
  <option value="+40">Romania (+40)</option>
  <option value="+7">Russia (+7)</option>
  <option value="+250">Rwanda (+250)</option>
</select>
      <input
        type={getInputType()}
        id={getInputId()}
        placeholder={getPlaceholder()}
        required={true}
        className="w-full px-1 md:px-4 lg:px-7 py-3 mt-2 text-gray-700 bg-[rgb(242,242,242)] border-b rounded-md focus:border-b-blue-700 focus:outline-none"
      />
      </div>

<div className="relative w-full mt-2">
      <input
        type={showPassword ? 'text' : 'password'}
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required={true}
        className="w-full px-7 py-3 text-gray-700 bg-[rgb(242,242,242)] border-b rounded-md focus:border-b-blue-700 focus:outline-none"
      />
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2 flex space-x-2">
        {password && (
          <FaTimes
            className="cursor-pointer text-gray-700"
            onClick={clearPassword}
          />
        )}
        <div onClick={toggleShowPassword} className="cursor-pointer text-gray-700">
          {showPassword ? <FaEyeSlash /> : <FaEye />}
        </div>
      </div>
    </div>
      </div>
      <Link to=''>
      <p className='mt-2 text-end text-[12px] font-semibold text-[rgb(237,173,18)] hover:text-[rgb(241,196,89)] transition ease-in-out duration-300'>
        Forgot Password
      </p>
      </Link>
    </div>

            <button className='text-black bg-[rgb(237,173,18)] hover:bg-[rgb(241,196,89)] transition ease-in-out duration-300 py-3 w-full rounded-lg font-bold text-[12px] mt-3'>
                Login
            </button>

            <div className='flex items-center w-full mt-3'>
            <div className='bg-[rgb(0,0,0)] flex-grow'></div>
            <p className='text-[10px] text-gray-400'>or login with</p>
            <div className='bg-[rgb(7,7,7)] flex-grow'></div>

            </div>

            <div className='w-full flex items-center justify-center gap-3 mt-4'>

            <Link>
              <button className='flex items-center px-4 gap-2 py-3 border bg-white hover:bg-gray-300 transition ease-in-out duration-300 border-gray-300 rounded-lg'>
                <FaGoogle/>
                Google
              </button>
              </Link>


            <Link>
              <button className='flex items-center px-4 gap-2 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-300 transition ease-in-out duration-300'>
                <FaApple/>
                Apple
              </button>
              </Link>
            </div>

            <div className='bg-[rgb(228,228,228)] w-full mt-3 h-[1px]'></div>

            <Link>
            <div className='w-full flex items-center justify-center mt-4 gap-3 text-[rgb(237,173,18)] hover:text-[rgb(241,196,89)] transition ease-in-out duration-300'>
              <p className='text-[14px] font-semibold'>Log in with Subaccount</p>
              <GoArrowRight/>
            </div>
            </Link>
            </div>
        </div>

        </div>
    )
}