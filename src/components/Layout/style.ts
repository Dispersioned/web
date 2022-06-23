import styled from 'styled-components'

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: fit-content(100%) fit-content(100%);
  row-gap: max(40px, 5vw);
  height: 100vh;
  padding-top: 10vh;
  @media (max-width: 991px) {
    padding-top: 5vh;
  }
  /* overflow-x: hidden; */
`
