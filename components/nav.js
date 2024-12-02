import { useState } from "react";
import Link from "next/link";
import { CgDarkMode } from "react-icons/cg";
import { HiMenu, HiX } from "react-icons/hi";
import { useTheme } from "next-themes"; // Assuming you have a custom hook for theme

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <nav className="dark:text-white font-[Gill Sans]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <img
                src="/home.gif"
                alt="Andrea Yang GIF"
                className="w-16 h-14"
              />
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {links.map(({ href, label }) => (
                <Link
                  key={`${href}${label}`}
                  href={href}
                  className="px-3 py-2 rounded-md text-sm font-medium hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>
          <div className="hidden md:block">
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
            >
              <CgDarkMode size={24} />
            </button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <HiMenu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map(({ href, label }) => (
              <Link
                key={`${href}${label}`}
                href={href}
                className="block px-3 py-2 rounded-md text-base font-medium hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                setTheme(theme === "dark" ? "light" : "dark");
                toggleMenu();
              }}
              className="w-full text-left px-3 py-2 rounded-md text-base font-medium hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
            >
              Toggle Theme
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
