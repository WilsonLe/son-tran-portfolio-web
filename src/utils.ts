import { Payload } from 'payload';
import { FooterData } from './models/footer';
import { HeaderData } from './models/header';
import { HomeData } from './models/home';
import { PublicationMainData } from './models/publication-main';
import { Footer, Header, Home, Publication } from './payload-types';

export class Utils {
  public static async fetchHeader(payload: Payload): Promise<HeaderData> {
    let rawHeader: Header | undefined;

    try {
      rawHeader = await payload.findGlobal({ slug: 'header' });
    } catch (error) {
      rawHeader = undefined;
      console.error(error);
    }
    const header = HeaderData.parse(rawHeader);
    return header;
  }

  public static async fetchFooter(payload: Payload): Promise<FooterData> {
    let rawFooter: Footer | undefined;
    try {
      rawFooter = await payload.findGlobal({ slug: 'footer' });
    } catch (error) {
      rawFooter = undefined;
    }
    const footer = FooterData.parse(rawFooter);
    return footer;
  }

  public static async fetchHome(payload: Payload): Promise<HomeData> {
    let rawHome: Home | undefined;
    try {
      rawHome = await payload.findGlobal({ slug: 'home' });
      console.log(rawHome);
    } catch (error) {
      rawHome = undefined;
    }
    const homeData = HomeData.parse(rawHome);
    return homeData;
  }

  public static fetchPublication = async (
    payload: Payload
  ): Promise<PublicationMainData> => {
    let rawPublication: Publication | undefined;
    try {
      rawPublication = await payload.findGlobal({ slug: 'publications' });
      console.log(rawPublication);
    } catch (error) {
      rawPublication = undefined;
    }
    const articleMainData = PublicationMainData.parse(rawPublication);
    return PublicationMainData.parse(articleMainData);
  };
}
