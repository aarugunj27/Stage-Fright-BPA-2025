import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

export default function FAQ() {
  const faqData = [
    {
      question: "What is Stage Fright?",
      answer:
        "Stage Fright is an electrifying rock band known for their high-energy performances and edgy sound.",
    },
    {
      question: "Where can I listen to Stage Fright’s music?",
      answer:
        "You can stream our music on all major platforms like Spotify, Apple Music, and YouTube.",
    },
    {
      question: "When is the next tour?",
      answer:
        "Our next tour dates will be announced soon! Stay tuned by following us on social media and subscribing to our newsletter.",
    },
    {
      question: "How can I get Stage Fright merch?",
      answer:
        "Official Stage Fright merchandise is available on our website. Visit the 'Merch' section to grab your favorite gear.",
    },
  ];

  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-opacity-80 bg-black text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">FAQ</h1>
          <div className="space-y-6">
            {faqData.map((faq, index) => (
              <div key={index} className="p-4 bg-zinc-950 rounded-lg shadow">
                <h2 className="text-2xl font-semibold">{faq.question}</h2>
                <p className="mt-2 text-lg">{faq.answer}</p>
              </div>
            ))}
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
