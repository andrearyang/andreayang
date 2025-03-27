import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot'; // Update the import path if needed

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col`}>
      <HeadObject>
        {}
      </HeadObject>

      <div className="flex flex-row p-6 text-white font-bold text-7xl items-center justify-center flex-1">
        <div className="flex-1 flex flex-col ml-5 mr-55 justify-between h-full">
          <h1 className="absolute flex-1">Hi! I'm Andrea.</h1>
          <br />
          <div className="relative font-normal text-gray-gray text-xl mt-8 mr-10">
            <h2>
              I explore{' '}
              <a
                href="https://example.com"
                className="hover:underline underline-offset-4 decoration-solid decoration-4 decoration-green-green text-white"
              >
                computation as a bridge to understanding complex biological systems, 
              </a>{' '}
              using quantitative genetics to advance disease treatment. My work is driven by a fundamental curiosity about how we can use computation to reveal patterns, optimize complexity, and ultimately expand what is possible in science and medicine with technology.{' '}
            </h2>

            <h3> Beyond research, I'm deeply interested in {' '}
              <a
                href="/cells"
                className="hover:underline decoration-bright-green decoration-wavy underline-offset-4 decoration-4 text-white"
              >
                advocacy for accessible education in computational fields
              </a>
              &nbsp;and ensuring that knowledge, tools, and healthcare are equitably available to all.
            </h3>

            <h2>
              I'm continually building, making, questioning, and learning. Feel free to explore my work or reach out—I'd love to share what I've been thinking about.
            </h2>
          </div>

          <div className="font-semibold  text-light-light text-3xl mt-8">
            <h1>See you around!</h1>
          </div>

          <div className="mt-5"> 
            <h3 className="text-[0.9rem] text-extralight italic text-sm text-light-light"> p.s. i wasn't joking when i said i'd love to talk to you; reach me at andrea [at] andrearyang.com for any occasion.</h3>
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
