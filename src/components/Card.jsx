import React from "react";

const Card = ({ product, onView }) => {
  return (
    <div className="bg-white rounded-lg md:w-[26vw] w-[40vw] md:h-90 h-70 md:m-4 m-2 flex justify-center items-center flex-col md:gap-5 gap-1.5 shadow-md hover:shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition duration-300 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="md:w-30 h-20 md:h-30 w-20 object-cover rounded-md"
      />

      <div>
        <h3 className="md:mt-3 mt-1 md:text-lg text-md font-semibold">{product.name}</h3>
        <p className="md:mt-1 mt-1 text-gray-600 md:text-sm text-xs">{product.description}</p>
        <p className="md:mt-2 mt-1 font-bold text-gray-800">₹{product.price}</p>
      </div>

      <button
        className="md:mt-3 mt-1 w-full bg-zinc-700 text-sm text-white py-2 rounded hover:bg-zinc-950 transition duration-300"
        onClick={onView} 
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
