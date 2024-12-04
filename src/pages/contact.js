import React, { useState } from "react";
import { motion } from "framer-motion";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

function Contact() {
  const [formState, setFormState] = useState({
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setSubmitMessage("Thanks for reaching out! This is a demo form.");
      setFormState({
        email: "",
        subject: "",
        message: "",
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-neonBlack bg-opacity-80 flex flex-col items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl w-full space-y-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-neonPink mb-4">
              Contact Us
            </h1>
            <p className="text-white text-lg">
              Got a technical issue? Want to send feedback about a feature? Need
              details about our{" "}
              <span className="text-neonPink hover:text-neonBlue cursor-pointer transition-colors">
                tour dates
              </span>
              ? Let us know.
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            onSubmit={handleSubmit}
            className="mt-8 space-y-6"
          >
            <div>
              <label htmlFor="email" className="block text-neonBlue mb-2">
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neonBlack border border-zinc-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neonPink transition-colors"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-neonBlue mb-2">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-neonBlack border border-zinc-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neonPink transition-colors"
                placeholder="Let us know how we can help you"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-neonBlue mb-2">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 bg-neonBlack border border-zinc-900 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-neonPink transition-colors resize-none"
                placeholder="Leave a comment..."
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-neonPink text-white py-3 px-6 rounded-md font-semibold text-lg hover:bg-neonBlue hover:text-neonBlack transition-colors ease-in-out duration-300 disabled:opacity-50"
              whileHover={{ scale: 1.05, duration: 300 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </motion.button>

            {submitMessage && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="mt-4 text-center text-neonBlue"
              >
                {submitMessage}
              </motion.p>
            )}
          </motion.form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
