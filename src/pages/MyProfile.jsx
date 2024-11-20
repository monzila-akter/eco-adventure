import React, { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
import { Link } from "react-router-dom";

const MyProfile = () => {
  const { user } = useContext(AuthContext); 

  return (
    <div className="py-16 px-5 md:px-0 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-lime-800 mb-6">
          Welcome, {user?.displayName || "User"}!
        </h1>

        <div className="text-center">
          {/* User Profile Image */}
          {user?.photoURL && (
            <img
              src={user.photoURL}
              alt="Profile"
              className="w-32 h-32 mx-auto rounded-full mb-4 object-cover border-4 border-lime-800"
            />
          )}

          {/* User Information */}
          <p className="text-lg font-medium text-gray-700">Name: {user?.displayName}</p>
          <p className="text-lg font-medium text-gray-700">Email: {user?.email}</p>

          {/* Update Profile Button */}
          <Link
            to="/updateProfile"
            className="mt-6 inline-block bg-lime-800 text-white px-4 py-2 rounded-lg hover:bg-lime-900 text-lg font-semibold"
          >
            Update Profile
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
