import { Container, Typography } from '@mui/material';
import cloverly from 'assets/img/projects-preview/cloverly.jpg';
import kovmangal from 'assets/img/projects-preview/kovmangal.jpg';
import zavkomEngineering from 'assets/img/projects-preview/zavkomEngineering.jpg';
import { Pointer } from 'components/dice/style';
import { Navigation } from 'components/navigation/Navigation';
import { Project } from 'components/project/Project';
import { BackBtnMobile } from 'components/ui/back-btn-mobile/BackBtnMobile';
import { motion } from 'framer-motion';
import React from 'react';
import { useLocation, useNavigate } from 'react-router';
import { ROUTES } from 'shared/config/routes';
import { SECTIONS } from 'shared/config/sizes';
import { isMobile } from 'shared/lib/sizes';
import { Layout } from 'shared/ui/layout';

import { ContentDesktop, ContentMobile } from '../home/style';
import { PointerWrapper, ProjectsList, ProjectsTitle } from './style';

export function Projects() {
  const navigate = useNavigate();
  const location = useLocation();
  const Content = isMobile() ? ContentMobile : ContentDesktop;

  return (
    <motion.div key="projects-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Container maxWidth="xl">
        <BackBtnMobile
          title={SECTIONS.projects}
          callback={() => {
            if (location.pathname !== ROUTES.home) navigate(ROUTES.home);
          }}
        />
        <Layout title={SECTIONS.projects}>
          <Content>
            <ProjectsList>
              <ProjectsTitle variant="h4"> HTML Mock-up</ProjectsTitle>
              <Project
                title="Cloverly"
                description="API platform to help neutralize carbon emissions"
                link="https://dispersioned.github.io/web-cloverly/"
                imageURL={cloverly}
                tags={['HTML', 'SCSS', 'Gulp']}
              />
              <Project
                title="Zavkom Engineering"
                description="Company websit"
                link="https://dispersioned.github.io/web-zavkom-engineering/"
                imageURL={zavkomEngineering}
                tags={['HTML', 'SCSS', 'Gulp']}
              />
              <Project
                title="Kovmangal"
                description="Forged chargrill store"
                link="https://dispersioned.github.io/web-kovmangal/"
                imageURL={kovmangal}
                tags={['HTML', 'SCSS', 'Gulp']}
              />
            </ProjectsList>
            <PointerWrapper container direction="column" justifyContent="center" alignItems="center">
              <Pointer
                onClick={() => navigate(ROUTES.home)}
                animate={{
                  width: 70,
                  height: 70,
                  color: 'var(--color-gray-400)',
                  transition: { duration: 0.7 },
                }}
                style={{
                  transform: 'translateY(30px)',
                }}
              >
                <Typography>Back</Typography>
              </Pointer>
            </PointerWrapper>
            <ProjectsList>
              <ProjectsTitle variant="h4">Frontend</ProjectsTitle>
              <Project
                title="Todo list"
                description="Pet project to practise React & heroku deployment"
                link="https://dispersioned.github.io/react-todo/"
                tags={['React', 'Styled Components', 'Heroku']}
              />
              <Project
                title="WebRTC video chat"
                description="Pet project to practise async React through refs and migrating from js to ts"
                link="https://dispersioned.github.io/video-chat-webrtc/"
                tags={['React', 'TypeScript', 'Material UI', 'Forked']}
              />
            </ProjectsList>
          </Content>
        </Layout>
        <Navigation />
      </Container>
    </motion.div>
  );
}
