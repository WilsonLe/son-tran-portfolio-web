export type BlogData = {
  id: string;
  title: string;
  order: string;
  description: string;
  thumbnailURL: string;
  thumbnailAlt: string;
  htmlContent: string;
};

export type BlogHeaderData = Omit<BlogData, 'htmlContent'>;

export type BlogType = 'research' | 'personal';

export type PubType = 'journal' | 'technical' | 'conference';
