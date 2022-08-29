import { Container, Grid } from '@mui/material';
import Animations from 'components/animations/Animations';
import Dice from 'components/dice/Dice';
import Navigation from 'components/navigation/Navigation';
import AboutMe from 'components/sections/about-me/AboutMe';
import Experience from 'components/sections/experience/Experience';
import Skills from 'components/sections/skills/Skills';
import BackBtnMobile from 'components/ui/back-btn-mobile/BackBtnMobile';
import { AnimatePresence } from 'framer-motion';
import React, { useState } from 'react';
import { SECTIONS } from 'shared/config/sizes';
import { WelcomeGenerator } from 'shared/lib/dice';
import { isMobile } from 'shared/lib/sizes';
import { Layout } from 'shared/ui/layout';

import { ContentColumn, ContentDesktop, ContentMobile } from './style';

export function Home() {
  const [title, setTitle] = useState('Hello!');
  const Content = isMobile() ? ContentMobile : ContentDesktop;

  return (
    <Container maxWidth="xl" style={{ overflowX: 'hidden' }}>
      <Navigation />
      <Animations shouldShow={title === SECTIONS.skills} />
      <BackBtnMobile title={title} callback={() => setTitle('Hello!')} />

      <Layout title={title}>
        <Content>
          {isMobile() ? (
            <>
              {WelcomeGenerator.phrases.includes(title) && (
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Dice setTitle={setTitle} />
                </Grid>
              )}
              <ContentColumn>
                <AnimatePresence>
                  {title === SECTIONS.aboutMe && <AboutMe />}
                  {title === SECTIONS.skills && <Skills />}
                  {title === SECTIONS.experience && <Experience />}
                </AnimatePresence>
              </ContentColumn>
            </>
          ) : (
            <>
              <ContentColumn>
                <AnimatePresence>
                  {title === SECTIONS.aboutMe && <AboutMe />}
                  {title === SECTIONS.skills && <Skills />}
                </AnimatePresence>
              </ContentColumn>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <Dice setTitle={setTitle} />
              </Grid>
              <ContentColumn>
                <AnimatePresence>{title === SECTIONS.experience && <Experience />}</AnimatePresence>
              </ContentColumn>
            </>
          )}
        </Content>
      </Layout>
    </Container>
  );
}
