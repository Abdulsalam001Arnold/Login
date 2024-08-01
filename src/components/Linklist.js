import React from 'react';
import { FaAngleRight, FaAngleDown } from 'react-icons/fa';

function LinkList({ title, links, isOpen, toggleList }) {

  return (
    <div className="">
      {/* Title Section */}
      <div className="flex md:flex lg:flex-none items-center gap-2">
        <span className="text-xl lg:hidden">
          {isOpen ? <FaAngleDown /> : <FaAngleRight />}
        </span>
        <h2
          className="text-sm text-gray-700 font-bold cursor-pointer lg:cursor-default"
          onClick={toggleList}
        >
          {title}
        </h2>
      </div>
      
      {/* Link List */}
      <ul className={`mt-2 transition-max-height duration-500 ease-in-out overflow-hidden ${isOpen ? 'max-h-40' : 'max-h-0'} lg:max-h-full lg:block`}>
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-gray-500 text-sm hover:text-gray-800 transition duration-150 ease-in-out"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LinkList;


