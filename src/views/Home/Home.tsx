import { Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useRef } from 'react'
import Dice from '../../components/Dice/Dice'

const Home: React.FC = () => {
  const dragWrapper = useRef(null)

  return (
    <Container maxWidth="lg">
      <Grid
        container
        spacing={8}
        direction="column"
        justifyContent="center"
        alignItems="center"
        height="100vh"
      >
        <Grid item>
          <Typography variant="h1">Hello!</Typography>
        </Grid>
        <Grid item>
          <Dice dragWrapperRef={dragWrapper} />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Home
