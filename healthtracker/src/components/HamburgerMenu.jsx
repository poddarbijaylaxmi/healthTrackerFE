import React, { useState } from "react";

const HamburgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-white">
        ☰
      </button>
      {isOpen && (
        <div className="absolute top-12 left-0 bg-black text-white shadow-md rounded-md w-48">
          <ul>
            <li className="p-2 hover:bg-gray-700">Dashboard</li>
            <li className="p-2 hover:bg-gray-700">My Profile</li>
            <li className="p-2 hover:bg-gray-700">Health Insights</li>
            <li className="p-2 hover:bg-gray-700">Messages</li>
            <li className="p-2 hover:bg-gray-700">Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default HamburgerMenu;
