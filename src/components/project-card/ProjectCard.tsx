import { Typography } from '@mui/material';
import noiconIcon from 'assets/icons/noicon.svg';
import githubIcon from 'assets/icons/social/github.svg';
import { Skill, Skills } from 'views/home/styles';
import { UICard, ProjectImage, DeployLink, GithubLink, Description } from './styles';

type ProjectCardProps = {
  name: string;
  description: string;
  tags: string[];
  imgSrc?: string;
  deployLink: string;
  githubLink: string;
  info?: string;
};

export function ProjectCard({ name, description, tags, imgSrc, info, deployLink, githubLink }: ProjectCardProps) {
  return (
    <UICard>
      {imgSrc ? (
        <ProjectImage src={imgSrc} alt='#' />
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            background: '#ddd',
            padding: 15,
            borderRadius: 2,
          }}>
          <img src={noiconIcon} alt='#' style={{ opacity: 0.5, minHeight: 100, maxHeight: 150 }} />
        </div>
      )}
      <Description>
        <div>
          <DeployLink href={deployLink} component='a' target='_blank' rel='noreferrer'>
            {name}
          </DeployLink>
          <Typography color='#666'>{description}</Typography>
          <Typography color='darkred' fontStyle='italic'>
            {info}
          </Typography>
          <Skills>
            {tags.map((tag) => (
              <Skill key={tag} label={tag} />
            ))}
          </Skills>
        </div>
        <GithubLink href={githubLink} target='_blank' rel='noreferrer'>
          <img src={githubIcon} alt='#' />
        </GithubLink>
      </Description>
    </UICard>
  );
}
