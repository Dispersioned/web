import { Typography } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: fit-content(100%) fit-content(100%);
  row-gap: max(40px, 5vw);
  height: 100vh;
  padding-top: 10vh;
  @media (max-width: 1199px) {
    padding-top: 7vh;
  }
  @media (max-width: 991px) {
    padding-top: 5vh;
  }
  z-index: 1000;
`

export const Title = styled(Typography)`
  font-size: 5rem;

  @media (max-width: 1400px) {
    font-size: 4rem;
  }
  @media (max-width: 991px) {
    font-size: 3rem;
  }
  @media (max-width: 767px) {
    font-size: 2.5rem;
  }
`
