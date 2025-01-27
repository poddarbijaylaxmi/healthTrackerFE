import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
// import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <ThemeProvider>
      <Home />
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/" element={<LoginPage />} />
          {/* <Route path="/dashboard/:id" element={<Dashboard />} /> */}
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default App;
