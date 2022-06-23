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
import { Gears, Main } from './style'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Hello!')

  const isGears = title === SECTIONS.SKILLS

  return (
    <Container maxWidth="xl">
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
        <Main>
          <div style={{ overflow: 'auto', height: '100%', paddingRight: 10 }}>
            <AnimatePresence>
              {title === SECTIONS.ABOUT_ME && <AboutMe />}
              {title === SECTIONS.SKILLS && <Skills />}
            </AnimatePresence>
          </div>
          <div>
            <Grid container direction="column" justifyContent="center" alignItems="center">
              <Dice setTitle={setTitle} />
            </Grid>
          </div>
          <div style={{ overflow: 'auto', height: '100%', paddingRight: 10 }}>
            <AnimatePresence>{title === SECTIONS.EXPERIENCE && <Experience />}</AnimatePresence>
          </div>
        </Main>
      </Layout>
      <Navigation />
    </Container>
  )
}
export default Home
