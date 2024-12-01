import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot';

export default function Blog() {
    const { theme, setTheme } = useTheme();
    
    return (
        <div className={`${theme === 'dark' ? 'dark' : ''} min-h-screen flex flex-col`}>
            <HeadObject>
                {/* You can put extra tags in here, or leave it blank */}
            </HeadObject>
            <Footer />
        </div>
    );
  }