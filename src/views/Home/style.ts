import styled from 'styled-components'

export const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr fit-content(100%) 1fr;
  column-gap: max(20px, 4vw);
  align-items: flex-start;
  overflow-y: hidden;
`

export const ContentColumn = styled.div`
  overflow: auto;
  height: 100%;
  padding-right: 10px;
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
