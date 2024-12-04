import { Menu, ShoppingCart } from "lucide-react";
import { useState } from "react";
import Logo from "../assets/images/logo.png";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = ["Home", "About", "Tours", "Music", "Merch", "Contact"];

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <header className="border-b border-zinc-700 bg-neonBlack">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <div className="flex items-center space-x-3">
            <a href="/" className="flex items-center space-x-2 select-none">
              <img
                src={Logo}
                alt="Stage Fright Logo"
                className="h-12 w-12"
                width={48}
                height={48}
              />
              <span className="text-xl font-extrabold text-neonPink tracking-wider shadow-2xl drop-shadow-md uppercase">
                Stage Fright
              </span>
            </a>
          </div>

          <nav className="hidden md:flex items-center justify-center flex-grow">
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-base font-medium text-white hover:text-neonPink transition-colors duration-200"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-neonPink transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
                </a>
              ))}
            </div>
          </nav>

          {/* Shopping Cart Icon */}
          <div className="flex items-center">
            <a
              href="/soon"
              className="inline-flex items-center justify-center rounded-md text-base font-medium text-white hover:text-neonPink transition-colors duration-300 mr-3"
            >
              <ShoppingCart className="h-5 w-5 rotate-0 scale-100" />
              <span className="sr-only">Shopping Cart</span>
            </a>

            {/* Mobile Menu Toggle */}
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-zinc-400 hover:text-neonPink focus:outline-none focus:ring-2 focus:ring-neonPink md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} md:hidden bg-zinc-900`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-1">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block py-2 text-base font-medium text-zinc-400 hover:text-neonPink transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
