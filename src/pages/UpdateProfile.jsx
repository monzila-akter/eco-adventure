import { AuthContext } from "../provider/AuthProvider";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useContext } from "react";

const UpdateProfile = () => {
  const { user, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleUpdateProfile = (e) => {
    e.preventDefault();
    
    const name = e.target.name.value;
    const photoURL = e.target.photoURL.value;
   
      if (!user) {
        return toast.error("No authenticated user found.");
      }

       updateUserProfile({
        displayName: name,
        photoURL: photoURL,
      })
      .then(()=>{
        toast.success("Profile updated successfully!");
        navigate("/myProfile"); 
      })
      .catch(error => {
        console.log(error.message)
        toast.error("Failed to update profile. Please try again.")
      })
  };

  return (
    <div className="py-16 px-5 md:px-0 flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-lime-800 mb-6">
          Update Profile
        </h1>

        {/* Update Profile Form */}
        <form onSubmit={handleUpdateProfile}>
          <div className="mb-4">
            <label
              htmlFor="name"
              className="block text-gray-700 font-medium mb-2"
            >
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800"
              required
            />
          </div>

          <div className="mb-4">
            <label
              htmlFor="photoURL"
              className="block text-gray-700 font-medium mb-2"
            >
              Photo URL
            </label>
            <input
              type="url"
              name="photoURL"
              placeholder="Enter photo URL"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-lime-800"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full text-lg font-semibold bg-lime-800 text-white py-2 px-4 rounded-lg hover:bg-lime-900"
          >
            Update Information
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;
