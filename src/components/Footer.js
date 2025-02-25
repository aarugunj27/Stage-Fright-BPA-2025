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
            <p className="text-sm mb-4 text-zinc-100">
              Electrifying performances, unforgettable experiences.
            </p>
          </div>

          {/* Navigation Links */}
          {linkSections.map((section, index) => (
            <div key={index}>
              <h4 className="text-lg font-semibold mb-4 text-white">
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
                      className="text-sm font-medium text-zinc-100 hover:text-neonPink transition-colors duration-300"
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
