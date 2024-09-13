import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot'; // Update the import path if needed

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen flex flex-col`}>
      <HeadObject>
        {/* You can put extra tags in here, or leave it blank */}
      </HeadObject>
      <Nav />
      <div className="flex flex-row p-6 text-light-text font-bold text-7xl items-center justify-center flex-1">
        <div className="flex-1 flex flex-col ml-5 mr-55 justify-between h-full">
          <h1 className="absolute flex-1">Hi! I'm Andrea.</h1>
          <br />
          <div className="relative font-normal text-white-gray dark:text-gray-gray text-xl mt-8 mr-10">
            <h2>
              I'm a 16 year old hacker from California. I like{' '}
              <a
                href="https://example.com"
                className="hover:underline underline-offset-4 decoration-solid decoration-4 dark:decoration-green-green decoration-bright-green dark:text-light-light text-dark-green"
              >
                computers
              </a>{' '}
              and{' '}
              <a
                href="/cells"
                className="hover:underline dark:decoration-bright-green decoration-green-green decoration-wavy underline-offset-4 decoration-4 dark:text-white text-dark-green"
              >
                cells.
              </a>
            </h2>
            <br />
            <h2>
              Accessible education is really important to me. I also strongly believe in pursuing math and making as an art.
            </h2>
            <h2>
              I'm currently building related projects and research! Check out the other tabs to see what I've been up to.
            </h2>
            <br />
            <h3>
              Outside of that, I'm an ardent lover of Studio Ghibli, Stardew Valley, Nintendo, and boba. I find any and all things fascinating, and I'm always happy to share a good conversation with someone. Thanks for visiting!
            </h3>
          </div>
          <div className="font-semibold text-dark-green dark:text-light-light text-3xl mt-8">
            <h1>See you around!</h1>
          </div>
          <div className="mt-5"> 
            <h3 className="text-[0.9rem] text-extralight italic text-sm text-dark-green dark:text-light-light"> p.s. i wasn't joking when i said i'd love to share a convo with you! reach me at andrea [at] andrearyang.com for any occasion.</h3>
          </div>
        </div>

        <div className="flex flex-row flex-1 ml-40 h-[500px] space-x-10">
          <div className="relative group bg-gray-200 dark:bg-gray-700 rounded-lg p-6 ml-[-90px]">
            <img
              className="h-full rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105"
              src="/kodaka.jpg"
              alt="Kodaka"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 rounded-lg">
              <span className="text-white text-[3.45rem] p-6 text-extralight">Kodama from Princess Mononoke, a Ghibli film!</span>
              <a href="https://example.com" className="text-sm text-light-green mt-2">Why kodama?</a>
            </div>
          </div>

          <div className="relative group bg-gray-200 dark:bg-gray-700 rounded-lg p-6">
            <img
              className="h-full rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105"
              src="/zeldaish.png"
              alt="Zeldaish"
            />
            <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-75 rounded-lg">
              <span className="text-white text-[3.45rem] p-3">Forest at night in Breath of the Wild.</span>
              <a href="https://example.com" className="text-sm text-light-green mt-2">Why?</a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
