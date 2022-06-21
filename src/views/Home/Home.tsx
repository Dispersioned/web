import { Container, Grid, Typography } from '@mui/material'
import React, { useState } from 'react'
import AboutMe from '../../components/AboutMe/AboutMe'
import Dice from '../../components/Dice/Dice'
import { SECTIONS } from '../../config'
import { Layout, Main } from './style'

const Home: React.FC = () => {
  const [title, setTitle] = useState('Hello!')

  return (
    <Container maxWidth="lg">
      <Layout>
        <Typography variant="h1" align="center">
          {title}
        </Typography>
        <Main>
          <div>{title === SECTIONS.ABOUT_ME && <AboutMe />}</div>
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
