import cloverlyProject from 'assets/images/projects-preview/cloverly.jpg';
import kovmangalProject from 'assets/images/projects-preview/kovmangal.jpg';
import zavkomEngineeringProject from 'assets/images/projects-preview/zavkomEngineering.jpg';
import { IProject, IWorkingExperience } from 'shared/types';

export const SKILLS = [
  'React',
  'Redux',
  'RTK',
  'MobX',
  'Effector',
  'SCSS',
  'Styled',
  'Material',
  'ES6',
  'TypeScript',
  'Apollo',
  'GraphQL',
  'Git',
  'Figma',
  'Agile',
  'NestJS',
  'Sequelize',
];

export const EXPERIENCE: IWorkingExperience[] = [
  {
    date: {
      from: 'May 2022',
      to: 'Currently',
    },
    company: 'Research institute "Spetsvuzavtomatika"',
    experience: [
      'Created themed web interfaces with React & MobX, Effector, Redux, RTK query.',
      'Refactored lots of code, participated in cross code review',
    ],
  },
  {
    date: {
      from: 'January 2022',
      to: 'May 2022',
    },
    company: 'LTD "South Gerion"',
    experience: [
      'Created layouts from Figma with React, scss and Material UI. Adapted UI and refined UX. Writed new features with TS and Apollo GraphQL.',
      'Worked with rtc: GraphQL subscriptions, socket.io, WebRTC',
      'Refactored and decomposed large components, fixed ton of ts any',
    ],
  },
];

export const PROJECTS: IProject[] = [
  {
    name: 'Kovmangal',
    description: 'Forged chargrill store',
    tags: ['Layout', 'HTML', 'SCSS', 'Gulp'],
    preview: kovmangalProject,
    metalinks: {
      deploy: 'https://dispersioned.github.io/web-kovmangal/',
      github: 'https://github.com/Dispersioned/web-kovmangal',
    },
  },
  {
    name: 'Zavkom Engineering',
    description: 'Company website',
    tags: ['Layout', 'HTML', 'SCSS', 'Gulp'],
    preview: zavkomEngineeringProject,
    metalinks: {
      deploy: 'https://dispersioned.github.io/web-zavkom-engineering/',
      github: 'https://github.com/Dispersioned/web-zavkom-engineering',
    },
  },
  {
    name: 'Cloverly',
    description: 'API platform to help neutralize carbon emissions',
    tags: ['Layout', 'HTML', 'SCSS', 'Gulp'],
    preview: cloverlyProject,
    metalinks: {
      deploy: 'https://dispersioned.github.io/web-cloverly/',
      github: 'https://github.com/Dispersioned/web-cloverly',
    },
  },
];
