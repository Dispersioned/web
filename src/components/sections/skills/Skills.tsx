import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { SkillItem } from './style'

const Skills: React.FC = () => {
  const coreSkills = ["React", "JavaScript", "ES6+", "TypeScript", "SCSS", "Styled Components", "Material UI","Apollo GraphQL", "Git", "Figma", "Gulp", "Yarn" ]
  const auxiliarySkills = ["Python", "Java", "Netlify CMS", "Firebase", "Axios", "Gatsby" ]

  return (
    <motion.div
      key="skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box marginBottom={2}>
        <Typography variant="h4">Core</Typography>
        {coreSkills.map((skill) => (
          <SkillItem key={skill} label={skill} />
        ))}
      </Box>

      <Box marginBottom={2}>
        <Typography variant="h4">Worked with</Typography>
        {auxiliarySkills.map((skill) => (
          <SkillItem key={skill} label={skill} />
        ))}
      </Box>
    </motion.div>
  )
}
export default Skills
