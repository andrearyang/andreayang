import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Nav from '../components/nav';
import Footer from '../components/foot';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <div className="min-h-screen flex flex-col">
                <Nav />

                <main className="flex-grow">
                    <Component {...pageProps} />
                </main>

            </div>
        </ThemeProvider>
    );
}

export default MyApp;
