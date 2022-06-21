import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;
  grid-template-rows: fit-content(100%) fit-content(100%);
  row-gap: 100px;
  height: 100vh;
  padding-top: 15vh;
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr fit-content(100%) 1fr;
  column-gap: 45px;
`
