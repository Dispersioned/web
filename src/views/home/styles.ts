import { Chip, Typography, styled } from '@mui/material';

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 15vh;
  padding-bottom: 50px;
`;

export const Skills = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin: 10px 0;
`;

export const Skill = styled(Chip)`
  font-size: 19px;
  border-radius: 10px;
  font-family: inherit;
`;

export const Projects = styled('div')`
  position: relative;
`;

export const ProjectList = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 25px;
`;

export const Timeline = styled(Typography)`
  position: absolute;
  top: 60px;
  left: -60px;
  transform: rotate(-90deg);
  text-align: right;

  img {
    width: 50px;
    object-fit: fill;
    transform: rotate(180deg);
  }
` as typeof Typography;

export const Socials = styled('div')`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

export const SocialLink = styled('a')`
  img {
    width: 40px;
    height: 40px;
  }

  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }
`;
