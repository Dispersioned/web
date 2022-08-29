import { styled } from '@mui/material';

export const ContentDesktop = styled('div')`
  display: grid;
  grid-template-columns: 1fr fit-content(100%) 1fr;
  column-gap: max(20px, 4vw);
  align-items: flex-start;
  overflow-y: hidden;
`;

export const ContentMobile = styled('div')`
  display: grid;
  row-gap: 20px;
  align-items: flex-start;
`;

export const ContentColumn = styled('div')`
  overflow: auto;
  height: 100%;
  padding-right: 10px;
`;
