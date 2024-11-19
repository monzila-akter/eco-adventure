import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";


const AdventureCard = ({ adventure }) => {
  const { title, image, ecoFriendlyFeatures, id } = adventure;

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true, 
    });
  }, []);

  return (
    <div
    data-aos="flip-right" // AOS animation type
    data-aos-delay="100" // Delay before the animation starts
     className="card bg-white shadow-md p-6 border transition hover:scale-105 rounded-lg">
      {/* Adventure Image */}
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded-t-lg mb-4"
      />

      {/* Adventure Title */}
      <h2 className="text-lg font-bold mb-2">{title}</h2>

      {/* Eco-Friendly Features */}
      <ul className="text-sm text-gray-600 mb-4">
        {ecoFriendlyFeatures.map((feature, index) => (
          <li key={index} className="list-disc list-inside">
            {feature}
          </li>
        ))}
      </ul>

      {/* Explore Now Button */}
      <Link to={`/details/${id}`}><button className="btn btn-primary w-full bg-lime-800 hover:bg-green-700 text-white text-xl">
        Explore Now
      </button></Link>
    </div>
  );
};

export default AdventureCard;
