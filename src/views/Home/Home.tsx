import { Container, Grid, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React, { useRef, useState } from 'react'
import Dice from '../../components/Dice/Dice'

const Home: React.FC = () => {
  const dragWrapper = useRef(null)
  const [title, setTitle] = useState('Hello!')

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
          <Typography variant="h1">{title}</Typography>
        </Grid>
        <Grid item>
          <Dice dragWrapperRef={dragWrapper} setTitle={setTitle} />
        </Grid>
      </Grid>
    </Container>
  )
}
export default Home
