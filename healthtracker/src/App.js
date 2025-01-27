import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import SignupPage from "./pages/SignupPage";
import PatientDashboard from "./pages/PatientDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/ProviderDashboard" element={<ProviderDashboard />} />
          <Route path="/" element={<LoginPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
