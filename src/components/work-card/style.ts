import { Typography, styled } from '@mui/material';

export const UIWorkCard = styled('div')`
  margin-bottom: 20px;

  @media (max-width: 991px) {
    padding-left: 20px;
  }
`;

export const Company = styled(Typography)`
  position: relative;
  font-weight: bold;

  &::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 50%;
    transform: translateY(-50%);
    width: 5px;
    height: 5px;
    background-color: black;
  }
`;
