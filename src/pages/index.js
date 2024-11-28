import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Play, Calendar, ShoppingBag } from "lucide-react";
import Typed from "typed.js";
import NavBar from "../components/NavBar";
import Logo from "../assets/images/logo.png";
import Footer from "../components/Footer";
import Cover from "../assets/images/neonnights.jpg";
import TourT from "../assets/images/tour.jpg";
import Album from "../assets/images/album.jpg";
import Poster from "../assets/images/poster.jpg";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

export default function Home() {
  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="bg-neonBlack bg-opacity-80">
        <HeroSection />
        <LatestRelease />
        <UpcomingTours />
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
    <section className="hero-section py-16 md:py-24">
      <div className="container mx-auto px-5">
        <div className="flex flex-col md:flex-row justify-around items-center">
          <div className="md:w-2/3 text-left mb-8 md:mb-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-neonBlue mb-6"
            >
              <strong>
                Igniting the night with
                <br />
                <span className="text-neonPink">
                  <span ref={el}></span>
                </span>
              </strong>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl text-neonBlue mb-8 max-w-2xl"
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
                className="bg-neonPink text-white hover:text-black hover:bg-neonBlue px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
              >
                View Tour Dates
              </a>
              <a
                href="/music"
                className="bg-neonBlue text-black hover:text-white hover:bg-neonPink px-8 py-3 rounded-full font-semibold text-lg transition duration-300 ease-in-out transform hover:scale-105 text-center"
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
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const sectionElement = sectionRef.current; // Copy ref to a variable
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Use the variable here
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-neonPink mb-8 text-center">
          Latest Release
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <motion.div
            initial={{ x: -100, opacity: 0 }}
            animate={inView ? { x: 0, opacity: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="w-72 h-72 md:w-96 md:h-96 relative"
          >
            <img
              src={Cover}
              alt="Album Cover"
              className="w-full h-full object-cover rounded-lg shadow-lg hover:scale-105 duration-300 ease-in-out"
            />
          </motion.div>

          <div className="text-center md:text-right max-w-lg">
            <h3 className="text-4xl font-semibold text-neonBlue mb-4">
              Neon Nights
            </h3>
            <p className="text-white mb-5 text-xl leading-relaxed">
              Our latest album, Neon Nights, brings together a perfect blend of
              vibrant, electrifying tracks that will get you moving from the
              very first note. With 12 electrifying songs, each track tells a
              story of adventure, late nights, and the energy of the neon-lit
              city streets. Featuring collaborations with some of the hottest
              new artists in the scene, this album is bound to be on repeat for
              weeks to come. Don't miss out on the album that everyone's talking
              about!
            </p>
            <a
              href="/music"
              className="bg-neonPink text-white hover:text-black hover:bg-neonBlue px-6 py-2 rounded-full font-semibold transition hover:scale-105 duration-300 ease-in-out flex items-center justify-center gap-2"
            >
              <Play size={20} />
              Listen Now
            </a>
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

  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const sectionElement = sectionRef.current; // Copy ref to a variable
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Use the variable here
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20">
        <h2 className="text-5xl font-bold text-neonPink mb-8 text-center">
          Upcoming Tours
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tours.map((tour, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-neonBlue rounded-lg shadow-md p-6 hover:scale-105 transition duration-300 ease-in-out"
            >
              <div className="flex items-center gap-4 mb-4">
                <Calendar className="text-neonPink" />
                <span className="text-lg font-semibold text-black">
                  {tour.date}
                </span>
              </div>
              <p className="text-black mb-4">{tour.venue}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-black">
                  {tour.ticketsLeft} tickets left
                </span>
                <a
                  href="/tours"
                  className="bg-neonPink text-white hover:text-black hover:bg-neonBlue px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out"
                >
                  Book Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MerchShowcase() {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.5 }
    );

    const sectionElement = sectionRef.current; // Copy ref to a variable
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement); // Use the variable here
      }
    };
  }, []);

  const merchItems = [
    {
      img: TourT,
      title: "Band T-Shirt",
      description: "Show your Stage Fright spirit",
      price: "$29.99",
      alt: "Tour T-Shirt",
    },
    {
      img: Poster,
      title: "Neon Nights Poster",
      description: "Limited Edition Tour Poster",
      price: "$14.99",
      alt: "Tour Poster",
    },
    {
      img: Album,
      title: "Neon Nights Album",
      description: "Our Latest Full-Length Album",
      price: "$19.99",
      alt: "Album",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <section ref={sectionRef} className="relative py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-5xl font-bold text-neonPink mb-8 text-center">
          Merch Store
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {merchItems.map((item, index) => (
            <motion.div
              key={index}
              className="bg-black rounded-lg shadow-md overflow-hidden transform transition-transform duration-300 ease-in-out hover:scale-105"
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={cardVariants}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
            >
              <img
                src={item.img}
                className="w-full h-48 object-cover"
                alt={item.alt}
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-neonPink">
                  {item.title}
                </h3>
                <p className="text-white">{item.description}</p>
                <span className="block text-lg text-neonPink">
                  {item.price}
                </span>
                <a
                  href="/merch"
                  className="mt-4 bg-neonBlue text-black hover:text-white hover:bg-neonPink px-4 py-2 rounded-full text-sm font-semibold transition duration-300 ease-in-out flex items-center justify-center gap-2"
                >
                  <ShoppingBag size={20} />
                  Shop Now
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
