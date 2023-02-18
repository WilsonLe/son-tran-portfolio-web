const config = {
  // navigation bar
  navBar: {
    // website logo, displayed on the top left
    logo: {
      // the logo url. "/logo.jpg" means in folder "public", file "logo.jpg"
      url: '/denison.jpg',

      // description of the logo. This is useful when the a reader fails to load the logo, this text will be displayed instead.
      alt: 'Son Tran',
    },

    // navigation bar buttons, displayed in top right
    buttons: [
      {
        // button text
        text: 'Home',

        // button link. This should not be changed.
        href: '/',
      },
      {
        // button text
        text: 'Publications',

        // button link. This should not be changed.
        href: '/publications',
      },
    ],
  },

  // footer, displayed on bottom
  footer: {
    // title displayed on the left of footer
    title: 'Get in touch',

    // infomation of the top left grid
    column: {
      // title for top left grid
      title: 'Son Tran',

      // text1 value
      email: 'tran_s2@denison.edu',

      // description of what text4 is. Useful for screen reader.
      institution: 'Denison University',
    },
  },

  // home page
  homePage: {
    // title displayed on a tab
    title: 'Son Tran Portfolio',

    // description of website. Useful for screen readers
    description: "Son Tran's portfolio",

    // home page banner config
    banner: {
      // header1 value
      header1: 'Portfolio',

      // header2 value
      header2: 'Son Tran',

      // paragraph1 value
      paragraphs: [
        'I am a third-year undergraduate student at Denison University.',

        'At Denison, my focus is on evaluating the robustness and reliability of machine reading comprehension models in the face of adversarial attacks. Besides, I am also researching in the intersectional biases present within Natural Language Understanding models, with the goal of uncovering potential issues and working towards their mitigation.',

        'At the UIT NLP Group, my research is centered around enriching the resources of Vietnamese Natural Language Processing, which involves publishing high-quality datasets and training large language models.',

        'I am also proud to serve as an undergraduate research assistant at both Denison University and the UIT NLP Group. Under the guidance of my advisors, Dr. Matt Kretchmar from Denison University and Professor Kiet Van Nguyen from the UIT NLP Group, I am engaged in two distinct areas of research.',
      ],
    },
  },

  // Publication page
  publications: {
    // Publication title
    title: 'Publications',
  },
};

export default config;
