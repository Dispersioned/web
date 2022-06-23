import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 1001;
  left: max(15px, 3vw);
  top: calc(10vh + 0.8rem);

  @media (max-width: 1200px) {
    top: calc(10.5vh);
  }
  @media (max-width: 991px) {
    top: calc(4vh - 4px);
  }
`
