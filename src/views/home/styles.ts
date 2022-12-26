import { Chip, styled } from '@mui/material';

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 15vh;
`;

export const Skills = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

export const Skill = styled(Chip)`
  font-size: 15px;
  border-radius: 10px;
`;
