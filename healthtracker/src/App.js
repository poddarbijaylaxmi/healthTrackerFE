//
import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import WelcomeBanner from './components/WelcomeBanner';
import PatientTable from './components/PatientTableComponent';

const App = () => {
  const patients = [
    {
      name: 'John Doe',
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
        <WelcomeBanner username="John Doe" />
        <div className="p-4 w-full">
          <PatientTable patients={patients} />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
