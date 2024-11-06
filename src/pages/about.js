import { motion } from "framer-motion";
import { Users, Music, Trophy, Mic } from "lucide-react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

function About() {
  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-zinc-50 dark:bg-zinc-900">
        {/* Hero Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
              Meet{" "}
              <span className="text-sky-600 dark:text-sky-400">
                Stage Fright
              </span>
            </h1>
            <p className="text-lg text-zinc-600 dark:text-zinc-400 mb-8">
              A powerhouse rock band pushing the boundaries of modern music with
              electrifying performances and innovative sound.
            </p>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-zinc-100 dark:bg-zinc-800">
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
                  <stat.icon className="h-8 w-8 mx-auto mb-4 text-sky-600 dark:text-sky-400" />
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

        {/* Band Members Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              {[
                {
                  name: "Alex Thunder",
                  role: "Lead Vocals",
                  image: "/placeholder.svg?height=400&width=300",
                  bio: "Alex's powerful voice and charismatic stage presence have been driving the band's success since its inception.",
                },
                {
                  name: "Sam Riff",
                  role: "Lead Guitar",
                  image: "/placeholder.svg?height=400&width=300",
                  bio: "Sam's innovative guitar riffs and solos are the backbone of Stage Fright's unique sound.",
                },
                {
                  name: "Jordan Bass",
                  role: "Bass Guitar",
                  image: "/placeholder.svg?height=400&width=300",
                  bio: "Jordan's groovy basslines provide the foundation for the band's rhythm section.",
                },
                {
                  name: "Taylor Beats",
                  role: "Drums",
                  image: "/placeholder.svg?height=400&width=300",
                  bio: "Taylor's dynamic drumming brings energy and drive to every Stage Fright performance.",
                },
              ].map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white dark:bg-zinc-800 rounded-lg overflow-hidden shadow-lg"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-64 object-cover object-center"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-2">
                      {member.name}
                    </h3>
                    <p className="text-sky-600 dark:text-sky-400 mb-4">
                      {member.role}
                    </p>
                    <p className="text-zinc-700 dark:text-zinc-300 text-sm">
                      {member.bio}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* History Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-zinc-100 dark:bg-zinc-800">
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

        {/* Call to Action */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
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
              className="inline-block bg-sky-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors duration-200"
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
