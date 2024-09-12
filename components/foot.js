import Image from 'next/image';
import { useState } from 'react';

const Footer = () => {
  const [showGif, setShowGif] = useState(false);

  return (
    <footer className="flex justify-center items-center mt-4 h-24 dark:bg-gray-800 bg-white dark:text-white text-black">
      <div
        className="relative cursor-pointer"
        onMouseEnter={() => setShowGif(true)}
        onMouseLeave={() => setShowGif(false)}
      >
        <div className={`transition-opacity duration-300 ${showGif ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-lg">Made with ❤️ by Andrea</span>
        </div>
        <div className={`absolute inset-0 flex justify-center items-center transition-opacity duration-300 ${showGif ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/love.gif"
            alt=""
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
