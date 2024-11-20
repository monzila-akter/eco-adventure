import React, { useContext, useState } from "react";
import {FaEye,  FaEyeSlash, FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    
    const {createNewUser, setUser, updateUserProfile, googleLogin} = useContext(AuthContext);

    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        setError("");
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        // console.log(name, image, email, password)

        if(password.length < 6){
            return setError("Password must contain at least 6 character!")
        }else if(!/[A-Z]/.test(password)){
            return setError("Password must contain at least one uppercase letter.")
        }else if(!/[a-z]/.test(password)){
            return setError("Password must contain at least one lowercase letter.")
        }

        createNewUser(email, password)
        .then(result => {
            // console.log(result.user)
            setUser(result.user)
            updateUserProfile({displayName: name, photoURL: image})
            .then(()=>{navigate("/")})
            .catch(error => {return toast.error(error.message)})
            navigate("/")
            toast.success("Registered successfully")
            
        })
        .catch(err => {
            // console.log(err.message)
            return toast.error(err.message)
        })
    }

    const handleGoogleLogin = () => {
        googleLogin()
        .then(result => {
            setUser(result.user)
            navigate("/")
        })
        
    }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-14">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        {/* Title */}
        <h1 className="text-2xl font-bold text-center text-lime-800 mb-6">
          Register to get started
        </h1>

        {/* Login Form */}
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent"
              required
            />
          </div>

          {/* image Field */}
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-gray-700 font-medium mb-2"
            >
              Image
            </label>
            <input
              type="text"
              name="image"
              placeholder="photo url"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent"
              required
            />
          </div>

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
              name="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent"
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 relative">
            <label
              htmlFor="password"
              className="block text-gray-700 font-medium mb-2"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Enter your password"
              className={`w-full px-4 py-2 ${error ? "border-red-500 focus:ring-red-500" : ""} border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent`}
              required
            />
            <button
            onClick={() => setShowPassword(!showPassword)}
             className="absolute right-6 top-[45px] text-gray-500 text-lg">
                {
                showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                 }
             </button>
             {
                error ? <p className="text-sm text-red-500 mt-4">{error}</p> : ""
             }
          </div>

          {/* Login Button */}
          <div className="mt-6">
            <button
              type="submit"
              className="w-full text-lg font-semibold bg-lime-800 text-white py-2 px-4 rounded-lg hover:bg-lime-900 "
            >
              Register
            </button>
          </div>
          <p className="mt-4">Already have an account? Please <Link to="/login" className="text-lg font-medium text-blue-600">Login</Link></p>
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
            onClick={handleGoogleLogin}
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

export default Register;
