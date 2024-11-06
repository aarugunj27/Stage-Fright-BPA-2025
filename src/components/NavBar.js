import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import Logo from "../assets/images/logo.png";

function NavBar() {
  const [isDarkMode, setIsDarkMode] = useState(false);

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

  return (
    <header className="border-b border-zinc-200 dark:border-zinc-700 bg-zinc-50 dark:bg-zinc-900">
      <div className="flex h-16 items-center px-4 md:px-6">
        <a href="/" className="mr-6 flex items-center space-x-2 select-none">
          <img src={Logo} alt="Logo" className="h-10 w-10" />
          <span className="self-center text-2xl font-semibold whitespace-nowrap text-zinc-900 dark:text-zinc-100">
            Stage Fright
          </span>
        </a>
        <nav className="ml-auto flex items-center space-x-4">
          {["Home", "About", "Tours", "Music", "Merch", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                className="relative text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400 transition-colors duration-200"
              >
                {item}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-sky-600 dark:bg-sky-400 transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100"></span>
              </a>
            )
          )}
          <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium text-zinc-600 hover:text-sky-600 dark:text-zinc-400 dark:hover:text-sky-400 transition-colors duration-200"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </button>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
