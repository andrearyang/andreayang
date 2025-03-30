import HeadObject from '../components/head';
import Nav from '../components/nav';
import { useTheme } from 'next-themes';
import Footer from '../components/foot';

export default function Blog() {
    const { theme, setTheme } = useTheme();
    
    return (
        <div className={` min-h-screen flex flex-col`}>
            <HeadObject>
            </HeadObject>
                <div>
                    <h1 className={'flex flex-row p-6 text-black font-bold text-6xl items-center flex-1'}>a bryophyte's blog</h1>
                </div>
            <Footer />
        </div>
    );
  }