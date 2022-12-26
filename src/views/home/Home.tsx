import { Typography } from '@mui/material';
import globeIcon from 'assets/icons/globe.svg';
import { Layout } from 'shared/base/layout';

import { Content, Skill, Skills } from './styles';

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
          <Typography variant="h5">Key Skills</Typography>
          <Skills>
            <Skill label="React" />
            <Skill label="NestJS" />
            <Skill label="Sequelize" />
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
          <Typography>Built few simple CRUD backends with NestJS, Sequelize and PostgreSQL.</Typography>
          <Typography>Absolutely love typescript!</Typography>
        </div>
      </Content>
    </Layout>
  );
}
