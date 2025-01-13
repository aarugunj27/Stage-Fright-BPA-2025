import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import RockBackgroundAnimation from "../components/RockBackgroundAnimation";

export default function PrivacyPolicy() {
  return (
    <>
      <NavBar />
      <RockBackgroundAnimation />
      <div className="min-h-screen bg-opacity-80 bg-neonBlack text-white">
        <main className="max-w-5xl mx-auto px-4 py-12">
          <h1 className="text-4xl font-bold text-center mb-8">
            Privacy Policy
          </h1>
          <div className="space-y-6">
            <p>
              <strong>Effective Date:</strong> January 1, 2025
            </p>
            <section>
              <h2 className="text-2xl font-semibold">1. Introduction</h2>
              <p className="mt-2">
                At Stage Fright, we respect your privacy. This Privacy Policy
                explains how we collect, use, and safeguard your personal
                information when you interact with us.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold">
                2. Information We Collect
              </h2>
              <p className="mt-2">
                We may collect information such as your name, email address, and
                payment details when you purchase merchandise, sign up for
                newsletters, or participate in fan events.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold">
                3. How We Use Your Information
              </h2>
              <p className="mt-2">
                Your information helps us provide better services, process your
                orders, and keep you updated about new releases and tour dates.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold">4. Data Protection</h2>
              <p className="mt-2">
                We implement security measures to protect your data from
                unauthorized access. Your trust is important to us.
              </p>
            </section>
            <section>
              <h2 className="text-2xl font-semibold">5. Contact Us</h2>
              <p className="mt-2">
                For any questions regarding this Privacy Policy, you can contact
                us at privacy@stagefright.com.
              </p>
            </section>
          </div>
        </main>
      </div>
      <Footer />
    </>
  );
}
