import React from "react";
import WelcomeBanner from "../components/WelcomeBanner";
import HamburgerMenu from "../components/HamburgerMenu";
import { ThemeProvider } from "../contexts/ThemeContext";
import PatientTable from "../components/PatientTableComponent";

const Home = () => {
  const patients = [
    {
      name: "Marjita Chakraborty",
      disease: "Hypertension",
      bp: "120/80",
      status: "Stable",
      sugar: "Normal",
    },
    {
      name: "Jane Smith",
      disease: "Diabetes",
      bp: "140/90",
      status: "Needs Attention",
      sugar: "High",
    },
    // Add more patient data as needed
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center bg-blue-100">
        <div className="w-full flex justify-between items-center p-4 bg-blue-500 text-white">
          <HamburgerMenu />
          <WelcomeBanner username="Dr. Marjita" />
        </div>
        <div className="p-4 w-full max-w-4xl">
          <PatientTable patients={patients} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
