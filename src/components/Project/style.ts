import { Chip } from '@mui/material'
import styled from 'styled-components'

export const Wrapper = styled('div')`
  background-color: var(--color-gray-100);
  border-radius: 5px;
  padding: 1rem 2rem;
`

export const Tag = styled(Chip)`
  font-size: 1rem;
  margin-top: 5px;
  margin-bottom: 10px;
  :not(:first-child) {
    margin-left: 12px;
  }
`

export const ProjectLink = styled('a')`
  :visited {
    color: inherit;
  }
`
