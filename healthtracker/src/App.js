import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "./contexts/ThemeContext";
// import Dashboard from "./pages/Dashboard";
import SignupPage from "./pages/SignupPage";
import PatientDashboad from "./pages/PatientDashboad";

const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/PatientDashboad" element={<PatientDashboad />} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/dashboard/:id" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
