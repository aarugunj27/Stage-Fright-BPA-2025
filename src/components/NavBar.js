import { Moon, Sun, Menu } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";
import { ShoppingCart } from "lucide-react";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode") === "true";
    setIsDarkMode(savedMode);
    if (savedMode) {
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("darkMode", "true");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("darkMode", "false");
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = ["Home", "About", "Tours", "Music", "Merch", "Contact"];

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <a href="/" className="flex items-center space-x-2 select-none">
            <img
              src={Logo}
              alt="Logo"
              width={40}
              height={40}
              className="h-10 w-10"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap text-zinc-900 dark:text-zinc-100">
              Stage Fright
            </span>
          </a>
          <div className="flex items-center space-x-4">
            <nav className="hidden md:flex items-center space-x-4">
              {navItems.map((item) => (
                <a
                  key={item}
                  href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="relative text-sm font-medium text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors duration-200"
                >
                  {item}
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-red-600 dark:bg-red-400 transform scale-x-0 transition-transform duration-300 origin-left hover:scale-x-100"></span>
                </a>
              ))}
            </nav>
            <a
              href="/cart"
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors duration-200"
            >
              <ShoppingCart className="h-5 w-5 rotate-0 scale-100" />
              <span className="sr-only">Shopping Cart</span>
            </a>
            <button
              onClick={toggleDarkMode}
              className="inline-flex items-center justify-center rounded-md text-sm font-medium text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors duration-200"
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </button>
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 focus:outline-none focus:ring-2 focus:ring-red-600 dark:focus:ring-red-400 md:hidden"
              aria-label="Toggle menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
      {/* Mobile menu */}
      <div
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-zinc-50 dark:bg-zinc-900`}
      >
        <nav className="px-4 pt-2 pb-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item}
              href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
              className="block py-2 text-base font-medium text-zinc-600 hover:text-red-600 dark:text-zinc-400 dark:hover:text-red-400 transition-colors duration-200"
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
