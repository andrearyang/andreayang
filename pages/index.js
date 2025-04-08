import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot'; // Update the import path if needed

export default function Home() {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`flex flex-col`}>
      <HeadObject>
        {}
      </HeadObject>

      <div className="flex flex-col lg:flex-row p-6 text-black font-bold text-4xl sm:text-5xl lg:text-6xl justify-center">
        <div className="max-w-screen-lg flex flex-col ml-5 lg:mr-55">
          <h1 className="mb-2 lg:mb-4">Hi! I'm Andrea.</h1>
          <div className="font-normal text-black text-lg mt-2 lg:mt-4 mr-10">
            <h2>
              I explore{' '}
              <a
                href="https://example.com"
                className="underline underline-offset-4 decoration-solid decoration-2 decoration-dark-green text-dark-green"
              >
                AI/ML & computation 
              </a>{' '}
              as a bridge to understanding complex systems. My work is driven by a fundamental curiosity about how we can use computation to reveal patterns, optimize complexity, and ultimately expand what is possible in science with technology. Beyond theory, I'm deeply interested in advocacy for {' '}
              <a
                href="/cells"
                className="underline decoration-dark-green decoration-solid underline-offset-4 decoration-2 text-dark-green"
              >
                accessible education in computational fields
              </a>
              &nbsp;and ensuring that knowledge, tools, and healthcare are equitably available to all.
            </h2>
            <h2 className="mt-4">
              I'm continually building, making, questioning, and learning. Feel free to explore my work or reach out—I'd love to share what I've been thinking about.
            </h2>
            <div className="mt-4">
              <a
                href="mailto:andrea@andrearyang.com"
                className="underline underline-offset-4 decoration-solid decoration-3 decoration-dark-green text-dark-green"
              >
                Email
              </a> •{' '}
              <a
                href="https://github.com/andrearyang"
                className="underline underline-offset-4 decoration-solid decoration-3 decoration-dark-green text-dark-green"
              >
                GitHub
              </a> •{' '}
              <a
                href="https://andreaeaceae.substack.com"
                className="underline underline-offset-4 decoration-solid decoration-3 decoration-dark-green text-dark-green"
              >
                Substack
              </a>

              <div className="mt-5 text-left">
                <img src="/signature.png" alt="Andrea Yang Signature" className="w-48 h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
