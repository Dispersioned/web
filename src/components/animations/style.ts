import { styled } from '@mui/material';

export const Gears = styled('div')`
  z-index: 100;

  #gear1 {
    position: fixed;
    animation: spin 3.5s infinite linear;
  }

  #gear2 {
    position: fixed;
    animation: spin 4.2s infinite reverse linear;
    z-index: 100;
  }

  @keyframes spin {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
