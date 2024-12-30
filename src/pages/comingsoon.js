import React, { useState, useEffect } from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { ArrowRight, Mail } from "lucide-react";
import { useNavigate } from "react-router-dom";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

function ComingSoon() {
  const [email, setEmail] = useState("");
  const [launchDate, setLaunchDate] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const now = new Date();
    const randomFuture = new Date(
      now.getFullYear() + Math.floor(Math.random() * 2 + 1), // Random year within 1-2 years
      Math.floor(Math.random() * 12), // Random month (0-11)
      Math.floor(Math.random() * 28) + 1 // Random day (1-28 to avoid invalid dates)
    );
    setLaunchDate(randomFuture);
  }, []);

  useEffect(() => {
    if (!launchDate) return;

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const difference = launchDate.getTime() - now;

      setTimeLeft({
        days: Math.max(Math.floor(difference / (1000 * 60 * 60 * 24)), 0),
        hours: Math.max(
          Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          0
        ),
        minutes: Math.max(
          Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          0
        ),
        seconds: Math.max(Math.floor((difference % (1000 * 60)) / 1000), 0),
      });

      if (difference <= 0) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [launchDate]);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-neonBlack bg-opacity-80 text-white flex flex-col justify-center items-center p-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Launching Soon
          </h1>
          <p className="text-xl text-zinc-200 mb-8">
            Get ready for something extraordinary. Our launch is just around the
            corner!
          </p>

          {launchDate && (
            <p className="text-lg text-neonBlue mb-6">
              Launch Date: {launchDate.toLocaleDateString()}
            </p>
          )}

          <form onSubmit={handleSubmit} className="flex justify-center mb-8">
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-zinc-300" />
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 md:w-80 rounded-l-md bg-zinc-950 text-zinc-100 border border-zinc-800 focus:outline-none focus:ring-2 focus:ring-neonPink"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-neonBlue hover:bg-neonPink text-neonBlack hover:text-white font-bold py-2 px-4 rounded-r-md transition duration-300 ease-in-out flex items-center"
            >
              Notify Me
              <ArrowRight className="ml-2" size={18} />
            </button>
          </form>

          <div className="text-zinc-300">
            <p>Stay connected with us:</p>
            <div className="flex justify-center space-x-4 mt-4">
              <a
                href="/twitter"
                className="hover:text-neonBlue transition duration-300"
              >
                Twitter
              </a>
              <a
                href="/facebook"
                className="hover:text-neonBlue transition duration-300"
              >
                Facebook
              </a>
              <a
                href="/instagram"
                className="hover:text-neonBlue transition duration-300"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ComingSoon;
