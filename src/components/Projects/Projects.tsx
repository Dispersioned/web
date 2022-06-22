import { Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { useNavigate } from 'react-router'
import { SECTIONS } from '../../config'
import { Layout, Main } from '../../views/Home/style'
import { Pointer } from '../Dice/style'
import Navigation from '../Navigation/Navigation'
import Project from '../Project/Project'
import { ProjectsList, ProjectsTitle } from './style'
import cloverly from '../../assets/img/projects-preview/cloverly.jpg'
import zavkomEngineering from '../../assets/img/projects-preview/zavkomEngineering.jpg'
import kovmangal from '../../assets/img/projects-preview/kovmangal.jpg'

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
            <div style={{ width: 70, height: 70 }}>
              <Grid container direction="column" justifyContent="center" alignItems="center">
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
          </Main>
        </Layout>
        <Navigation />
      </Container>
    </motion.div>
  )
}
export default Projects
