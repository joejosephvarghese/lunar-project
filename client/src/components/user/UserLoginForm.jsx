import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate from React Router
import image from "../../assets/9017fd34788226a7e5d822d87fe4a86b.jpeg";
import { handleAuthentication } from "../../api/apis";
import { Toaster, toast } from "sonner";
const UserLoginForm = () => {
  // State variables to store form field values
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); 

  // Function to handle form submission
  const notify = (msg, type) =>
    type === "error" ? toast.error(msg) : toast.success(msg);


  const handleSubmit = async (e) => {
    e.preventDefault();
   
    console.log("Form submitted:", { email, password });
    try {
      const { token } = await handleAuthentication({ email, password });
      localStorage.setItem("token", token);
      notify("Login success", "success");
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      notify(error.message, "error");
    }
  };

  return (
    <div className="flex justify-center items-center">
      <img
        className="w-[500px] h-[500px] mt-5 rounded-lg "
        src={image}
        alt=""
      />
      <div>
        <div className="ml-48 w-96 mr-40">
          <h2 className="text-2xl font-bold">Log in to Bhakshanagal</h2>
          <h4 className="text-sm">Enter your details below</h4>
          <form className="mt-5" onSubmit={handleSubmit}>
            <div className="mt-3">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              />
            </div>
            <div className="mt-3">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              />
            </div>
            <div className="mt-6">
              <Link
                to="/forgot-password"
                className="text-sm text-red-600 hover:underline ml-64  "
              >
                Forgot Password?
              </Link>
            </div>
            <div className="mt-3">
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
      <Toaster richColors />
    </div>
  );
};

export default UserLoginForm;
