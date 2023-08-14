import { Typography } from '@mui/material';
import loveIcon from 'assets/icons/love.svg';
import cloverlyProject from 'assets/images/projects-preview/cloverly.jpg';
import kovmangalProject from 'assets/images/projects-preview/kovmangal.jpg';
import zavkomEngineeringProject from 'assets/images/projects-preview/zavkomEngineering.jpg';
import { EducationCard } from 'components/education-card';
import { Layout } from 'components/layout';
import { ProjectCard } from 'components/project-card';
import { WorkCard } from 'components/work-card';
import { motion } from 'framer-motion';

import { Location } from './Location';
import { Socials } from './Socials';
import { Content, ProjectList, Projects, Skill, Skills, SocialLink } from './styles';

export function Home() {
  const skills = [
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

  const workedWith = ['Redux Saga', 'NextJS', 'Gulp'];

  return (
    <Layout>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7 }}>
        <Content>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 15,
            }}
          >
            <div>
              <Typography variant="h3">Maxim Khan</Typography>
              <Typography fontWeight={600}>Frontend react developer</Typography>
            </div>
            <div
              style={{
                display: 'flex',
                gap: 15,
              }}
            >
              <Location />
              <Socials />
            </div>
          </div>
          <div>
            <Typography variant="h5">Skills</Typography>
            <Skills>
              {skills.map((skill) => (
                <Skill key={skill} label={skill} />
              ))}
            </Skills>
          </div>
          <div>
            <Typography variant="h5">Worked a bit with</Typography>
            <Skills>
              {workedWith.map((skill) => (
                <Skill key={skill} label={skill} />
              ))}
            </Skills>
          </div>
          <div>
            <Typography variant="h5">Working Experience</Typography>
            <WorkCard
              date={{
                from: 'May 2022',
                to: 'Currently',
              }}
              company='Research institute "Spetsvuzavtomatika"'
              experience={[
                'Created themed web interfaces with React & MobX, Effector, Redux, RTK query.',
                'Refactored lots of code, participated in cross code review',
              ]}
            />
            <WorkCard
              date={{
                from: 'January 2022',
                to: 'May 2022',
              }}
              company='LTD "South Gerion"'
              experience={[
                'Created layouts from Figma with React, scss and Material UI. Adapted UI and refined UX. Writed new features with TS and Apollo GraphQL.',
                'Worked with rtc: GraphQL subscriptions, socket.io, WebRTC',
                'Refactored and decomposed large components, fixed ton of ts any',
              ]}
            />
          </div>
          <div>
            <Typography variant="h5">About me</Typography>
            <Typography>Able to create adaptive, semantic layout of any complexity.</Typography>
            <Typography>Know OOP, SOLID and data structures. Learning algorithms.</Typography>
            <Typography>Built few simple CRUD backends with NestJS, Sequelize and Postgres.</Typography>
            <Typography component="div" style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              Absolutely
              <img src={loveIcon} alt="#" style={{ width: 30, height: 30 }} />
              typescript, games and mechanic keyboards.
            </Typography>
          </div>
          <div>
            <Typography variant="h5">Education</Typography>
            <EducationCard
              date={{
                from: '2020',
                to: '2024',
              }}
              name="Don State Technical University"
              specialization="Bachelor Computer Science"
            />
          </div>

          <Projects>
            <Typography variant="h5">Projects</Typography>
            <ProjectList>
              <ProjectCard
                name="WebRTC video chat"
                description="Reworked fork. Tried to improve abilities of complex async logic in react flow through refs without stm"
                tags={['React', 'TypeScript', 'Material UI']}
                deployLink="https://dispersioned.github.io/video-chat-webrtc/"
                githubLink="https://github.com/Dispersioned/video-chat-webrtc"
                info="backend offline"
              />
              <ProjectCard
                name="Kovmangal"
                description="Forged chargrill store"
                tags={['Layout', 'HTML', 'SCSS', 'Gulp']}
                imgSrc={kovmangalProject}
                deployLink="https://dispersioned.github.io/web-kovmangal/"
                githubLink="https://github.com/Dispersioned/web-kovmangal"
              />
              <ProjectCard
                name="Zavkom Engineering"
                description="Company website"
                tags={['Layout', 'HTML', 'SCSS', 'Gulp']}
                imgSrc={zavkomEngineeringProject}
                deployLink="https://dispersioned.github.io/web-zavkom-engineering/"
                githubLink="https://github.com/Dispersioned/web-zavkom-engineering"
              />
              <ProjectCard
                name="Cloverly"
                description="API platform to help neutralize carbon emissions"
                tags={['Layout', 'HTML', 'SCSS', 'Gulp']}
                imgSrc={cloverlyProject}
                deployLink="https://dispersioned.github.io/web-cloverly/"
                githubLink="https://github.com/Dispersioned/web-cloverly"
              />
            </ProjectList>
          </Projects>
        </Content>
      </motion.div>
    </Layout>
  );
}
