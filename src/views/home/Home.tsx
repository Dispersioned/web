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

import { Email } from './Email';
import { Location } from './Location';
import { Socials } from './Socials';
import { Content, ProjectList, Projects, Skill, Skills } from './styles';
import { EXPERIENCE, SKILLS } from 'config/myself';

export function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, top: -30 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.7 }}
        style={{ position: 'relative' }}>
        <Content>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 15,
            }}>
            <div>
              <Typography variant='h3'>Maxim Khan</Typography>
              <Typography fontSize={20} fontWeight={600} textTransform='capitalize'>
                Frontend developer
              </Typography>
              <div
                style={{
                  display: 'flex',
                  gap: 20,
                  marginTop: 20,
                }}>
                <Location location='Russia, Rostov-on-Don' />
                <Email email='rocketgo1672@gmail.com' />
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                gap: 15,
              }}>
              <Socials />
            </div>
          </div>
          <div>
            <Typography variant='h5'>Skills</Typography>
            <Skills>
              {SKILLS.map((skill) => (
                <Skill key={skill} label={skill} />
              ))}
            </Skills>
          </div>
          <div>
            <Typography variant='h5'>Working Experience</Typography>
            {EXPERIENCE.map((experience, index) => (
              <WorkCard key={index} experience={experience} />
            ))}
          </div>
          <div>
            <Typography variant='h5'>About me</Typography>
            <Typography>Able to create adaptive, semantic layout of any complexity.</Typography>
            <Typography>Know OOP, SOLID and data structures. Learning algorithms.</Typography>
            <Typography>Built few simple CRUD backends with NestJS, Sequelize and Postgres.</Typography>
            <Typography component='div' style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
              Absolutely
              <img src={loveIcon} alt='#' style={{ width: 30, height: 30 }} />
              typescript, games and mechanic keyboards.
            </Typography>
          </div>
          <div>
            <Typography variant='h5'>Education</Typography>
            <EducationCard
              date={{
                from: '2020',
                to: '2024',
              }}
              name='Don State Technical University'
              specialization='Bachelor Computer Science'
            />
          </div>

          <Projects>
            <Typography variant='h5'>Projects</Typography>
            <ProjectList>
              <ProjectCard
                name='WebRTC video chat'
                description='Reworked fork. Tried to improve abilities of complex async logic in react flow through refs without stm'
                tags={['React', 'TypeScript', 'Material UI']}
                deployLink='https://dispersioned.github.io/video-chat-webrtc/'
                githubLink='https://github.com/Dispersioned/video-chat-webrtc'
                info='backend offline'
              />
              <ProjectCard
                name='Kovmangal'
                description='Forged chargrill store'
                tags={['Layout', 'HTML', 'SCSS', 'Gulp']}
                imgSrc={kovmangalProject}
                deployLink='https://dispersioned.github.io/web-kovmangal/'
                githubLink='https://github.com/Dispersioned/web-kovmangal'
              />
              <ProjectCard
                name='Zavkom Engineering'
                description='Company website'
                tags={['Layout', 'HTML', 'SCSS', 'Gulp']}
                imgSrc={zavkomEngineeringProject}
                deployLink='https://dispersioned.github.io/web-zavkom-engineering/'
                githubLink='https://github.com/Dispersioned/web-zavkom-engineering'
              />
              <ProjectCard
                name='Cloverly'
                description='API platform to help neutralize carbon emissions'
                tags={['Layout', 'HTML', 'SCSS', 'Gulp']}
                imgSrc={cloverlyProject}
                deployLink='https://dispersioned.github.io/web-cloverly/'
                githubLink='https://github.com/Dispersioned/web-cloverly'
              />
            </ProjectList>
          </Projects>
        </Content>
      </motion.div>
    </Layout>
  );
}
