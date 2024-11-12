import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, ShoppingBag } from "lucide-react";
import { WavyDivider, CurvyDivider } from "../components/ShapeDividers";
import Typed from "typed.js";
import NavBar from "../components/NavBar";
import Logo from "../assets/images/logo.png";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <HeroSection />
      <div className="relative">
        <CurvyDivider fill="fill-zinc-100 dark:fill-zinc-800" height={150} />
        <LatestRelease />
      </div>
      <div className="relative">
        <CurvyDivider fill="fill-white dark:fill-zinc-700" height={100} />
        <UpcomingTours />
      </div>
      <div className="relative">
        <WavyDivider fill="fill-zinc-100 dark:fill-zinc-800" height={150} />
        <MerchShowcase />
      </div>
      <Footer />
    </>
  );
}

function HeroSection() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "electrifying performances",
        "unforgettable melodies",
        "sold-out arenas",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section className="hero-section bg-zinc-100 dark:bg-zinc-800 py-16 md:py-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="md:w-2/3 text-left mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-zinc-900 dark:text-zinc-100 mb-6"
            >
              <strong>
                Igniting the night with
                <br />
                <span className="text-sky-600 dark:text-sky-400">
                  <span ref={el}></span>
                </span>
              </strong>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-zinc-700 dark:text-zinc-300 mb-8 max-w-2xl"
            >
              At Stage Fright, we bring the electrifying energy of live
              performances directly to you. Experience the raw power of rock
              music, discover new tracks, and connect with a community of
              passionate music lovers. Get ready to be part of something
              extraordinary.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="/tours"
                className="bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                View Tour Dates
              </a>
              <a
                href="/music"
                className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                Listen Now
              </a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="md:w-1/3 flex justify-center"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src={Logo}
                alt="Stage Fright Logo"
                layout="fill"
                objectfit="contain"
                className="rounded-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LatestRelease() {
  return (
    <section className="relative bg-white dark:bg-zinc-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Latest Release
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <img
            src="/placeholder.svg?height=300&width=300"
            alt="Album Cover"
            className="w-64 h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
              Neon Nights
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-4">
              Our latest album featuring 12 electrifying tracks
            </p>
            <button className="bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-6 py-2 rounded-full font-semibold transition duration-300 ease-in-out flex items-center justify-center gap-2">
              <Play size={20} />
              Listen Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function UpcomingTours() {
  const tours = [
    {
      date: "July 15, 2024",
      venue: "Rockstar Arena, New York",
      ticketsLeft: 500,
    },
    {
      date: "July 22, 2024",
      venue: "Melody Hall, Los Angeles",
      ticketsLeft: 250,
    },
    {
      date: "August 5, 2024",
      venue: "Harmony Stadium, Chicago",
      ticketsLeft: 1000,
    },
  ];

  return (
    <section className="relative bg-zinc-100 dark:bg-zinc-800 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Upcoming Tours
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-800 rounded-lg shadow-md p-6"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-sky-600 dark:text-sky-400" />
                <span className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                  {tour.date}
                </span>
              </div>
              <p className="text-zinc-600 dark:text-zinc-400 mb-4">
                {tour.venue}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-zinc-500 dark:text-zinc-500">
                  {tour.ticketsLeft} tickets left
                </span>
                <button className="bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MerchShowcase() {
  const merchItems = [
    {
      name: "Tour T-Shirt",
      price: "$25",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Signed Poster",
      price: "$40",
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Album Vinyl",
      price: "$30",
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  return (
    <section className="relative bg-white dark:bg-zinc-700 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-8 text-center">
          Merch Store
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {merchItems.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-zinc-700 rounded-lg shadow-md overflow-hidden"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                  {item.name}
                </h3>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-600 dark:text-zinc-400">
                    {item.price}
                  </span>
                  <button className="bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out flex items-center gap-2">
                    <ShoppingBag size={16} />
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
