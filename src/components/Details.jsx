import { useState } from "react";
import { useLoaderData } from "react-router-dom";


const Details = () => {

    const [showModal, setShowModal] = useState(false);

    const singleData = useLoaderData();
    
   const {title, image, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions} = singleData;

    const handleTalkWithExpert = () => {
        const currentTime = new Date();
        const currentHours = currentTime.getHours();
        const currentMinutes = currentTime.getMinutes();

        const startTime = 10;
        const endTime = 20;

        if(currentHours >= startTime && currentHours < endTime){
            window.open("https://meet.google.com", "_blank");
        }else{
            setShowModal(true);
        }
    }

    return (
        <div className="container mx-auto py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 h-full md:h-[400px] object-cover rounded-lg shadow-lg transition hover:scale-105"
        />
        {/* Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-lime-800 mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">{shortDescription}</p>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Category: <span className="font-normal">{category}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Duration: <span className="font-normal">{duration}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Adventure Level: <span className="font-normal">{adventureLevel}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800 mb-2">
            Cost: <span className="font-normal">${cost}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Booking Availability:{" "}
            <span
              className={`font-normal ${
                bookingAvailability ? "text-green-600" : "text-red-600"
              }`}
            >
              {bookingAvailability ? "Available" : "Unavailable"}
            </span>
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center">
       <div className="w-full">
         {/* Included Items Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-lime-800 mb-4">Included Items</h2>
        <ul className="list-disc list-inside text-gray-600">
          {includedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Eco-Friendly Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-lime-800 mb-4">
          Eco-Friendly Features
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {ecoFriendlyFeatures.map((feature, index) => (
            <li key={index}>{feature}</li>
          ))}
        </ul>
      </div>

      {/* Special Instructions Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-lime-800 mb-4">
          Special Instructions
        </h2>
        <ul className="list-disc list-inside text-gray-600">
          {specialInstructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>

      {/* Max Group Size */}
      <div className="mt-6">
        <p className="text-lg font-semibold text-lime-800">
          Maximum Group Size:{" "}
          <span className="font-normal">{maxGroupSize}</span>
        </p>
      </div>
       </div>
      <div className="hidden lg:flex w-full">
        <img className=" " src="https://i.ibb.co.com/YfhB9qJ/Capture.png" alt="" />
      </div>
      </div>
      {/* Talk with Expert Button */}
      <div className="mt-12 text-center">
        <button 
        onClick={handleTalkWithExpert}
         className="px-8 py-3 bg-lime-800 text-white rounded-full hover:bg-lime-900 text-lg font-semibold">
          Talk with Expert
        </button>
      </div>
       {/* Modal */}
       {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg text-center">Consultation Time</h3>
            <p className="py-4 text-center">
              Our experts are available from <strong>10:00 AM</strong> to{" "}
              <strong>8:00 PM</strong>. Please try again during these hours.
            </p>
            <div className="modal-action">
              <button
                onClick={() => setShowModal(false)}
                className="btn mx-auto block px-8 text-lg rounded-full bg-lime-800 text-white hover:bg-lime-900"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
    );
};

export default Details;