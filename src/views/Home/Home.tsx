import { Container, Grid, Typography } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Dice from '../../components/Dice/Dice'
import Skills from '../../components/Skills/Skills'
import { SECTIONS } from '../../config'
import { Layout, Main } from './style'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Hello!')

  return (
    <Container maxWidth="lg">
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
          <div></div>
        </Main>
      </Layout>
    </Container>
  )
}
export default Home
