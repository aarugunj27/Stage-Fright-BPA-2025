import React from "react";
import { motion } from "framer-motion";

const MerchItem = ({ item }) => {
  return (
    <motion.div
      className="bg-neonBlack p-4 rounded-lg shadow-lg"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-64 object-cover rounded-md mb-4"
      />
      <h3 className="text-neonPink text-xl font-bold mb-2">{item.name}</h3>
      <p className="text-neonBlue mb-2">${item.price.toFixed(2)}</p>
      <motion.button
        className="bg-neonPink text-white px-4 py-2 rounded-full font-bold text-sm hover:bg-neonBlue transition-colors duration-300 w-full"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Add to Cart
      </motion.button>
    </motion.div>
  );
};

export default MerchItem;
