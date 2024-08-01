import { Link } from 'react-router-dom'
import { FaLongArrowAltRight } from 'react-icons/fa';
import { FaShopify } from "react-icons/fa6";
import { FcGlobe } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import { FaTiktok } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";

export default function Shopify(){
    return(
        <div className='w-full h-full background flex flex-col items-center justify-center'>

            <div className="flex flex-col bg-white py-6 px-4 sm:w-fit md:w-fit lg:w-[28rem] rounded-lg mt-5">
            <div className="flex flex-col gap-2 mt-5">
                <h1 className="text-[20px] font-[400]">
                    Login
                </h1>

                <p className="text-[13px] font-[300] text-[rgb(97,97,97)]">
                    Continue to Shopify
                </p>
            </div>

            <div className='mt-4 w-full'>
            <Link to='/shopify-login'>
                <button className="bg-[rgb(63,63,63)] hover:bg-[rgb(46,46,46)] transition ease-in-out px-4 py-2 text-white rounded-lg shadow-md w-full">
                    <p className="text-[14px]">
                        Login to your Shopify acoount
                    </p>
                </button>
                </Link>
            </div>

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

            <div className='mt-[4rem] w-full h-full bg-black flex flex-col items-center justify-between py-[4rem] px-2'>

                <div className='flex flex-col w-full md:flex-row lg:flex-row items-start justify-between'>
                    <div className='min-w-[100px]'>
                        <FaShopify className='text-[4rem] text-white'/>
                    </div>
                
                    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-start gap-6 text-white'>
                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h1 className='text-[16px] font-[700]'>
                            Shopify
                        </h1>

                        <ul className='flex flex-col items-start justify-center gap-2'>
                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                About
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Careers
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Investors
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Press and Media
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Press and Media
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Partners
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Affiliates
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Legal
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Service status
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h1 className='text-[16px] font-[700]'>
                        Support
                        </h1>

                        <ul className='flex flex-col items-start justify-center gap-2'>
                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Merchant Support
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Help Center
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                               Hire a Partner
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Shopify Acamedic
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                            Shopify Community
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                            Shopify Events
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h1 className='text-[16px] font-[700]'>
                        Developers
                        </h1>

                        <ul className='flex flex-col items-start justify-center gap-2'>
                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Shopify.dev
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Help Center
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                               API Documentation
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Dev Degree
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h1 className='text-[16px] font-[700]'>
                        Products
                        </h1>

                        <ul className='flex flex-col items-start justify-center gap-2'>
                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Shop
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Shopify Plus
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                               Linkpop
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Shopify for enterprises
                            </li>
                        </ul>
                    </div>

                    <div className='flex flex-col items-start justify-center gap-3'>
                        <h1 className='text-[16px] font-[700]'>
                        Solutions
                        </h1>

                        <ul className='flex flex-col items-start justify-center gap-2'>
                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Online store builder
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Website builder
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                               Ecommerce website
                            </li>

                            <li className='text-[16px] font-[400] text-[rgb(255,255,255)] hover:underline'>
                                Shopify for enterprises
                            </li>
                        </ul>
                    </div>
                 </div>
                </div>


                <div className='w-full flex flex-col mt-[4rem] px-4'>
                    <div className='bg-[rgb(51,51,51)] w-full h-[1px] mb-3'></div>

                    <div className='w-full flex flex-col md:flex-col lg:flex-row items-center justify-between'>
                        <div className='flex flex-col md:flex-col lg:flex-row items-center gap-6 mb-4'>
                            <div className='flex gap-2 items-center'>
                            <FcGlobe />
                            <select className="sm:w-fit md:w-fit lg:w-64 p-2 border border-black rounded-md overflow-auto max-h-40 bg-black text-white">
  <option value="AF">Afghanistan</option>
  <option value="AL">Albania</option>
  <option value="DZ">Algeria</option>
  <option value="AD">Andorra</option>
  <option value="AO">Angola</option>
  <option value="AR">Argentina</option>
  <option value="AM">Armenia</option>
  <option value="AU">Australia</option>
  <option value="AT">Austria</option>
  <option value="AZ">Azerbaijan</option>
  <option value="BS">Bahamas</option>
  <option value="BH">Bahrain</option>
  <option value="BD">Bangladesh</option>
  <option value="BB">Barbados</option>
  <option value="BY">Belarus</option>
  <option value="BE">Belgium</option>
  <option value="BZ">Belize</option>
  <option value="BJ">Benin</option>
  <option value="BT">Bhutan</option>
  <option value="BO">Bolivia</option>
  <option value="BA">Bosnia and Herzegovina</option>
  <option value="BW">Botswana</option>
  <option value="BR">Brazil</option>
  <option value="BN">Brunei</option>
  <option value="BG">Bulgaria</option>
  <option value="BF">Burkina Faso</option>
  <option value="BI">Burundi</option>
  <option value="CV">Cabo Verde</option>
  <option value="KH">Cambodia</option>
  <option value="CM">Cameroon</option>
  <option value="CA">Canada</option>
  <option value="CF">Central African Republic</option>
  <option value="TD">Chad</option>
  <option value="CL">Chile</option>
  <option value="CN">China</option>
  <option value="CO">Colombia</option>
  <option value="KM">Comoros</option>
  <option value="CG">Congo</option>
  <option value="CD">Congo, Democratic Republic of the</option>
  <option value="CR">Costa Rica</option>
  <option value="HR">Croatia</option>
  <option value="CU">Cuba</option>
  <option value="CY">Cyprus</option>
  <option value="CZ">Czech Republic</option>
  <option value="DK">Denmark</option>
  <option value="DJ">Djibouti</option>
  <option value="DM">Dominica</option>
  <option value="DO">Dominican Republic</option>
  <option value="EC">Ecuador</option>
  <option value="EG">Egypt</option>
  <option value="SV">El Salvador</option>
  <option value="GQ">Equatorial Guinea</option>
  <option value="ER">Eritrea</option>
  <option value="EE">Estonia</option>
  <option value="SZ">Eswatini</option>
  <option value="ET">Ethiopia</option>
  <option value="FJ">Fiji</option>
  <option value="FI">Finland</option>
  <option value="FR">France</option>
  <option value="GA">Gabon</option>
  <option value="GM">Gambia</option>
  <option value="GE">Georgia</option>
  <option value="DE">Germany</option>
  <option value="GH">Ghana</option>
  <option value="GR">Greece</option>
  <option value="GD">Grenada</option>
  <option value="GT">Guatemala</option>
  <option value="GN">Guinea</option>
  <option value="GW">Guinea-Bissau</option>
  <option value="GY">Guyana</option>
  <option value="HT">Haiti</option>
  <option value="HN">Honduras</option>
  <option value="HU">Hungary</option>
  <option value="IS">Iceland</option>
  <option value="IN">India</option>
  <option value="ID">Indonesia</option>
  <option value="IR">Iran</option>
  <option value="IQ">Iraq</option>
  <option value="IE">Ireland</option>
  <option value="IL">Israel</option>
  <option value="IT">Italy</option>
  <option value="JM">Jamaica</option>
  <option value="JP">Japan</option>
  <option value="JO">Jordan</option>
  <option value="KZ">Kazakhstan</option>
  <option value="KE">Kenya</option>
  <option value="KI">Kiribati</option>
  <option value="KP">Korea, North</option>
  <option value="KR">Korea, South</option>
  <option value="KW">Kuwait</option>
  <option value="KG">Kyrgyzstan</option>
  <option value="LA">Laos</option>
  <option value="LV">Latvia</option>
  <option value="LB">Lebanon</option>
  <option value="LS">Lesotho</option>
  <option value="LR">Liberia</option>
  <option value="LY">Libya</option>
  <option value="LI">Liechtenstein</option>
  <option value="LT">Lithuania</option>
  <option value="LU">Luxembourg</option>
  <option value="MG">Madagascar</option>
  <option value="MW">Malawi</option>
  <option value="MY">Malaysia</option>
  <option value="MV">Maldives</option>
  <option value="ML">Mali</option>
  <option value="MT">Malta</option>
  <option value="MH">Marshall Islands</option>
  <option value="MR">Mauritania</option>
  <option value="MU">Mauritius</option>
  <option value="MX">Mexico</option>
  <option value="FM">Micronesia</option>
  <option value="MD">Moldova</option>
  <option value="MC">Monaco</option>
  <option value="MN">Mongolia</option>
  <option value="ME">Montenegro</option>
  <option value="MA">Morocco</option>
  <option value="MZ">Mozambique</option>
  <option value="MM">Myanmar</option>
  <option value="NA">Namibia</option>
  <option value="NR">Nauru</option>
  <option value="NP">Nepal</option>
  <option value="NL">Netherlands</option>
  <option value="NZ">New Zealand</option>
  <option value="NI">Nicaragua</option>
  <option value="NE">Niger</option>
  <option value="NG" selected={true}>Nigeria</option>
  <option value="NO">Norway</option>
  <option value="OM">Oman</option>
  <option value="PK">Pakistan</option>
  <option value="PW">Palau</option>
  <option value="PA">Panama</option>
  <option value="PG">Papua New Guinea</option>
  <option value="PY">Paraguay</option>
  <option value="PE">Peru</option>
  <option value="PH">Philippines</option>
  <option value="PL">Poland</option>
  <option value="PT">Portugal</option>
  <option value="QA">Qatar</option>
  <option value="RO">Romania</option>
  <option value="RU">Russia</option>
  <option value="RW">Rwanda</option>
  <option value="KN">Saint Kitts and Nevis</option>
  <option value="LC">Saint Lucia</option>
  <option value="VC">Saint Vincent and the Grenadines</option>
  <option value="WS">Samoa</option>
  <option value="SM">San Marino</option>
  <option value="ST">Sao Tome and Principe</option>
  <option value="SA">Saudi Arabia</option>
  <option value="SN">Senegal</option>
  <option value="RS">Serbia</option>
  <option value="SC">Seychelles</option>
  <option value="SL">Sierra Leone</option>
  <option value="SG">Singapore</option>
  <option value="SK">Slovakia</option>
  <option value="SI">Slovenia</option>
  <option value="SB">Solomon Islands</option>
  <option value="SO">Somalia</option>
  <option value="ZA">South Africa</option>
  <option value="SS">South Sudan</option>
  <option value="ES">Spain</option>
  <option value="LK">Sri Lanka</option>
  <option value="SD">Sudan</option>
  <option value="Sw">Switzerland</option>
  </select>
                            </div>

                            <ul className='flex flex-col md:flex-row lg:flex-row gap-5 items-center justify-center text-white'>
                            <Link>
                                <li className='text-[16px] font-[400] text-[rgb(224,224,224)]'>
                                    Terms of Service
                                </li>
                                </Link>

                                

                                <Link>
                                <li className='text-[16px] font-[400] text-[rgb(224,224,224)]'>
                                    Privacy Policy
                                </li>
                                </Link>

                                <Link>
                                <li className='text-[16px] font-[400] text-[rgb(224,224,224)]'>
                                    Sitemap
                                </li>
                                </Link>
                                
                                <Link>
                                <li className='text-[16px] font-[400] text-[rgb(224,224,224)]'>
                                    Privacy Choices
                                </li>
                                </Link>
                            </ul>
                        </div>

                        <ul className='flex items-center gap-2 md:gap-4 lg:gap-5'>
                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <FaFacebookF className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <FaXTwitter className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <IoLogoYoutube className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <IoLogoYoutube className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <FaInstagram className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <FaTiktok className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <FaLinkedinIn className='text-black' />
                            </li>

                            <li className='bg-white py-3 px-3 rounded-[50%] text-center'>
                                <FaPinterestP className='text-black' />
                            </li>
                        </ul>
                    </div>
                </div>
                

            </div>
        </div>
    )
}