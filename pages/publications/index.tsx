import fs from 'fs/promises';
import matter from 'gray-matter';
import { GetStaticProps, NextPage } from 'next';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import { remark } from 'remark';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import config from '../../config';

interface Props {
  htmlContent: string;
}

const getStaticProps: GetStaticProps = async () => {
  const fileContents = await fs.readFile('public/publications.md', 'utf8');

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeRaw)
    .use(rehypeStringify)
    .process(matterResult.content);
  const htmlContent = processedContent.toString();

  return {
    props: { htmlContent },
  };
};

const ConferenceProceedings: NextPage<Props> = ({ htmlContent }) => {
  return (
    <>
      <div className="min-h-screen flex flex-col justify-between">
        <div>
          <nav>
            <Nav />
          </nav>
          <main>
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
              <div className="pb-5 border-b border-gray-200">
                <h1 className="text-3xl leading-6 font-bold text-gray-900">
                  {config.publications.title}
                </h1>
              </div>
              <div
                id="pub-wrapper"
                dangerouslySetInnerHTML={{ __html: htmlContent }}
                className="my-4"
              />
            </div>
          </main>
        </div>
        <footer className="bg-gray-800 text-white">
          <Footer />
        </footer>
      </div>
    </>
  );
};

export { getStaticProps };
export default ConferenceProceedings;
