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

// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// const HamburgerMenu = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <div className="relative">
//       <button onClick={() => setIsOpen(!isOpen)} className="p-4 text-white">
//         ☰
//       </button>
//       {isOpen && (
//         <div className="fixed top-0 left-0 h-full bg-black text-white shadow-md w-64">
//           <div className="p-4 text-xl font-bold border-b border-gray-700">
//             Bayer's Health
//           </div>
//           <ul className="mt-4">
//             <li className="p-4 hover:bg-gray-700">
//               <Link to="/">Dashboard</Link>
//             </li>
//             <li className="p-4 hover:bg-gray-700">
//               <Link to="/profile">My Profile</Link>
//             </li>
//             <li className="p-4 hover:bg-gray-700">
//               <Link to="/metrics">Health Metrics</Link>
//             </li>
//             <li className="p-4 hover:bg-gray-700">
//               <Link to="/messages">Messages</Link>
//             </li>
//             <li className="p-4 hover:bg-gray-700">
//               <Link to="/logout">Logout</Link>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default HamburgerMenu;
