import { useLoaderData } from "react-router-dom";


const Details = () => {

    const singleData = useLoaderData();
    
   const {title, image, category, shortDescription, cost, bookingAvailability, location, duration, adventureLevel, includedItems, ecoFriendlyFeatures, maxGroupSize, specialInstructions} = singleData;

    

    return (
        <div className="container mx-auto py-12 px-4 md:px-8">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full md:w-1/2 rounded-lg shadow-lg"
        />
        {/* Details */}
        <div className="w-full md:w-1/2">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">{title}</h1>
          <p className="text-gray-600 mb-6">{shortDescription}</p>
          <p className="text-lg font-semibold text-gray-800">
            Location: <span className="font-normal">{location}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Duration: <span className="font-normal">{duration}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
            Adventure Level: <span className="font-normal">{adventureLevel}</span>
          </p>
          <p className="text-lg font-semibold text-gray-800">
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

      {/* Included Items Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Included Items</h2>
        <ul className="list-disc list-inside text-gray-600">
          {includedItems.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* Eco-Friendly Features Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
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
        <p className="text-lg font-semibold text-gray-800">
          Maximum Group Size:{" "}
          <span className="font-normal">{maxGroupSize}</span>
        </p>
      </div>

      {/* Talk with Expert Button */}
      <div className="mt-12 text-center">
        <button className="px-8 py-3 bg-lime-800 text-white rounded-full hover:bg-lime-900">
          Talk with Expert
        </button>
      </div>
    </div>
    );
};

export default Details;