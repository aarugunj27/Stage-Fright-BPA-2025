import { useState, useEffect, useRef, useMemo } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import Alex from "../assets/images/alex.jpg";
import Jordan from "../assets/images/jordan.jpeg";
import Taylor from "../assets/images/taylor.jpeg";
import Chris from "../assets/images/chris.jpeg";
import Sam from "../assets/images/sam.jpeg";
import Jamie from "../assets/images/jamie.jpeg";
import { Users, Music, Trophy, Mic } from "lucide-react";
import CountUp from "react-countup";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

function About() {
  const [inView, setInView] = useState({
    hero: false,
    stats: false,
    bandMembers: false,
    journey: false,
  });

  // Create refs outside of useMemo, then memoize the object with useMemo
  const heroRef = useRef(null);
  const statsRef = useRef(null);
  const bandMembersRef = useRef(null);
  const journeyRef = useRef(null);

  // Memoize the sectionRefs object to ensure stable references
  const sectionRefs = useMemo(
    () => ({
      hero: heroRef,
      stats: statsRef,
      bandMembers: bandMembersRef,
      journey: journeyRef,
    }),
    []
  ); // Empty dependency array ensures stable reference

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView((prev) => ({
              ...prev,
              [entry.target.id]: true,
            }));
          }
        });
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    const refs = Object.values(sectionRefs).map((ref) => ref.current);

    refs.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      refs.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, [sectionRefs]);

  const bandMembers = [
    {
      name: "Alex Carter",
      role: "Lead Vocalist",
      description:
        "The voice of the band, bringing powerful energy to every performance.",
      image: Alex,
    },
    {
      name: "Jordan Lee",
      role: "Guitarist",
      description:
        "Crafting electrifying solos that leave audiences mesmerized.",
      image: Jordan,
    },
    {
      name: "Taylor Smith",
      role: "Bassist",
      description: "Laying down the groove and keeping the rhythm tight.",
      image: Taylor,
    },
    {
      name: "Chris Johnson",
      role: "Drummer",
      description: "Setting the tempo with dynamic and powerful drumming.",
      image: Chris,
    },
    {
      name: "Sam Walker",
      role: "Keyboardist",
      description: "Adding depth and texture to the band’s signature sound.",
      image: Sam,
    },
    {
      name: "Jamie Brown",
      role: "Backing Vocalist",
      description: "Harmonizing and enhancing the band’s vocal power.",
      image: Jamie,
    },
  ];

  const stats = [
    { icon: Users, label: "Fans Worldwide", value: 500000 },
    { icon: Music, label: "Albums Released", value: 4 },
    { icon: Trophy, label: "Music Awards", value: 12 },
    { icon: Mic, label: "Live Shows", value: 1000 },
  ];

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-black bg-opacity-80 text-white">
        {/* Hero Section */}
        <section
          ref={sectionRefs.hero}
          id="hero"
          className="pt-24 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView.hero ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
              Meet <span className="text-neonPink">Stage Fright</span>
            </h1>
            <p className="text-lg text-gray-400 mb-8">
              A powerhouse rock band pushing the boundaries of modern music with
              electrifying performances and innovative sound.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section ref={sectionRefs.stats} id="stats" className="pt-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView.stats ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="text-center hover:scale-105 transform transition duration-300"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-neonPink" />
                  <p className="text-3xl font-bold text-white mb-2">
                    <CountUp
                      start={inView.stats ? 0 : null}
                      end={stat.value}
                      duration={2}
                      separator=","
                    />
                    {stat.label === "Fans Worldwide" && "+"}
                  </p>
                  <p className="text-sm text-white">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Band Members Section */}
        <section
          ref={sectionRefs.bandMembers}
          id="bandMembers"
          className="pt-40 sm:px-6 lg:px-8"
        >
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={inView.bandMembers ? { opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-extrabold mb-4">The Band</h2>
              <p className="text-xl text-zinc-200">
                Meet the talented individuals behind Stage Fright
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
              {bandMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0 }}
                  animate={inView.bandMembers ? { opacity: 1 } : {}}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  className="bg-zinc-950 rounded-lg overflow-hidden shadow-lg hover:scale-105 transform transition duration-300"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-neonBlue mb-2">
                      {member.name}
                    </h3>
                    <p className="text-neonPink text-sm font-semibold">
                      {member.role}
                    </p>
                    <p className="text-white mt-4">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Journey Section */}
        <section
          ref={sectionRefs.journey}
          id="journey"
          className="sm:px-6 lg:px-8 pt-24 pb-6"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView.journey ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-5xl font-bold mb-4">Our Journey</h2>
              <p className="text-lg text-white">
                From humble beginnings in local venues to selling out major
                arenas, Stage Fright has come a long way. Don’t miss your chance
                to experience Stage Fright live on our upcoming tours!
              </p>
              <div className="pt-10">
                <a
                  href="/tours"
                  className="bg-neonPink text-white hover:text-black hover:bg-neonBlue px-8 py-3 rounded-full font-semibold text-lg hover:scale-105 transition duration-300 text-center"
                >
                  View Tour Dates
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
