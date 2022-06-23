import { Container, Grid } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import gear1 from '../../assets/icons/gear1.svg'
import gear2 from '../../assets/icons/gear2.svg'
import AboutMe from '../../components/AboutMe/AboutMe'
import Dice from '../../components/Dice/Dice'
import Experience from '../../components/Experience/Experience'
import Layout from '../../components/Layout/Layout'
import Navigation from '../../components/Navigation/Navigation'
import Skills from '../../components/Skills/Skills'
import { SECTIONS } from '../../config'
import { WelcomeGenerator } from '../../services/Dice'
import { isMobile } from '../../services/sizes'
import { ContentColumn, ContentDesktop, ContentMobile, Gears, MobileOverlay } from './style'
import back from '../../assets/icons/back.svg'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Hello!')

  const isGears = title === SECTIONS.SKILLS
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

      <Gears>
        <AnimatePresence>
          {isGears && (
            <motion.img
              id="gear1"
              src={gear1}
              alt="#"
              initial={{ top: '-100%', right: 100 }}
              animate={{ top: -120, transition: { duration: '0.8', ease: 'easeOut' } }}
              exit={{ top: '-100%', transition: { duration: '1.1', ease: 'easeIn' } }}
            />
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isGears && (
            <motion.img
              id="gear2"
              src={gear2}
              alt="#"
              initial={{ right: -400, top: -200 }}
              animate={{ right: -80, top: 40, transition: { duration: '0.7', ease: 'easeOut' } }}
              exit={{ right: -400, top: -200, transition: { duration: '1.1', ease: 'easeIn' } }}
            />
          )}
        </AnimatePresence>
      </Gears>

      <Layout title={title}>
        <Content>
          {isMobile() ? (
            <>
              {WelcomeGenerator.phrases.includes(title) && (
                <div>
                  <Grid container direction="column" justifyContent="center" alignItems="center">
                    <Dice setTitle={setTitle} />
                  </Grid>
                </div>
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
            <AnimatePresence>
              <ContentColumn>
                <AnimatePresence>
                  {title === SECTIONS.ABOUT_ME && <AboutMe />}
                  {title === SECTIONS.SKILLS && <Skills />}
                </AnimatePresence>
              </ContentColumn>
              <div>
                <Grid container direction="column" justifyContent="center" alignItems="center">
                  <Dice setTitle={setTitle} />
                </Grid>
              </div>
              <ContentColumn>
                <AnimatePresence>{title === SECTIONS.EXPERIENCE && <Experience />}</AnimatePresence>
              </ContentColumn>
            </AnimatePresence>
          )}
        </Content>
      </Layout>
      <Navigation />
    </Container>
  )
}
export default Home
