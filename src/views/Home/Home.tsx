import { Container, Grid, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Dice from '../../components/Dice/Dice'
import Experience from '../../components/Experience/Experience'
import Skills from '../../components/Skills/Skills'
import { SECTIONS } from '../../config'
import { Layout, Main, Navigation } from './style'
import burger from '../../assets/icons/burger.svg'
import githubIcon from '../../assets/icons/githubIcon.svg'
import headhunterIcon from '../../assets/icons/headhunterIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Hello!')
  const [isNavHovered, setIsNavHovered] = useState(false)

  return (
    <Container maxWidth="xl">
      <Layout>
        <Typography variant="h1" align="center">
          <motion.div
            key={title}
            initial={{ x: '40px', opacity: 0 }}
            animate={{ x: '0', opacity: 1 }}
          >
            {title}
          </motion.div>
        </Typography>

        <Main>
          <div>
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
          <div>
            <AnimatePresence>{title === SECTIONS.EXPERIENCE && <Experience />}</AnimatePresence>
          </div>
        </Main>
      </Layout>
      <Navigation>
        <motion.div
          onHoverStart={() => setIsNavHovered(true)}
          onHoverEnd={() => setIsNavHovered(false)}
        >
          {!isNavHovered && <img src={burger} alt="menu button" />}
          <AnimatePresence>
            {isNavHovered && (
              <motion.div
                key="menu"
                initial={{ opacity: 0, pointerEvents: 'none', y: -60 }}
                animate={{ opacity: 1, pointerEvents: 'all', y: -60 }}
                exit={{ opacity: 0.2, pointerEvents: 'none', y: 0 }}
              >
                <motion.div
                  key="menu-github"
                  initial={{ y: 62, opacity: 0.4 }}
                  animate={{ y: -20, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.1, ease: 'easeInOut' }}
                >
                  <a href="https://github.com/Dispersioned" target="_blank" rel="noreferrer">
                    <img src={githubIcon} alt="menu button" />
                  </a>
                </motion.div>
                <a href="https://t.me/Dispersioned" target="_blank" rel="noreferrer">
                  <img src={telegramIcon} alt="menu button" />
                </a>
                <motion.div
                  key="menu-headhunter"
                  initial={{ y: -65, opacity: 0.4 }}
                  animate={{ y: 20, opacity: 1 }}
                  transition={{ delay: 0.2, duration: 0.1, ease: 'easeInOut' }}
                >
                  <a
                    href="https://rostov.hh.ru/resume/23e5510fff09055f900039ed1f327579537633"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={headhunterIcon} alt="menu button" />
                  </a>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </Navigation>
    </Container>
  )
}
export default Home
