import React from "react";
import { useParams } from "react-router-dom";
// import HamburgerMenu from "./HamburgerMenu";
import { ThemeContext } from "../contexts/ThemeContext";
import patientData from "../data/patientData"; // Import the mock data

const Dashboard = () => {
  const { id } = useParams();
  const { theme } = React.useContext(ThemeContext);

  const patient = patientData[id];

  return (
    <div className="min-h-screen flex">
      <div className="fixed top-0 left-0 h-full bg-white shadow-md">
        {/* <HamburgerMenu /> */}
      </div>
      <div className="flex-1 ml-16 p-4">
        <div className={`${theme} text-white p-4`}>
          Patient Dashboard: {patient.name}
        </div>
        <div className="mt-4">
          <div className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-xl font-bold">Heart Rate</h2>
            {/* Replace with actual graph component */}
            <div className="h-32 bg-gray-200 mt-2">Graph Placeholder</div>
          </div>
          <div className="flex mt-4">
            <div className="bg-white p-4 shadow-md rounded-md mr-4 flex-1">
              <h2 className="text-xl font-bold">Body Temperature</h2>
              <p>{patient.temperature}</p>
            </div>
            <div className="bg-white p-4 shadow-md rounded-md flex-1">
              <h2 className="text-xl font-bold">Body Glucose Level</h2>
              <p>{patient.glucose}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
