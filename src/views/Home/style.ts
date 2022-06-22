import styled from 'styled-components'

export const Layout = styled.div`
  display: grid;
  grid-template-rows: fit-content(100%) fit-content(100%);
  row-gap: 70px;
  height: 100vh;
  padding-top: 10vh;
  overflow-x: hidden;
`

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr fit-content(100%) 1fr;
  column-gap: 45px;
  align-items: flex-start;
`

export const Gears = styled.div`
  #gear1 {
    position: fixed;
    animation: spin 3.5s infinite linear;
  }

  #gear2 {
    position: fixed;
    animation: spin 4.2s infinite reverse linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`
