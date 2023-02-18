import config from '../config';
export default function Footer() {
  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
      <div className="lg:grid lg:grid-cols-3 lg:gap-8">
        <h2 className="text-2xl font-extrabold sm:text-3xl">
          {config.footer.title}
        </h2>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
          <div>
            <h3 className="text-lg leading-6 font-medium">
              {config.footer.column.title}
            </h3>
            <p className="mt-1">
              <a href={config.footer.column.email}>
                {config.footer.column.email}
              </a>
            </p>
            <p>{config.footer.column.institution}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
