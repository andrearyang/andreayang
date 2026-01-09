import Link from 'next/link';
import { CgDarkMode } from 'react-icons/cg';
import { useTheme } from 'next-themes';

const links = [
  // { label: "blog", href: "/blog" },
];

export default function Nav() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="text-black font-inter">
      <ul className="flex flex-wrap sm:justify-between items-start sm:items-center p-8 mt-6 sm:mt-0">
        <li>
          <Link href="/">
            <button className="focus:outline-none ml-5">
              <img src="/home.gif" alt="Andrea Yang GIF" className="w-18 h-16" />
            </button>
          </Link>
        </li>
        {
        /* <ul className="mx-auto sm:mx-0 flex flex-row space-x-5">
          {links.map(({ href, label }) => (
            <li className="self-center" key={`${href}${label}`}>
              <Link
                href="/blog"
                className="font-inter px-4 py-2 rounded hover:bg-white hover:bg-opacity-10"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul> */
        }
      </ul>
    </nav>
  );
}
