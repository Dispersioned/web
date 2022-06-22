import { Typography } from '@mui/material'
import React from 'react'
import { ProjectLink, Tag, Wrapper } from './style'

interface ProjectProps {
  title: string
  description: string
  tags: string[]
  link: string
  imageURL?: string
}

const Project: React.FC<ProjectProps> = ({ title, description, tags, link, imageURL }) => {
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
          <Tag key={tag} label={tag} />
        ))}
      </div>
      {imageURL && <img src={imageURL} alt={title} />}
    </Wrapper>
  )
}
export default Project
