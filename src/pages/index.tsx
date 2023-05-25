import type { GetStaticProps, NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/Footer';
import Banner from '../components/Home/Banner';
import Nav from '../components/Nav';
import { FooterData } from '../models/footer';
import { HeaderData } from '../models/header';
import { HomeData } from '../models/home';
import getPayloadClient from '../payload/payloadClient';
import { Utils } from '../utils';

interface HomeProps {
  header: HeaderData;
  main: HomeData;
  footer: FooterData;
}

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const payload = await getPayloadClient();
  const [header, main, footer] = await Promise.all([
    Utils.fetchHeader(payload),
    Utils.fetchHome(payload),
    Utils.fetchFooter(payload),
  ]);
  return {
    props: {
      header,
      main,
      footer,
    },
  };
};

const Home: NextPage<HomeProps> = (props) => {
  return (
    <div>
      <Head>
        <title>{props.main.title}</title>
        <meta name="description" content={props.main.description} />
        <link rel="icon" href={props.main.favicon.src} />
      </Head>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <nav>
            <Nav {...props.header} />
          </nav>
          <main>
            <Banner {...props.main} />
          </main>
        </div>
        <footer className="bg-gray-800 text-white">
          <Footer {...props.footer} />
        </footer>
      </div>
    </div>
  );
};

export default Home;
