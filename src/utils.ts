import { Config } from './config';
import { FooterData } from './models/footer';
import { HeaderData } from './models/header';
import { HomeData } from './models/home';
import { PublicationMainData } from './models/publication-main';

export class Utils {
  public static async fetchHeader(): Promise<HeaderData> {
    let rawHeader: unknown = undefined;
    try {
      const res = await fetch(`${Config.cmsHost}/api/header?populate=deep`, {
        headers: { Authorization: `Bearer ${Config.cmsToken}` },
      });
      const body = await res.json();
      rawHeader = {
        logo: {
          src: body.data.attributes.logo.data.attributes.url,
          alt: body.data.attributes.logo.data.attributes.alternativeText,
        },
        navigations: body.data.attributes.navigations,
      };
    } catch (error) {
      console.error(error);
    }
    const header = HeaderData.parse(rawHeader);
    return header;
  }

  public static async fetchFooter(): Promise<FooterData> {
    let rawFooter: unknown = undefined;
    try {
      const res = await fetch(`${Config.cmsHost}/api/footer?populate=deep`, {
        headers: { Authorization: `Bearer ${Config.cmsToken}` },
      });

      const body = await res.json();

      rawFooter = { columns: body.data.attributes.columns };
    } catch (error) {
      console.error(error);
    }
    const footer = FooterData.parse(rawFooter);
    return footer;
  }

  public static async fetchHome(): Promise<HomeData> {
    let rawHome: unknown = undefined;
    try {
      const res = await fetch(`${Config.cmsHost}/api/home?populate=deep`, {
        headers: { Authorization: `Bearer ${Config.cmsToken}` },
      });

      const body = await res.json();

      rawHome = {
        title: body.data.attributes.title,
        description: body.data.attributes.description,
        favicon: {
          src: body.data.attributes.favicon.data.attributes.url,
          alt: body.data.attributes.favicon.data.attributes.alternativeText,
        },
        primaryHeader: body.data.attributes.primaryHeader,
        secondaryHeader: body.data.attributes.secondaryHeader,
        content: body.data.attributes.content,
        buttonText: body.data.attributes.buttonText,
        downloadFile: body.data.attributes.downloadFile.data.attributes.url,
        profilePicture: {
          src: body.data.attributes.profilePicture.data.attributes.url,
          alt: body.data.attributes.profilePicture.data.attributes
            .alternativeText,
        },
      };
    } catch (error) {
      console.error(error);
    }

    const homeData = HomeData.parse(rawHome);

    return homeData;
  }

  public static fetchPublication = async (): Promise<PublicationMainData> => {
    let rawPublicationMainData: unknown = undefined;

    try {
      const res = await fetch(
        `${Config.cmsHost}/api/publication-main?populate=deep`,
        {
          headers: { Authorization: `Bearer ${Config.cmsToken}` },
        }
      );

      const body = await res.json();

      rawPublicationMainData = {
        title: body.data.attributes.title,
        publications: body.data.attributes.publications?.data?.map(
          (publication: any) => ({
            content: publication.attributes.content,
          })
        ),
      };
    } catch (error) {
      console.error(error);
    }

    const articleMainData = PublicationMainData.parse(rawPublicationMainData);

    return PublicationMainData.parse(articleMainData);
  };
}
