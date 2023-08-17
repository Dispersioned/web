import { Typography } from '@mui/material';
import noiconIcon from 'assets/icons/noicon.svg';
import githubIcon from 'assets/icons/social/github.svg';
import { Skill, Skills } from 'views/home/styles';
import { UICard, ProjectImage, DeployLink, GithubLink, Description } from './styles';
import { IProject } from 'shared/types';

type ProjectCardProps = {
  project: IProject;
};

export function ProjectCard({ project }: ProjectCardProps) {
  const {
    name,
    description,
    tags,
    preview,
    metalinks: { deploy, github },
  } = project;
  return (
    <UICard>
      {preview ? (
        <ProjectImage src={preview} alt='#' />
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
          <DeployLink href={deploy} component='a' target='_blank' rel='noreferrer'>
            {name}
          </DeployLink>
          <Typography color='#666'>{description}</Typography>
          <Skills>
            {tags.map((tag) => (
              <Skill key={tag} label={tag} />
            ))}
          </Skills>
        </div>
        <GithubLink href={github} target='_blank' rel='noreferrer'>
          <img src={githubIcon} alt='#' />
        </GithubLink>
      </Description>
    </UICard>
  );
}
