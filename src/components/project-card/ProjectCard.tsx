import { Typography, styled } from '@mui/material';
import noiconIcon from 'assets/icons/noicon.svg';
import githubIcon from 'assets/icons/social/github.svg';
import { Skill, Skills } from 'views/home/styles';

type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
  imgSrc?: string;
  deployLink: string;
  githubLink: string;
  info?: string;
};

const UICard = styled('div')`
  display: grid;
  grid-template-columns: minmax(200px, 320px) 1fr fit-content(100%);
  gap: 20px;
`;

const ProjectImage = styled('img')`
  border-radius: 2px;
  object-fit: cover;
`;

const DeployLink = styled(Typography)`
  color: black;
  &:hover {
    text-decoration: underline;
  }
` as typeof Typography;

const GithubLink = styled('a')`
  width: 45px;
  height: 45px;
  transition: all 0.3s ease-out;
  margin-top: 5px;

  &:hover {
    transform: scale(1.1);
  }
`;

export function ProjectCard({ name, description, tags, imgSrc, info, deployLink, githubLink }: ProjectCardProps) {
  return (
    <UICard>
      {imgSrc ? (
        <ProjectImage src={imgSrc} alt="#" />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ddd',
            padding: 15,
            borderRadius: 2,
          }}
        >
          <img src={noiconIcon} alt="#" style={{ opacity: 0.5, minHeight: 100, maxHeight: 150 }} />
        </div>
      )}
      <div>
        <DeployLink href={deployLink} component="a" target="_blank" rel="noreferrer">
          {name}
        </DeployLink>
        <Typography color="#666">{description}</Typography>
        <Typography color="darkred" fontStyle="italic">
          {info}
        </Typography>
        <Skills>
          {tags.map((tag) => (
            <Skill key={tag} label={tag} />
          ))}
        </Skills>
      </div>
      <GithubLink href={githubLink} target="_blank" rel="noreferrer">
        <img src={githubIcon} alt="#" />
      </GithubLink>
    </UICard>
  );
}
