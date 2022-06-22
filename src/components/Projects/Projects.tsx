import { Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router'
import { SECTIONS } from '../../config'
import { Layout, Main } from '../../views/Home/style'
import { Pointer } from '../Dice/style'
import Navigation from '../Navigation/Navigation'
import { Item } from './style'

const Projects: React.FC = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      key="projects-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Container maxWidth="xl">
        <Layout>
          <Typography variant="h1" align="center">
            <motion.div initial={{ x: '40px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
              {SECTIONS.PROJECTS}
            </motion.div>
          </Typography>

          <Main>
            <div>
              <Item>
                <Typography variant="h4">HTML Mock-up</Typography>
              </Item>
            </div>
            <div style={{ width: 70, height: 70 }}>
              <Grid container direction="column" justifyContent="center" alignItems="center">
                {/* <Dice setTitle={setTitle} /> */}
                <Pointer
                  onClick={() => navigate('/')}
                  initial={{
                    position: 'fixed',
                    width: '3500px',
                    height: '3500px',
                    color: 'var(--color-gray-200)',
                  }}
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
              </Grid>
            </div>
            <div>
              <Item>
                <Typography variant="h4">Frontend</Typography>
              </Item>
            </div>
          </Main>
        </Layout>
        <Navigation />
      </Container>
    </motion.div>
  )
}
export default Projects
