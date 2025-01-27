//
import React from 'react';
import WelcomeBanner from '../components/WelcomeBanner';
import HamburgerMenu from '../components/HamburgerMenu';
import { ThemeProvider } from '../contexts/ThemeContext';
import PatientTable from '../components/PatientTableComponent';

const Home = () => {
  const patients = [
    {
      name: 'Marjita Chakraborty',
      disease: 'Hypertension',
      bp: '120/80',
      status: 'Stable',
      sugar: 'Normal',
    },
    {
      name: 'Jane Smith',
      disease: 'Diabetes',
      bp: '140/90',
      status: 'Needs Attention',
      sugar: 'High',
    },
    // Add more patient data as needed
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen flex flex-col items-center">
        <WelcomeBanner username="Dr. Marjita" />
        <HamburgerMenu />
        <div className="p-4 w-full">
          <PatientTable patients={patients} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default Home;
