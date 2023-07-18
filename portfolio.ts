import emoji from 'react-easy-emoji';
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from './types/sections';

export const greetings: GreetingsType = {
  name: 'Binh Nguyen',
  title: "Hi all, I'm Binh",
  descriptions: [
      "I'm passionate Full Stack web developer having an experience of web applications " +
      "with PHP, Ruby, NestJS, React.js, Next.js, VueJs. ",
      "I've worked as web developer for 8 years already. And 6 years for leading development team." +
      " I have strong knowledge of the PHP, OOP, Javascript and how identify and implements\n" +
      "most common design pattern.",
      "I am open to learn and implement any new technologies"
  ],

  resumeLink:
    'https://drive.google.com/file/d/1Mdlrxw67Sys4mgJmBUZMhSVurN5GP3St/view?usp=sharing',
};

export const openSource = {
  githubUserName: 'siri2moon',
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  url: 'https://siri2moon.github.io/',
  linkedin: 'https://www.linkedin.com/in/siri2moon/',
  github: 'https://github.com/siri2moon',
  instagram: 'https://www.instagram.com/siri2moon',
  facebook: 'https://www.facebook.com/binhnguyenit',
};

export const skillsSection: SkillsSectionType = {
  title: 'What I do',
  subTitle: 'CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  data: [
    {
      title: 'Full Stack Development',
      lottieAnimationFile: '/lottie/skills/fullstack.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building responsive Single-Page-Apps (SPA) & PWA in React.js'
        ),
        emoji('⚡ Building responsive static websites using Next.js'),
        emoji('⚡ Building RESTful APIs in PHP & Ruby & NestJS REST Framework'),
      ],
      softwareSkills: [
        {
          skillName: 'HTML-5',
          fontAwesomeClassName: 'vscode-icons:file-type-html',
        },
        {
          skillName: 'CSS-3',
          fontAwesomeClassName: 'vscode-icons:file-type-css',
        },
        {
          skillName: 'JavaScript',
          fontAwesomeClassName: 'logos:javascript',
        },
        {
          skillName: 'Reactjs',
          fontAwesomeClassName: 'vscode-icons:file-type-reactjs',
        },
        {
          skillName: 'Nextjs',
          fontAwesomeClassName: 'vscode-icons:file-type-light-next',
        },
        {
          skillName: 'Ruby',
          fontAwesomeClassName: 'logos:ruby',
        },
        {
          skillName: 'PHP',
          fontAwesomeClassName: 'logos:php',
        },
        {
          skillName: 'NestJs',
          fontAwesomeClassName: 'logos:nestjs',
        },

        {
          skillName: 'Redux',
          fontAwesomeClassName: 'logos:redux',
        },
        {
          skillName: 'NPM',
          fontAwesomeClassName: 'logos:npm-icon',
        },
        {
          skillName: 'Yarn',
          fontAwesomeClassName: 'logos:yarn',
        },
      ],
    },
    {
      title: 'Cloud Infra-Architecture',
      lottieAnimationFile: '/lottie/skills/cloudinfra.json', // Path of Lottie Animation JSON File
      skills: [
        emoji('⚡ Experience of working on multiple cloud platforms'),
        emoji(
          '⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases'
        ),
        emoji(
          '⚡ Building CI/CD pipelines for automated testing & deployment using Github Actions'
        ),
      ],
      softwareSkills: [
        // ? Check README To get icon details
        {
          skillName: 'AWS',
          fontAwesomeClassName: 'logos:aws',
        },
        {
          skillName: 'Azure',
          fontAwesomeClassName: 'logos:microsoft-azure',
        },
        {
          skillName: 'Heroku',
          fontAwesomeClassName: 'logos:heroku-icon',
        },
        {
          skillName: 'PostgreSQL',
          fontAwesomeClassName: 'logos:postgresql',
        },
        {
          skillName: 'Github',
          fontAwesomeClassName: 'akar-icons:github-fill',
        },
        {
          skillName: 'Docker',
          fontAwesomeClassName: 'logos:docker-icon',
        },
        {
          skillName: 'Github Actions',
          fontAwesomeClassName: 'logos:github-actions',
        },
        {
          skillName: 'Cloudinary',
          fontAwesomeClassName: 'logos:cloudinary',
        },
        {
          skillName: 'Nginx',
          fontAwesomeClassName: 'logos:nginx',
        },
        {
          skillName: 'Sentry',
          fontAwesomeClassName: 'logos:sentry-icon',
        },
      ],
    },
    {
      title: 'Blockchain',
      lottieAnimationFile: '/lottie/skills/ethereum.json', // Path of Lottie Animation JSON File
      skills: [
        emoji(
          '⚡ Building Dapps with React.js & Solidity using Web3.js'
        ),
      ],
      softwareSkills: [
        {
          skillName: 'Solidity',
          fontAwesomeClassName: 'logos:solidity',
        },
        {
          skillName: 'Web3js',
          fontAwesomeClassName: 'logos:web3js',
        },
        {
          skillName: 'Metamask',
          fontAwesomeClassName: 'logos:metamask-icon',
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: 'Frontend/Design', //Insert stack or technology you have experience in
    progressPercentage: '80', //Insert relative proficiency in percentage
  },
  {
    Stack: 'Backend',
    progressPercentage: '90',
  },
  {
    Stack: 'Programming',
    progressPercentage: '70',
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: 'Danang University of Education',
    subHeader: 'Bachelor of Information Technology',
    duration: 'September 2011 - April 2015',
    desc: 'I graduated in bachelor of Information Technology',
    grade: 'Grade A',
    descBullets: [
      'PHP developer',
      'Javascript developer',
    ],
  },
];

export const experience: ExperienceType[] = [
  {
    role: 'Team Manager and Scrum master',
    company: 'NEOLAB Vietnam',
    companyLogo: '/img/exp/neolab.png',
    date: 'Aug 2016 – May 2023',
    desc: 'Worked closely with senior developer and learned advanced project management skills',
    descBullets: [
    	"Manage web project with 15 - 20 members as Team manager position",
    	"Meet with PO to gather requirements, design site, and outline schedules.",
    	"Training fresher",
    ],
  },
  {
    role: 'Wordpress developer',
    company: 'NTC Solutions Company',
    companyLogo: '/img/exp/wp.png',
    date: 'Apr 2016 – Jul 2016',
    desc: 'This is startup company. Building websites with wordpress CMS.\n' +
        'Designed websites for clients on a contact basic',
  },
  {
    role: 'Junior Software Engineer',
    company: 'FPT Software Danang',
    companyLogo: '/img/exp/fpt.png',
    date: 'Otc 2015 - Mar 2016',
    desc: 'Worked at FPT Software company with Japanese customers. Developed project scope and created concepts\n' +
        'Maintained schedules and assured on-time delivery of content',
  },
  {
    role: 'Teacher',
    company: 'VinaEnter',
    companyLogo: '/img/exp/vinaenter.png',
    date: 'Jul 2014 - Oct 2015',
    desc: 'Join teaching at the VinaEnter Center with PHP training courses and Java web training courses\n',
  },
];

export const projects: ProjectType[] = [
  {
    name: 'Please take a look at my CV',
    desc: '',
    link: greetings.resumeLink,
  }
];

export const feedbacks: FeedbackType[] = [];

// option to hide or show the ContactUs component
export const showContactUs: boolean = false;

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: 'Binh Nguyen',
  description:
    'A passionate Full Stack Web Developer and Team manager.',
  author: 'Binh Nguyen',
  image: 'https://avatars.githubusercontent.com/u/18733630?v1',
  url: 'http://siri2moon.github.io',
  keywords: [
    'Binh',
    'Binh Nguyen',
    'siri2moon',
    'binhnguyen.it',
    'Binh IT Da Nang',
    'Portfolio',
    'Binh Nguyen Portfolio ',
    'Binh Portfolio',
  ],
};
