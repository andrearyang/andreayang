import Link from 'next/link';
import { CgDarkMode } from 'react-icons/cg';
import { useTheme } from 'next-themes';

const links = [
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Resume", href: "/resume" },
  { label: "Contact", href: "/contact"},
];

export default function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="dark:text-white font-[Gill Sans]">
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
        <li>
          <Link href="/">
            <button className="focus:outline-none ml-5">
              <img src="/home.gif" alt="Andrea Yang GIF" className="w-18 h-16" />
            </button>
          </Link>
        </li>
        <ul className="mx-auto sm:mx-0 flex flex-row space-x-5">
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link
                href={href}
                className="font-inter px-4 py-2 rounded hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10"
              >
                {label}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={() => {
                setTheme(theme === 'dark' ? 'light' : 'dark');
              }}
              className="p-2 rounded-full hover:bg-black dark:hover:bg-white hover:bg-opacity-10 dark:hover:bg-opacity-10 transform duration-200"
            >
              <CgDarkMode size={24} />
            </button>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
