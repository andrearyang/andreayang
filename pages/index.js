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
        <div className="max-w-screen-lg flex flex-col ml-5 lg:mr-55"> <br></br>
          <h1 className="mb-2 lg:mb-4">Andrea Yang</h1>
          <div className="font-normal text-black text-lg mt-2 lg:mt-4 mr-10">
            <h2>
              I explore{' '}
              <a
                href="/cell"
                className="underline underline-offset-4 decoration-solid decoration-2 decoration-dark-green text-dark-green"
              >
                AI/ML & computation 
              </a>{' '}
              as a bridge to understanding complex biological systems. Beyond theory, I'm deeply interested in advocacy for {' '}
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
              </a> •{' '}

              <a href="https://open.spotify.com/user/ombujdfrcgap0rdbh3f6y0m0t?si=e83e2f0ebb5840c8"
                className="underline underline-offset-4 decoration-solid decoration-3 decoration-dark-green text-dark-green" >
                Spotify
              </a> •{' '}

              <a href="https://x.com/andrearyang"
                className="underline underline-offset-4 decoration-solid decoration-3 decoration-dark-green text-dark-green" >
                X
              </a> 
              <div className="mt-5 text-left">
                <img src="/signature.png" alt="Andrea Yang Signature" className="w-48 h-auto" />
                <p className="text-xs text-gray-400 italic mt-1 tracking-wider">joie de vivre!</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
