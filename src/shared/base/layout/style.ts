import { Typography, styled } from '@mui/material';

export const UILayout = styled('div')`
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
`;
