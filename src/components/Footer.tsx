import { FooterData } from '../models/footer';

export default function Footer(props: FooterData) {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
          {props.columns.map((column, i) => (
            <div
              key={i}
              className="footer-column"
              dangerouslySetInnerHTML={{
                __html: column.content ? column.content : '',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
