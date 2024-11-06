import React from "react";
import { motion } from "framer-motion";
import { Play, Calendar, ShoppingBag } from "lucide-react";
import {
  WavyDivider,
  TriangleDivider,
  CurvyDivider,
} from "../components/ShapeDividers";
import NavBar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <NavBar />
      <div className="bg-zinc-100 dark:bg-zinc-900">
        <HeroSection />
        <LatestRelease />
        <UpcomingTours />
        <MerchShowcase />
        <Footer />
      </div>
    </>
  );
}

function HeroSection() {
  return (
    <section className="relative bg-zinc-900 text-zinc-100 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1682447404920-4be1294c2854?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dheight=1080&width=1920"
          alt="Stage Fright performing live"
          className="w-full h-full object-cover object-center opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-zinc-900 via-zinc-900/70 to-zinc-900/30" />
      </div>

      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40 flex flex-col items-center justify-center text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6"
        >
          Welcome to <span className="text-sky-400">Stage Fright</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl"
        >
          Experience the raw energy and electrifying sound of the most exciting
          rock band of our generation.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <a
            href="/tours"
            className="bg-sky-600 text-white hover:bg-sky-700 dark:bg-sky-500 dark:hover:bg-sky-600 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            View Tour Dates
          </a>
          <a
            href="/music"
            className="bg-zinc-800 text-zinc-100 hover:bg-zinc-700 dark:bg-zinc-700 dark:hover:bg-zinc-600 px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Listen Now
          </a>
        </motion.div>
      </div>

      <WavyDivider fill="fill-sky-200 dark:fill-sky-800" height={150} />
    </section>
  );
}

function LatestRelease() {
  return (
    <section className="relative py-16">
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
      <WavyDivider fill="fill-sky-100 dark:fill-sky-900" height={150} />
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
    <section className="relative py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
      <CurvyDivider fill="fill-sky-200 dark:fill-sky-800" height={150} />
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
    <section className="relative py-16">
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

function Footer() {
  return (
    <footer className="bg-zinc-900 text-zinc-100 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Stage Fright</h3>
            <p className="text-zinc-400">
              Electrifying performances, unforgettable experiences.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {["Home", "About", "Tours", "Music", "Merch", "Contact"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                      className="text-zinc-400 hover:text-sky-400 transition duration-300"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/stagefright`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-sky-400 transition duration-300"
                >
                  <span className="sr-only">{social}</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-zinc-400">
            &copy; {new Date().getFullYear()} Stage Fright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
