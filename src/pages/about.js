import { motion } from "framer-motion";
import { Users, Music, Trophy, Mic } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Waves, WavesOpacity, Arc, Curve } from "../components/ShapeDividers";
import Alex from "../assets/images/alex.jpg";

function About() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-zinc-100 dark:bg-zinc-900 cursor-pointer">
        {/* Hero Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Meet{" "}
              <span className="text-red-600 dark:text-red-400">
                Stage Fright
              </span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              A powerhouse rock band pushing the boundaries of modern music with
              electrifying performances and innovative sound.
            </p>
          </motion.div>
        </section>
        <Waves fill="fill-zinc-100 dark:fill-zinc-900" height={100} />
        <section className="py-32 bg-zinc-300 dark:bg-zinc-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { icon: Users, label: "Fans Worldwide", value: "500K+" },
                { icon: Music, label: "Albums Released", value: "4" },
                { icon: Trophy, label: "Music Awards", value: "12" },
                { icon: Mic, label: "Live Shows", value: "1000+" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-red-600 dark:text-red-400" />
                  <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    {stat.value}
                  </p>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
        <WavesOpacity fill="fill-zinc-300 dark:fill-zinc-800" height={150} />
        <section className="py-40 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                The Band
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                Meet the talented individuals behind Stage Fright
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <motion.div
                key="Alex Thunder"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={Alex}
                  alt="Alex Thunder"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Alex Thunder
                  </h3>
                  <p className="text-red-600 dark:text-red-400 mb-4">
                    Lead Vocals
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Alex's powerful voice and charismatic stage presence have
                    been driving the band's success since its inception.
                  </p>
                </div>
              </motion.div>
              <motion.div
                key="Sam Riff"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={Alex}
                  alt="Same Riff"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Sam Riff
                  </h3>
                  <p className="text-red-600 dark:text-red-400 mb-4">
                    Lead Guitar
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Sam's innovative guitar riffs and solos are the backbone of
                    Stage Fright's unique sound.
                  </p>
                </div>
              </motion.div>
              <motion.div
                key="Jordan Bass"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={Alex}
                  alt="Jordan Bass"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 cursor-pointer">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Jordan Bass
                  </h3>
                  <p className="text-red-600 dark:text-red-400 mb-4">
                    Bass Guitar
                  </p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Jordan's groovy basslines provide the foundation for the
                    band's rhythm section.
                  </p>
                </div>
              </motion.div>
              <motion.div
                key="Taylor Beats"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
              >
                <img
                  src={Alex}
                  alt="Taylor Beats"
                  className="w-full h-64 object-cover object-center"
                />
                <div className="p-6 hover:scale-105 duration-300 ease-in-out cursor-pointer">
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                    Taylor Beats
                  </h3>
                  <p className="text-red-600 dark:text-red-400 mb-4">Drums</p>
                  <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                    Taylor's dynamic drumming brings energy and drive to every
                    Stage Fright performance.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* History Section */}
        <Arc fill="fill-zinc-300 dark:fill-zinc-900" height={200} />
        <section className="pt-60 pb-1 px-4 sm:px-6 lg:px-8 bg-zinc-300 dark:bg-zinc-800">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                Our Journey
              </h2>
              <p className="text-lg text-zinc-600 dark:text-zinc-400">
                From humble beginnings in local venues to selling out major
                arenas, Stage Fright has come a long way. Our passion for
                creating authentic rock music and connecting with fans has
                remained unchanged throughout our journey.
              </p>
            </motion.div>
          </div>
        </section>
        <Curve fill="fill-zinc-300 dark:fill-zinc-800" height={100} />
        <section className="pt-40 pb-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Join Us On Tour
            </h2>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              Experience the energy and passion of Stage Fright live in concert.
            </p>
            <a
              href="/tours"
              className="inline-block bg-red-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-red-700 transition-colors duration-200"
            >
              View Tour Dates
            </a>
          </motion.div>
        </section>
      </div>
      <Footer />
    </>
  );
}

export default About;
