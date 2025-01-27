import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import { signUpUser } from "../services/service";
import InputField from "../components/InputField";

const SignupPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roles, setRoles] = useState({ provider: false, patient: false });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRoleChange = (e) => {
    const { name, checked } = e.target;
    setRoles((prevRoles) => ({
      ...prevRoles,
      [name]: checked,
    }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    if (!roles.provider && !roles.patient) {
      setError("Please select at least one role.");
      setLoading(false);
      return;
    }

    const userData = {
      name,
      email,
      password,
      roles: Object.keys(roles).filter((role) => roles[role]),
    };

    try {
      const response = await signUpUser(userData);
      console.log("Signup success:", response);
      alert("Signup successful!");
    } catch (error) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-center mb-6">Sign Up</h2>

        <form onSubmit={handleSignup}>
          {/* Name Input */}
          <InputField
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            name="name"
          />

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

          {/* Role Checkboxes */}
          <div className="mb-4">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="provider"
                name="provider"
                checked={roles.provider}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="provider">Provider</label>
            </div>
            <div className="flex items-center mt-2">
              <input
                type="checkbox"
                id="patient"
                name="patient"
                checked={roles.patient}
                onChange={handleRoleChange}
                className="mr-2"
              />
              <label htmlFor="patient">Patient</label>
            </div>
          </div>

          {/* Show error message if exists */}
          {error && (
            <p className="text-red-500 text-sm text-center mt-2">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
            disabled={loading}
          >
            {loading ? "Signing up..." : "Sign Up"}
          </button>
        </form>

        {/* Link to Login Page */}
        <p className="text-center mt-4 text-sm">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline transition duration-200"
          >
            Log in here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignupPage;
