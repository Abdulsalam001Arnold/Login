

import { GiCancel } from 'react-icons/gi';
import React from 'react';

const Modal = ({ show, onClose, children }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-70 shadow-md">
      <div className="bg-white p-6 rounded-lg relative w-11/12 md:w-1/2 lg:w-1/3">
        <button 
          className="absolute top-2 right-2 text-gray-600 hover:text-gray-900 text-xl font-bold"
          onClick={onClose}
        >
          <GiCancel/>
        </button>
        <div className="mt-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
