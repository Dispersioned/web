import { Typography } from '@mui/material';
import React from 'react';

import { ProjectLink, Tag, Wrapper } from './style';

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  link: string;
  imageURL?: string;
};

export function Project({ title, description, tags, link, imageURL }: ProjectProps) {
  return (
    <Wrapper>
      <ProjectLink href={link} target="_blank" rel="noreferrer">
        <Typography variant="h5">{title}</Typography>
      </ProjectLink>
      <Typography variant="caption" fontSize={17}>
        {description}
      </Typography>
      <div>
        {tags.map((tag) => (
          <Tag key={tag} label={tag} $active={tag.toLowerCase() === 'forked'} />
        ))}
      </div>
      {imageURL && <img src={imageURL} alt={title} />}
    </Wrapper>
  );
}
