import { ThemeProvider } from 'next-themes';
import '../styles/globals.css';
import Nav from '../components/nav';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
    return (
        <ThemeProvider attribute="class">
            <Layout>
                <div className="min-h-screen flex flex-col">
                    <Nav />
                    <main className="flex-grow">
                        <Component {...pageProps} />
                    </main>
                </div>
            </Layout>
        </ThemeProvider>
    );
}

export default MyApp;
