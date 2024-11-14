import React from "react";
import { motion } from "framer-motion";
import NotFoundImage from "../assets/images/404.png";

function PageNotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-800 text-zinc-100 px-4">
      <img
        src={NotFoundImage}
        alt="404 Background"
        className="absolute inset-0 w-full h-full object-cover opacity-20 dark:opacity-30"
      />
      <motion.h1
        className="text-9xl font-bold mb-4 relative"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <span className="text-red-600 bg-clip-text bg-center bg-cover">
          Oops!
        </span>
      </motion.h1>

      {/* Error Message */}
      <p className="text-2xl mb-2 font-semibold">404 - PAGE NOT FOUND</p>
      <p className="dark:text-zinc-400 mb-8 text-center max-w-md">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      {/* Button with Hover and Scale Effect */}
      <motion.a
        href="/"
        className="px-6 py-3 rounded-lg text-lg font-semibold bg-red-700 hover:bg-red-600 text-zinc-100 shadow-lg z-10"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        Go to Homepage
      </motion.a>
    </div>
  );
}

export default PageNotFound;
