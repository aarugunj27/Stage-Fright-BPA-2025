import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";
import { ShoppingBag } from "lucide-react";
import TourT from "../assets/images/tour.jpg";
import Album from "../assets/images/album.jpg";
import Poster from "../assets/images/poster.jpg";
import Pick from "../assets/images/guitarpick.jpg";
import Hoodie from "../assets/images/hoodie.jpg";
import Beanie from "../assets/images/beanie.jpg";
import Book from "../assets/images/book.jpg";
import Drum from "../assets/images/drum.jpg";

function Merch() {
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

    const sectionElement = sectionRef.current;
    if (sectionElement) {
      observer.observe(sectionElement);
    }

    return () => {
      if (sectionElement) {
        observer.unobserve(sectionElement);
      }
    };
  }, []);

  const merchItems = [
    {
      img: TourT,
      title: "Band T-Shirt",
      description: "Show Your Stage Fright Spirit",
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
    {
      img: Pick,
      title: "Guitar Pick Necklace",
      description: "Always Have Your Pick Handy",
      price: "$15.99",
      alt: "Pick",
    },
    {
      img: Hoodie,
      title: "Band Hoodie",
      description: "Show Your Stage Fright Spirit",
      price: "$49.99",
      alt: "",
    },
    {
      img: Beanie,
      title: "Band Beanie",
      description: "Show Your Stage Fright Spirit",
      price: "$17.99",
      alt: "",
    },
    {
      img: Book,
      title: "Tour Photo Book",
      description: "Capture the Tour Forever",
      price: "$34.99",
      alt: "",
    },
    {
      img: Drum,
      title: "Drumstick Set",
      description: "Join Us and Play Our Tunes",
      price: "$19.99",
      alt: "",
    },
  ];

  const cardVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };
  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <section
        ref={sectionRef}
        className="relative py-16 bg-black bg-opacity-80"
      >
        <div className="max-w-full mx-5 px-4 sm:px-6 lg:px-8">
          <h2 className="text-5xl pb-10 font-bold text-white mb-8 text-center">
            Merch Store
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
                    href="/soon"
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
      <Footer />
    </>
  );
}

export default Merch;
