import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

function TourEvent({ tour, index, isLast }) {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const element = ref.current; // Store the current value of ref
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element); // Use the stored element value
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start("visible");
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={{
        visible: { opacity: 1, y: 0 },
        hidden: { opacity: 0, y: 50 },
      }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className={`relative flex flex-col md:flex-row items-center gap-6 mb-16 ${
        index % 2 === 0 ? "md:flex-row-reverse" : ""
      }`}
    >
      {/* Event Content */}
      <motion.div
        className={`relative z-10 bg-gradient-to-br ${
          index % 2 === 0
            ? "from-neonPink to-neonBlue"
            : "from-neonBlue to-neonPink"
        } p-8 rounded-lg shadow-lg w-full md:w-1/2 text-center md:text-left ease-in-out`}
        whileHover={{ scale: 1.05 }}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
      >
        <h2 className="text-3xl font-extrabold uppercase tracking-wide">
          {tour.title}
        </h2>
        <p className="mt-4 text-zinc-50 leading-relaxed">{tour.description}</p>
        <p className="mt-4 text-neonBlack bg-white inline-block px-4 py-2 rounded-full font-bold text-sm">
          Location: {tour.location}
        </p>
        {isLast && (
          <button className="mt-6 mx-6 bg-neonPink text-white px-6 py-2 rounded-full font-bold text-lg hover:bg-neonBlue hover:scale-105 ease-in-out duration-300">
            Buy Tickets Now
          </button>
        )}
      </motion.div>

      {/* Year and Badge */}
      <div className="flex flex-col items-center">
        <motion.div
          className="bg-neonPink text-black font-extrabold rounded-full w-20 h-20 flex items-center justify-center text-2xl shadow-xl border-4 border-neonBlue"
          whileHover={{ scale: 1.1, rotate: 360 }}
          transition={{ duration: 0.3 }}
        >
          {tour.year}
        </motion.div>
        {!isLast && (
          <motion.div
            className="h-24 w-1 bg-gradient-to-b from-neonBlue to-neonPink"
            initial={{ height: 0 }}
            animate={{ height: isHovered ? 96 : 24 }}
            transition={{ duration: 0.3 }}
          ></motion.div>
        )}
      </div>
    </motion.div>
  );
}

function Tours() {
  const tours = [
    {
      year: "2018",
      title: "The Debut Tour",
      description:
        "A gritty start in underground venues across the country. Fueled by raw energy and an unshakable dream.",
      location: "USA",
    },
    {
      year: "2020",
      title: "Neon Nights Tour",
      description:
        "A roaring success with sold-out arenas. Bigger, louder, and more electrifying.",
      location: "North America & Europe",
    },
    {
      year: "2023",
      title: "Back to the Stage",
      description:
        "The ultimate reunion tour celebrating our history and bringing fans together worldwide.",
      location: "USA",
    },
    {
      year: "2025",
      title: "Grand World Tour",
      description:
        "The pinnacle of our journey. An epic celebration of everything that makes rock immortal.",
      location: "Worldwide",
    },
  ];

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="bg-neonBlack bg-opacity-80 text-white min-h-screen py-12 px-6 relative z-10">
        <motion.header
          className="text-center"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-6xl font-extrabold text-white uppercase">
            Rock Band Tours
          </h1>
          <p className="mt-4 text-lg text-neonBlue italic">
            Electrifying nights, roaring crowds, and unforgettable moments.
          </p>
        </motion.header>

        <div className="mt-16 max-w-6xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full bg-gradient-to-b from-neonBlue via-neonPink to-neonBlue"></div>

          {tours.map((tour, index) => (
            <TourEvent
              key={index}
              tour={tour}
              index={index}
              isLast={index === tours.length - 1}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Tours;
