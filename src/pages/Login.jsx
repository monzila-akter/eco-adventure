import React from "react";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-lime-800 mb-6">
          Log in to Your Account
        </h1>

        {/* Login Form */}
        <form>
          {/* Email Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent"
            />
          </div>

          {/* Password Field */}
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent"
            />
          </div>

          {/* Forget Password */}
          <div className="mb-4">
            <a
              href="/forget-password"
              className="text-sm text-lime-800 hover:underline"
            >
              Forget Password?
            </a>
          </div>

          {/* Login Button */}
          <div>
            <button
              type="submit"
              className="w-full text-lg font-semibold bg-lime-800 text-white py-2 px-4 rounded-lg hover:bg-lime-900 "
            >
              Log In
            </button>
          </div>
          <p className="mt-4">Don’t have an account? Please <Link to="/register" className="text-lg font-medium text-blue-600">Register</Link></p>
        </form>
         {/* Separator */}
         <div className="flex items-center justify-center mb-6 mt-6">
          <div className="border-t-2 border-gray-300 w-full"></div>
          <p className="text-sm font-medium text-gray-500 mx-4">OR</p>
          <div className="border-t-2 border-gray-300 w-full"></div>
        </div>

        {/* Google Login Button */}
        <div className="mb-5">
          <button
            
            className="w-full flex items-center justify-center bg-white border-2 border-lime-800 text-lg font-semibold text-lime-700 py-2 px-4 rounded-lg hover:bg-gray-100 "
          >
            <FaGoogle className="mr-2"></FaGoogle>
            Log in with Google
          </button>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
