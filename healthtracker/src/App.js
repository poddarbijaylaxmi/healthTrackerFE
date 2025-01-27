import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import SignupPage from "./pages/SignupPage";
import PatientDashboard from "./pages/PatientDashboard";
import ProviderDashboard from "./pages/ProviderDashboard";
import Metrics from "./components/Metrics";
import Messages from "./components/Messages";
import Profile from "./components/Profile";
import Logout from "./components/Logout";
import Home from "./pages/ProviderDashboard";

const App = () => {
  return (
    <ThemeProvider>
      {/* <Home /> */}
      <ProviderDashboard />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/PatientDashboard" element={<PatientDashboard />} />
          <Route path="/ProviderDashboard" element={<ProviderDashboard />} />
          <Route path="/" element={<LoginPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/metrics" element={<Metrics />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
