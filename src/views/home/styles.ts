import { Chip, Typography, styled } from '@mui/material';

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 15vh;
  padding-bottom: 50px; ;
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

export const Projects = styled('div')`
  position: relative;
`;

export const Timeline = styled(Typography)`
  position: absolute;
  top: 65px;
  left: -60px;
  transform: rotate(-90deg);
  text-align: right;

  img {
    width: 50px;
    object-fit: fill;
    transform: rotate(180deg);
  }
` as typeof Typography;
