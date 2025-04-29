export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Dr. Neal Mesnick',
    position: 'Founder at Advanced Sports Medicine and Rehabilitation',
    img: 'assets/neil.png',
    review:
      'Working with Max transformed our online presence. He took the time to understand our business and created a website that not only looks great but actually brings in new customers. The whole process was straightforward and worth every penny.',
  },
  {
    id: 2,
    name: 'David Finegan',
    position: 'Founder at Whale Creek Co.',
    img: 'assets/dave.jpg',
    review:
      'Max took our business vision and translated it into a compelling investment narrative. The pitch deck they created wasn’t just visually stunning—it told our story with clarity and conviction, helping us secure the funding we needed to take Whale Creek to the next level.',
  },
  {
    id: 3,
    name: 'Raj Gupta',
    position: 'Visual Artist at Alchemy RG ',
    img: 'assets/raj.jpg',
    review:
      'Max understood exactly what I needed as an artist. He created a portfolio that not only showcases my work beautifully but gives me complete control over how it’s organized and presented. The system is intuitive enough that I can manage everything myself, which was essential to me.',
  },
  {
    id: 4,
    name: 'Lauryn Geimer',
    position: 'Personal Assistant to Dee Wallace ',
    img: 'assets/deelogo.png',
    review:
      'Max made our life so much easier by truly listening to our needs and taking the right steps to improving our site. He is kind, energetic and true to his word. It can be hard to find people who really care about your work and know how to actually help improve it, so we’re beyond thrilled to be working with him.',
  },
];

export const myProjects = [
  {
    title: 'Pax Media - Web Development Agency',
    desc: 'Pax Media is a digital agency that crafts clean websites and implements smart SEO strategies for small businesses.',
    subdesc:
      'Built as a business website with HTML, CSS , Podcastr is designed for optimal performance and user experience.',
    href: 'https://pax.media/',
    texture: '/textures/project/paxmediasitescroll.mp4',
    logo: '/assets/paxMediaLogo.png',
    logoStyle: {
      // backgroundColor: '#2A1816',
      // border: '0.2px solid #36201D',
      // boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'JavaScript',
        path: '/assets/jsicon.png',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/cssicon.png',
      },
    ],
  },
  {
    title: 'Alchemy RG - Artist Portfolio Website with Sanity Studio CMS',
    desc: 'Raj Gupta, a retired finance professional pursuing an MFA at the School of Visual Arts, needed a portfolio site that would showcase his diverse body of work while being easy to update and maintain himself.',
    subdesc:
      'Raj needed complete control over his portfolio content with the ability to organize work into nested collections and easily update pieces as his body of work expanded. We implemented Sanity CMS with a custom recursive tree structure that allows for unlimited nesting of portfolios, creating an intuitive organization system thats both powerful and easy to use.',
    href: 'https://alchemy-rg.vercel.app/',
    texture: '/textures/project/rajVideo.mp4',
    logo: '/assets/rajIcon.png',
    logoStyle: {
      // backgroundColor: '#13202F',
      // border: '0.2px solid #17293E',
      // boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: '/assets/nexticonwhite.png',
      },
      {
        id: 2,
        name: 'Sanity Studio',
        path: 'assets/sanityicon.png',
      },
      {
        id: 3,
        name: 'CSS',
        path: '/assets/cssicon.png',
      },
    ],
  },
  {
    title: 'Dee Wallace - Celebrity E Commerce',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/deelogo.png',
    logoStyle: {
      // backgroundColor: '#60f5a1',
      // background:
      //   'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      // border: '0.2px solid rgba(208, 213, 221, 1)',
      // boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Pax Media',
    pos: 'Webmaster',
    duration: '2025 - Present',
    title:
      'As architect, designer and developer, implemented responsive, high-performance websites and browser-based tools that enhance business operations for local entrepreneurs and creators.',
    icon: '/assets/paxMediaLogo.png',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Wunderkind',
    pos: 'Manager - Professional Services',
    duration: 'August 2024 - Dec 2024',
    title:
      'Oversaw a 10-person international team throughout the Wunderkind platforms service delivery lifecycle. The team, composed of implementation managers, engineers, designers, product integrity analysts, and offshore contractors, collaborated on new client onboardings and the expansion of existing client services.',
    icon: '/assets/Wunderkind_Logo.jpg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Wunderkind',
    pos: 'Software Engineer',
    duration: 'March 2021 - August 2024',
    title:
      'Coded in Python, JavaScript, and Go to migrate data, ensuring over 500 email and text campaigns were seamlessly delivered across 80+ live clients.',
    icon: '/assets/Wunderkind_Logo.jpg',
    animation: 'salute',
  },
];
