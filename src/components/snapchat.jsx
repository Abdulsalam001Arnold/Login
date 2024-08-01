import { FaSnapchat } from "react-icons/fa6";
import React, { useState } from 'react';
import { Link } from "react-router-dom";
import LinkList from './Linklist';


export default function Snapchat(){
    const [usePhoneNumber, setUsePhoneNumber] = useState(false);

    const toggleInput = () => {
      setUsePhoneNumber((prevUsePhoneNumber) => !prevUsePhoneNumber);
    };
  
    const [openSections, setOpenSections] = useState({});

    const toggleSection = (index) => {
      setOpenSections((prevOpenSections) => ({
        ...prevOpenSections,
        [index]: !prevOpenSections[index],
      }));
    };

  const sections = [
    {
      title: 'Company',
      links: [
        { text: 'Snap Inc.', href: '#' },
        { text: 'Careers', href: '#' },
        { text: 'News', href: '#' },
      ],
    },
    {
      title: 'Community',
      links: [
        { text: 'Support', href: '#' },
        { text: 'Community Guidelines', href: '#' },
        { text: 'Safety Center', href: '#' },
      ],
    },
    {
      title: 'Advertising',
      links: [
        { text: 'Buy Ads', href: '#' },
        { text: 'Advertising Policies', href: '#' },
        { text: 'Political Ads Library', href: '#' },
        { text: 'Brand Guidelines', href: '#' },
        { text: 'Promotions Rules', href: '#' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { text: 'Privacy Center', href: '#' },
        { text: 'Your Privacy Choices', href: '#' },
        { text: 'Cookie Policy', href: '#' },
        { text: 'Report Infringement', href: '#' },
        { text: 'Custom Creative Tools Terms', href: '#' },
        { text: 'Community Geofilter Terms', href: '#' },
        { text: 'Lens Studio Terms', href: '#' },
      ],
    },
  ];
    return(
        <div className="w-full flex flex-col items-center justify-center min-h-screen bg-[rgb(242,242,242)]">

        <div className="flex flex-col w-fit py-6 items-center justify-center bg-white rounded-md shadow-sm px-4 mt-3">
            <div className="flex flex-col items-center justify-center mt-2 gap-4">
                <FaSnapchat className="text-6xl" />

                <h1 className="font-semibold text-2xl">
                Log in to Snapchat
                </h1>
    </div>

    <form className="mt-2 flex flex-col items-center justify-center gap-4">
      <div>
        <label htmlFor={usePhoneNumber ? "phoneNumber" : "username"} className="block text-xs text-gray-500 font-bold">
          {usePhoneNumber ? "Phone Number" : "Username or Email"}
        </label>

        <select className={`sm:w-full md:w-full lg:w-64 p-2 border border-gray-300 rounded-md overflow-auto max-h-40 ${usePhoneNumber ? "block" : "hidden"}`}>
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
  <option value="+234">Nigeria (+234)</option>
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
          type={usePhoneNumber ? "tel" : "text"}
          id={usePhoneNumber ? "phoneNumber" : "username"}
          className="w-full px-7 py-3 mt-2 text-gray-700 bg-[rgb(242,242,242)] border-b rounded-md focus:border-b-blue-700 focus:outline-none"
        />
      </div>

      <p 
        className="mt-2 text-[12px] font-semibold text-[rgb(15,173,255)] cursor-pointer"
        onClick={toggleInput}
      >
        {usePhoneNumber ? "Use username or email instead" : "Use phone number instead"}
      </p>

      <button className="bg-[rgb(15,173,255)] text-xs text-white px-6 py-3 next">
        Next
      </button>
    </form>
        </div>

        <span className="mt-3">
            New to Snapchat?
            <a href="/" className="font-bold">
                Signup
            </a>
        </span>


        <div className="mt-5 bg-white flex flex-col py-9 px-6 w-full">
        <div className='grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 items-start justify-center px-0 md:px-0 lg:px-5'>
        {sections.map((section, index) => (
        <LinkList
          key={index}
          title={section.title}
          links={section.links}
          isOpen={!!openSections[index]}
          toggleList={() => toggleSection(index)}
        />
      ))}
        </div>

        <div className="flex flex-col mt-3">
            <label>
                Languages
            </label>
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
        </div>
        </div>

        <div className="bg-[rgb(38,38,38)] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-start px-4 py-3">
            <h3 className="text-gray-400">
                Privacy Policy
            </h3>

            <h3 className="text-gray-400">
                Terms of Service
            </h3>
        </div>
        </div>


    )
}