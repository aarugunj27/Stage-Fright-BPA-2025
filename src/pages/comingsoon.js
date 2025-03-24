import React from "react";
import { Trash2 } from "lucide-react";
import NavBar from "../components/NavBar";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";
import TourT from "../assets/images/tour.jpg";
import Album from "../assets/images/album.jpg";
import Poster from "../assets/images/poster.jpg";

const ComingSoon = () => {
  // Fixed cart items
  const cartItems = [
    {
      id: 1,
      title: "Neon Nights Album",
      price: 19.99,
      img: Album,
    },
  ];

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-black bg-opacity-80 text-white py-10 px-5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h2>

          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between bg-gray-800 p-4 rounded-lg"
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-16 h-16 rounded-md object-cover"
                />
                <div className="flex-1 ml-4">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-sm text-gray-400">
                    ${item.price.toFixed(2)}
                  </p>
                </div>

                {/* Remove Button (Non-functional) */}
                <button className="text-red-400 hover:text-red-600">
                  <Trash2 size={20} />
                </button>
              </div>
            ))}
          </div>

          {/* Total Price & Checkout */}
          <div className="mt-6 p-4 bg-gray-800 rounded-lg">
            <h3 className="text-xl font-semibold">
              Total: ${totalPrice.toFixed(2)}
            </h3>
            <button className="w-full mt-4 bg-neonBlue text-black hover:bg-neonPink hover:text-white py-2 rounded">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ComingSoon;
