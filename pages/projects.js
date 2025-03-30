import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot';

export default function Projects() {
    const { theme, setTheme } = useTheme();
    
    return (
        <div className="min-h-screen flex flex-col">
          <HeadObject />
          <div className="flex flex-col items-center mt-8 p-6">
            {/* Title Section */}
            <h1 className="text-black font-bold text-6xl">projects</h1>
            <h2 className="text-white-gray text-xl italics mt-2">
              how and where i've spent my time
            </h2>
            <br></br>
            <div>
                <h1></h1>
            </div>
          </div>
    
          <Footer />
        </div>
    );
  }