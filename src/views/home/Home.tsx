import { Typography } from '@mui/material';
import loveIcon from 'assets/icons/love.svg';
import { EducationCard } from 'components/education-card';
import { Layout } from 'components/layout';
import { ProjectCard } from 'components/project-card';
import { WorkCard } from 'components/work-card';
import { motion } from 'framer-motion';

import { EXPERIENCE, PROJECTS, SKILLS } from 'config/myself';
import { Email } from './Email';
import { Location } from './Location';
import { Socials } from './Socials';
import { Content, Heading, Meta, ProjectList, Projects, Skill, Skills } from './styles';

export function Home() {
  return (
    <Layout>
      <motion.div
        initial={{ opacity: 0, top: -30 }}
        animate={{ opacity: 1, top: 0 }}
        transition={{ duration: 0.7 }}
        style={{ position: 'relative' }}>
        <Content>
          <Heading>
            <div>
              <Typography variant='h3'>Maxim Khan</Typography>
              <Typography fontSize={20} fontWeight={600} textTransform='capitalize'>
                Frontend developer
              </Typography>
              <Meta>
                <Location location='Russia, Rostov-on-Don' />
                <Email email='rocketgo1672@gmail.com' />
              </Meta>
            </div>
            <Socials />
          </Heading>
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
              {PROJECTS.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </ProjectList>
          </Projects>
        </Content>
      </motion.div>
    </Layout>
  );
}
