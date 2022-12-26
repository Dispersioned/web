import { Typography, styled } from '@mui/material';

export const UINavigation = styled('div')`
  display: flex;
  justify-content: center;
  background-color: #325564;
  border-right: 2px solid #333;
`;

export const NavList = styled('ul')`
  margin-top: 15vh;
  color: white;
`;

export const NavItem = styled(Typography)`
  font-size: 22px;
`;
