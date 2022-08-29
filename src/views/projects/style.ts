import { Grid, Typography } from '@mui/material';
import styled from 'styled-components';

export const ProjectsTitle = styled(Typography)`
  position: sticky;
  left: 0;
  top: 0;
  background-color: var(--color-gray-100);
  border-radius: 5px;
  padding: 10px 15px;
`;

export const PointerWrapper = styled(Grid)`
  width: 70px;
  height: 70px;
  @media (max-width: 1024px) {
    width: 0;
    height: 0;
  }
`;

export const ProjectsList = styled('div')`
  display: grid;
  row-gap: 20px;
  align-items: flex-start;
  overflow: auto;
  max-height: 100%;
  padding-right: 12px;
`;
