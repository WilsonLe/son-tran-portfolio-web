import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Banner from '../components/Home/Banner';
import Nav from '../components/Nav';
import config from '../config';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>{config.homePage.title}</title>
        <meta name="description" content={config.homePage.description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <nav>
            <Nav />
          </nav>
          <main>
            <Banner />
          </main>
        </div>
        <footer className="bg-gray-800 text-white">
          <Footer />
        </footer>
      </div>
    </div>
  );
};

export default Home;
