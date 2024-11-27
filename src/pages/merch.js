import React from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";
import MerchItem from "../components/MerchItem";

const merchItems = [
  {
    id: 1,
    name: "Rock Band T-Shirt",
    price: 25.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 2,
    name: "Guitar Pick Necklace",
    price: 15.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 3,
    name: "Signed Poster",
    price: 39.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 4,
    name: "Rock Band Hoodie",
    price: 49.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 5,
    name: "Limited Edition Vinyl",
    price: 29.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 6,
    name: "Drumstick Set",
    price: 19.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 7,
    name: "Rock Band Beanie",
    price: 17.99,
    image: "/placeholder.svg?height=400&width=300",
  },
  {
    id: 8,
    name: "Tour Photo Book",
    price: 34.99,
    image: "/placeholder.svg?height=400&width=300",
  },
];

function Merch() {
  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="bg-neonBlack bg-opacity-80 text-white min-h-screen py-12 px-6 relative z-10">
        <motion.header
          className="text-center mb-12"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold text-neonPink uppercase">
            Rock Band Merch
          </h1>
          <p className="mt-4 text-lg text-neonBlue italic">
            Take the rock experience home with our exclusive merchandise
          </p>
        </motion.header>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {merchItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <MerchItem item={item} />
            </motion.div>
          ))}
        </motion.div>
      </div>
      <Footer />
    </>
  );
}

export default Merch;
