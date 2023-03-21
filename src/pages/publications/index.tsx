import { GetStaticProps, NextPage } from 'next';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import { FooterData } from '../../models/footer';
import { HeaderData } from '../../models/header';
import { PublicationMainData } from '../../models/publication-main';
import { Utils } from '../../utils';

interface PublicationProps {
  header: HeaderData;
  main: PublicationMainData;
  footer: FooterData;
}

const getStaticProps: GetStaticProps = async () => {
  const [header, main, footer] = await Promise.all([
    Utils.fetchHeader(),
    Utils.fetchPublication(),
    Utils.fetchFooter(),
  ]);
  return {
    props: {
      header,
      main,
      footer,
    },
  };
};

const Publications: NextPage<PublicationProps> = (props) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <nav>
            <Nav {...props.header} />
          </nav>
          <main>
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
              <div className="pb-5 border-b border-gray-200">
                <h1 className="text-3xl leading-6 font-bold text-gray-900">
                  {props.main.title}
                </h1>
              </div>
              <div className="pub-wrapper my-4">
                {props.main.publications.map((publication, i) => (
                  <div
                    key={i}
                    dangerouslySetInnerHTML={{ __html: publication.content }}
                  />
                ))}
              </div>
            </div>
          </main>
        </div>
        <footer className="bg-gray-800 text-white">
          <Footer {...props.footer} />
        </footer>
      </div>
    </>
  );
};

export { getStaticProps };
export default Publications;
