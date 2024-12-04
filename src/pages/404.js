import React from "react";
import { motion } from "framer-motion";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

function PageNotFound() {
  return (
    <>
      <RockBackgroundAnimation />
      <div className="flex flex-col items-center justify-center h-screen bg-opacity-80 bg-neonBlack text-white px-4">
        <motion.h1
          className="text-9xl font-bold mb-4 relative"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <h1 className="text-neonPink">Oops!</h1>
        </motion.h1>

        {/* Error Message */}
        <p className="text-2xl mb-2 mt-4 font-semibold">404 - PAGE NOT FOUND</p>
        <p className="text-neonBlue mb-4 text-center max-w-md">
          The page you are looking for might have been removed, had its name
          changed, or is temporarily unavailable.
        </p>

        {/* Button with Hover and Scale Effect */}
        <a
          href="/"
          className="px-6 py-3 rounded-lg text-lg font-semibold bg-neonPink hover:bg-neonBlue hover:text-neonBlack hover:scale-110 transition duration-300 ease-in-out text-zinc-100 shadow-lg z-10"
        >
          Go to Homepage
        </a>
      </div>
    </>
  );
}

export default PageNotFound;
