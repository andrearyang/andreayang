import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot';

export default function Contact() {
    const { theme, setTheme } = useTheme();
    
    return (
        <div className={`min-h-screen flex flex-col`}>
            <HeadObject>

            </HeadObject>
            <Footer />
        </div>
    );
  }