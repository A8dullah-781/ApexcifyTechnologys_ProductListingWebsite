import React from "react";

const Card = ({ product, onView }) => {
  return (
    <div className="bg-white rounded-lg w-[20vw] h-100 m-4 flex justify-center items-center flex-col gap-5 shadow-md hover:shadow-[0_15px_30px_rgba(0,0,0,0.35)] transition duration-300 p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-30 h-30 object-cover rounded-md"
      />

      <div>
        <h3 className="mt-3 text-lg font-semibold">{product.name}</h3>
        <p className="mt-1 text-gray-600 text-sm">{product.description}</p>
        <p className="mt-2 font-bold text-gray-800">₹{product.price}</p>
      </div>

      <button
        className="mt-3 w-full bg-zinc-700 text-white py-2 rounded hover:bg-zinc-950 transition duration-300"
        onClick={onView} 
      >
        View Details
      </button>
    </div>
  );
};

export default Card;
