import image from '../assets/10900023.png'
import { FaMeta } from "react-icons/fa6";

export default function Instaload(){
    return(
        <div className="loader-container">
            <img src={image} alt='logo' className='w-[7rem]' />
            <div className='flex flex-col items-center justify-center mt-[10rem] gap-4'>
                <p>from</p>
            <span className=''>
                <FaMeta className='inline text-2xl'/> Meta
            </span>
            </div>
        </div>
    )
}