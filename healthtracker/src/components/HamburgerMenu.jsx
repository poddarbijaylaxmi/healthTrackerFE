import React, { useState } from 'react';

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-4">
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-white shadow-md rounded-md w-48">
          <ul>
            <li className="p-2 hover:bg-gray-200">Dashboard</li>
            <li className="p-2 hover:bg-gray-200">My Profile</li>
            <li className="p-2 hover:bg-gray-200">Health Insights</li>
            <li className="p-2 hover:bg-gray-200">Messages</li>
            <li className="p-2 hover:bg-gray-200">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
