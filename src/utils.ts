import { FooterData } from './models/footer';
import { HeaderData } from './models/header';
import { HomeData } from './models/home';
import { PublicationMainData } from './models/publication-main';

export class Utils {
  public static fetchHeader = async (): Promise<HeaderData> => {
    return HeaderData.parse(undefined);
  };

  public static async fetchFooter(): Promise<FooterData> {
    return FooterData.parse(undefined);
  }

  public static fetchHome = async (): Promise<HomeData> => {
    return HomeData.parse(undefined);
  };

  public static fetchPublication = async (): Promise<PublicationMainData> => {
    return PublicationMainData.parse(undefined);
  };
}
