import React, { useState } from "react";
import Card from "./Card";
import { products } from "../../constants/constants";
import Navbar from "./Navbar";
import { useRef, useEffect } from "react";
import gsap from "gsap";

const Products = () => {
  const [search, setSearch] = useState("");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const modalRef = useRef(null);

  const filterProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    if (modalRef.current) {
      gsap.fromTo(
        modalRef.current,
        { opacity: 0, x: 50, scale: 0.95 },
        { opacity: 1, x: 0, scale: 1, duration: 0.4, ease: "power3.out" }
      );
    }
  }, [selectedIndex]);

  return (
    <div>
      <Navbar onSearch={setSearch} />

      <div
        id="products"
        className="bg-[#EAEFEE] mt-[16vh] justify-center px-5 flex flex-col items-center min-h-[80vh] w-[97vw] mb-4 rounded-4xl mx-4"
      >
        <div className="text-5xl p-8 font-bold uppercase">
          Gear Up Your Life
        </div>

        <div className="flex">
          <div className="flex justify-center items-center flex-wrap">
            {filterProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                onView={() => {
                  setSelectedProduct(product);
                  setIsModalOpen(true);
                }}
              />
            ))}

            {filterProducts.length === 0 && (
              <p className="text-xl font-semibold py-10">No products found</p>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedProduct && (
        <div 
        
        className="fixed inset-0 bg-black/35 bg-opacity-50 flex justify-center items-center z-50">
          {/* LEFT ARROW */}
          <button
            className="absolute left-10 text-white text-4xl"
            onClick={() => {
              const newIndex =
                (selectedIndex - 1 + filterProducts.length) %
                filterProducts.length;
              setSelectedIndex(newIndex);
              setSelectedProduct(filterProducts[newIndex]);
            }}
          >
            ‹
          </button>

          {/* MAIN MODAL */}
          <div ref={modalRef} className="bg-white rounded-lg p-6 w-96 relative">
            <button
              className="absolute top-2 right-2 text-gray-500 text-5xl font-bold"
              onClick={() => setIsModalOpen(false)}
            >
              &times;
            </button>

            <div className="flex justify-center items-center">
              <img
                src={selectedProduct.image}
                alt={selectedProduct.name}
                className="w-40 h-40 object-cover rounded-md"
              />
            </div>

            <h2 className="mt-3 text-xl font-bold">{selectedProduct.name}</h2>
            <p className="text-gray-600 mt-1">{selectedProduct.description}</p>
            <p className="font-bold mt-2">₹{selectedProduct.price}</p>

            <button className="mt-3 w-full bg-green-500 text-white py-2 rounded hover:bg-green-600">
              Add to Cart
            </button>
          </div>

          {/* RIGHT ARROW */}
          <button
            className="absolute right-10 text-white text-4xl"
            onClick={() => {
              const newIndex = (selectedIndex + 1) % filterProducts.length;
              setSelectedIndex(newIndex);
              setSelectedProduct(filterProducts[newIndex]);
            }}
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default Products;
