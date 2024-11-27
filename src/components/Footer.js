import React from "react";
import Logo from "../assets/images/logo.png";

function Footer() {
  const linkSections = [
    {
      title: "Navigation",
      links: ["Home", "About", "Tours", "Music"],
    },
    {
      title: "Resources",
      links: ["Merch", "Contact", "FAQ", "Privacy Policy"],
    },
  ];

  return (
    <footer className="border-t border-zinc-700 bg-neonBlack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <img src={Logo} alt="Logo" className="h-10 w-10" />
              <h3 className="text-2xl font-extrabold text-neonPink tracking-wider shadow-2xl drop-shadow-md uppercase">
                Stage Fright
              </h3>
            </div>
            <p className="text-sm mb-4">
              Electrifying performances, unforgettable experiences.
            </p>
            <div className="flex space-x-4">
              {["facebook", "twitter", "instagram", "youtube"].map((social) => (
                <a
                  key={social}
                  href={`https://${social}.com/stagefright`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-400 hover:text-neonPink transition-colors duration-200"
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

          {/* Navigation Links */}
          {linkSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-zinc-100">
                {section.title}
              </h4>
              <ul className="space-y-2">
                {section.links.map((item) => (
                  <li key={item}>
                    <a
                      href={
                        item === "Home"
                          ? "/"
                          : `/${item.toLowerCase().replace(" ", "-")}`
                      }
                      className="text-sm font-medium hover:text-neonPink transition-colors duration-300"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-8 pt-8 border-t border-zinc-800 text-center">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Stage Fright. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
