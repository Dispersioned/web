import { Container, Grid } from '@mui/material'
import { AnimatePresence } from 'framer-motion'
import React, { useState } from 'react'

import back from '../../assets/icons/back.svg'
import AboutMe from '../../components/sections/about-me/AboutMe'
import Animations from '../../components/animations/Animations'
import Dice from '../../components/dice/Dice'
import Experience from '../../components/sections/experience/Experience'
import Layout from '../../components/layout/Layout'
import Navigation from '../../components/navigation/Navigation'
import Skills from '../../components/sections/skills/Skills'
import { SECTIONS } from '../../config'
import { WelcomeGenerator } from '../../services/Dice'
import { isMobile } from '../../services/sizes'
import { ContentColumn, ContentDesktop, ContentMobile, MobileOverlay } from './style'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Hello!')
  const Content = isMobile() ? ContentMobile : ContentDesktop

  return (
    <Container maxWidth="xl" style={{ overflowX: 'hidden' }}>
      <AnimatePresence>
        {isMobile() && !WelcomeGenerator.phrases.includes(title) && (
          <MobileOverlay
            key="back"
            drag={isMobile() ? 'x' : false}
            dragConstraints={{ left: 0, right: 0 }}
            initial={{ x: 0, y: 0 }}
            exit={{ y: 200, transition: { duration: 0.3 } }}
            transition={{ duration: 2 }}
            onDrag={(_, info) => {
              if (info.offset.x < -120) setTitle('Hello!')
            }}
            src={back}
          />
        )}
      </AnimatePresence>

      <Animations shouldShow={title === SECTIONS.SKILLS} />

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
                  {title === SECTIONS.ABOUT_ME && <AboutMe />}
                  {title === SECTIONS.SKILLS && <Skills />}
                  {title === SECTIONS.EXPERIENCE && <Experience />}
                </AnimatePresence>
              </ContentColumn>
            </>
          ) : (
            <>
              <ContentColumn>
                <AnimatePresence>
                  {title === SECTIONS.ABOUT_ME && <AboutMe />}
                  {title === SECTIONS.SKILLS && <Skills />}
                </AnimatePresence>
              </ContentColumn>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                <Dice setTitle={setTitle} />
              </Grid>
              <ContentColumn>
                <AnimatePresence>{title === SECTIONS.EXPERIENCE && <Experience />}</AnimatePresence>
              </ContentColumn>
            </>
          )}
        </Content>
      </Layout>
      <Navigation />
    </Container>
  )
}
export default Home
