import React, { useEffect, useRef, useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { useLocation } from "react-router-dom";
import toast from "react-hot-toast";
import auth from "../components/firebase_init";

const ForgetPassword = () => {
  const emailRef = useRef();
  const location = useLocation();
  const [email, setEmail] = useState("");

 
  useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);

  const handleResetPassword = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;

    if (!email) {
      toast.warning("Please provide a valid email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent! Redirecting to Gmail...");
        setTimeout(() => {
          window.open("https://mail.google.com", "_blank");
        }, 2000);
      })
      .catch(() => {
        toast.error("Failed to send reset email. Please try again.");
      });
  };

  return (
    <div className="py-16 px-5 md:px-0 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-lime-800 mb-6">
          Reset Your Password
        </h1>
        <form onSubmit={handleResetPassword}>
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
              ref={emailRef}
              defaultValue={email}
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800 focus:border-transparent"
              required
            />
          </div>

          {/* Reset Password Button */}
          <div>
            <button
              type="submit"
              className="w-full text-lg font-semibold bg-lime-800 text-white py-2 px-4 rounded-lg hover:bg-lime-900"
            >
              Reset Password
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgetPassword;
