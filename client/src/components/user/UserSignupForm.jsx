import React, { useState } from 'react';
import image from "../../assets/573528608fc1c81c6cd3a4700aba3196.jpeg";
import { handleSignup } from '../../api/apis';
import { Link, useNavigate } from "react-router-dom";

const UserSignupForm = () => {
  // State variables to store form field values
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize the navigate function

  // Function to handle form submission
  const handleSubmit = async(e) => {
    e.preventDefault();
    // Here you can handle form submission, e.g., send data to backend
    console.log("Form submitted:", { fullName, email, password });

    try {
      const data = await handleSignup({ fullName, email, password });
      console.log("Signup successful:", data);
      // If signup is successful, navigate to the login page
      navigate('/login'); // Navigate to the login page
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className='flex justify-center items-center'>
      <img className='w-[500px] h-[500px] mt-5 rounded-lg ' src={image} alt="" />
      <div>
        <div className='ml-48 w-96 mr-40'>
          <h2 className='text-2xl font-bold'>Create an account</h2>
          <h4 className='text-sm'>Enter your details below</h4>
          <form className='mt-5' onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                required
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm"
              />
            </div>
            <div className='mt-3'>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
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
            <div className='mt-3'>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
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
            <div className='mt-5'>
              <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-400 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                Create Account
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default UserSignupForm;
