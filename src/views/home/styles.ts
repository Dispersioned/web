import { Chip, Link, styled } from '@mui/material';

export const Content = styled('div')`
  display: flex;
  flex-direction: column;
  gap: 25px;
  margin-top: 12vw;
  padding-bottom: 50px;
`;

export const Heading = styled('header')`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 20px 15px;
`;

export const Meta = styled('div')`
  display: flex;
  flex-wrap: wrap;
  gap: 10px 20px;
  margin-top: 20px;
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

export const UILocation = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const UIEmail = styled('div')`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const EmailLink = styled(Link)`
  position: relative;
  text-decoration: none;

  &::before {
    content: '';
    position: absolute;
    left: 0;
    bottom: -2px;
    width: 0;
    height: 1px;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 0.3s ease;
  }

  &:hover::before {
    width: 100%;
  }
`;

export const UISocials = styled('div')`
  display: flex;
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
