import { Typography } from '@mui/material';
import arrowIcon from 'assets/icons/arrow.svg';
import globeIcon from 'assets/icons/globe.svg';
import loveIcon from 'assets/icons/love.svg';
import { EducationCard } from 'components/education-card';
import { Layout } from 'components/layout';
import { WorkCard } from 'components/work-card';

import { Content, Projects, Skill, Skills, Timeline } from './styles';

export function Home() {
  return (
    <Layout>
      <Content>
        <div>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'baseline',
              flexWrap: 'wrap',
              gap: 15,
            }}
          >
            <Typography variant="h3">Maxim Khan</Typography>
            <Typography
              component="div"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 5,
                fontSize: 17,
              }}
            >
              <img src={globeIcon} alt="#" style={{ width: 30, height: 30 }} />
              Russia, Rostov-on-Don
            </Typography>
          </div>
          <Typography color="#666">Frontend developer</Typography>
        </div>
        <div>
          <Typography variant="h5">Skills</Typography>
          <Skills>
            <Skill label="React" />
            <Skill label="Redux" />
            <Skill label="RTK Query" />
            <Skill label="MobX" />
            <Skill label="Effector" />
            <Skill label="SCSS" />
            <Skill label="Styled Components" />
            <Skill label="Material UI" />
            <Skill label="ES6+" />
            <Skill label="TypeScript" />
            <Skill label="Apollo" />
            <Skill label="GraphQL" />
            <Skill label="Git" />
            <Skill label="Figma" />
            <Skill label="Agile" />
            <Skill label="NestJS" />
            <Skill label="Sequelize" />
          </Skills>
        </div>
        <div>
          <Typography variant="h5">Worked a bit with</Typography>
          <Skills>
            <Skill label="Redux Saga" />
            <Skill label="NextJS" />
            <Skill label="Gulp" />
          </Skills>
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
        <div>
          <Typography variant="h5">Working Experience</Typography>
          <WorkCard
            date={{
              from: 'May 2022',
              to: 'Now',
            }}
            company='Research institute "Спецвузавтоматика"'
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
            company='LTD "Южный Герион"'
            experience={[
              'Created layouts from Figma with React, scss and Material UI. Adapted UI and refined UX. Writed new features with TS and Apollo GraphQL.',
              'Worked with rtc: GraphQL subscriptions, socket.io, WebRTC',
              'Refactored and decomposed large components, fixed ton of ts any',
            ]}
          />
        </div>
        <Projects>
          <Typography variant="h5">Projects</Typography>
          <Timeline component="div">
            older
            <img src={arrowIcon} alt="#" />
          </Timeline>
        </Projects>
      </Content>
    </Layout>
  );
}
