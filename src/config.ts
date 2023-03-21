export class Config {
  public static readonly cmsToken = process.env.CMS_TOKEN;
  public static readonly cmsHost =
    process.env.CMS_HOST ?? 'http://localhost:1337';
  public static readonly cmsWebhookToken = process.env.CMS_WEBHOOK_TOKEN;
}
