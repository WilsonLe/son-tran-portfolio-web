import { z } from 'zod';
import { ImageData } from './image';
import { LinkData } from './link';
import { NonEmptyString } from './nonEmptyString';

export const HomeData = z
  .object({
    title: NonEmptyString,
    description: NonEmptyString,
    favicon: ImageData,
    primaryHeader: NonEmptyString,
    secondaryHeader: NonEmptyString,
    content: NonEmptyString,
    button: LinkData,
    profilePicture: ImageData,
  })
  .default({
    title: 'Son Tran Portfolio',
    description: "Son Tran's portfolio",
    favicon: { src: '/favicon.ico', alt: null },
    primaryHeader: 'PORTFOLIO',
    secondaryHeader: 'Son Tran',
    content: `
<p>
	I am a third-year undergraduate student at Denison University.
</p>
<br>
<p>
	At Denison, my focus is on evaluating the robustness and reliability of machine reading comprehension models in the face of adversarial attacks. Besides, I am also researching in the intersectional biases present within Natural Language Understanding models, with the goal of uncovering potential issues and working towards their mitigation.
</p>
<br>
<p>
	At the UIT NLP Group, my research is centered around enriching the resources of Vietnamese Natural Language Processing, which involves publishing high-quality datasets and training large language models.
</p>
<br>
<p>
	I am also proud to serve as an undergraduate research assistant at both Denison University and the UIT NLP Group. Under the guidance of my advisors, Dr. Matt Kretchmar from Denison University and Professor Kiet Van Nguyen from the UIT NLP Group, I am engaged in two distinct areas of research.
</p>
<br>
`,
    button: {
      href: '/pdf/cv.pdf',
      text: 'Curriculum Vitae',
    },
    profilePicture: {
      src: '/images/profile-picture.jpg',
      alt: 'Son Tran profile picture',
    },
  });

export type HomeData = z.infer<typeof HomeData>;
