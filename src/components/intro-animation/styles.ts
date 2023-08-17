import { styled } from '@mui/material';

export const Wrapper = styled('div')`
  position: relative;
  height: 100vh;
`;

export const Image = styled('img')`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) rotate(-60deg);
  width: min(45vw, 45vh);
  height: min(45vw, 45vh);
  animation: spin 2.8s cubic-bezier(0.57, 0.18, 0.43, 0.81) forwards;

  @keyframes spin {
    0% {
      transform: translate(-50%, -50%) rotate(-60deg);
      opacity: 0;
    }
    10% {
      transform: translate(-50%, -50%) rotate(-60deg);
      opacity: 0.2;
    }
    15% {
      transform: translate(-50%, -50%) rotate(-60deg);
    }
    50% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1.05);
      opacity: 1;
    }
    65% {
      transform: translate(-50%, -50%) rotate(360deg) scale(1.05);
      opacity: 1;
    }
    75% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    85% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
      opacity: 0;
    }
  }
`;
