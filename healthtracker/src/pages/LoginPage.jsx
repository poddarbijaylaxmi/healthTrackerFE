import React, { useState } from "react";
import InputField from "../components/InputField";
import { loginUser } from "../services/service";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    navigate("/providerdashboard");
    e.preventDefault();
    setLoading(true);
    setError(null);

    const userData = { email, password };

    try {
      const response = await loginUser(userData);
      console.log("Login success:", response);

      // Redirect based on user role
      if (response.role === "patient") {
        navigate("/patientdashboard");
      } else if (response.role === "provider") {
        navigate("/providerdashboard");
      }

      alert("Login successful!");
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    } finally {
      setLoading(false); // Stop loading once the request is complete
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>

        <form onSubmit={handleLogin}>
          {/* Email Input */}
          <InputField
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
          />

          {/* Password Input */}
          <InputField
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
          />

          {/* Show error message if exists */}
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={loading} // Disable button while loading
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        {/* Signup Link */}
        <div className="text-center mt-4">
          <p className="text-sm">
            New User?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="text-blue-500 underline hover:text-blue-700"
            >
              Click for Signup
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
