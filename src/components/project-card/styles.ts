import { styled, Typography } from '@mui/material';

export const UICard = styled('div')`
  display: grid;
  grid-template-columns: minmax(200px, 320px) 1fr;
  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    grid-template-rows: minmax(250px, 45vw) fit-content(100%);
  }
  gap: 20px;
`;

export const Description = styled('div')`
  display: flex;
  justify-content: space-between;
  gap: 10px;
`;

export const ProjectImage = styled('img')`
  border-radius: 2px;
  height: 100%;
  object-fit: contain;
  justify-self: center;
`;

export const DeployLink = styled(Typography)`
  color: black;
  &:hover {
    text-decoration: underline;
  }
` as typeof Typography;

export const GithubLink = styled('a')`
  width: 45px;
  height: 45px;
  flex-shrink: 0;
  transition: all 0.3s ease-out;
  margin-top: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;
