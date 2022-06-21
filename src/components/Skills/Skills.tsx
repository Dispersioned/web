import { Box, Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { SkillItem } from './style'

const Skills: React.FC = () => {
  return (
    <motion.div
      key="skills-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Box marginBottom={2}>
        <Typography variant="h4">Core</Typography>
        <SkillItem label="React" />
        <SkillItem label="JavaScript" />
        <SkillItem label="TypeScript" />
        <SkillItem label="ES6+" />
        <SkillItem label="Material UI" />
        <SkillItem label="Styled Components" />
      </Box>

      <Box marginBottom={2}>
        <Typography variant="h4">Know and use</Typography>
        <SkillItem label="HTML" />
        <SkillItem label="SCSS" />
        <SkillItem label="GraphQL" />
        <SkillItem label="Git" />
        <SkillItem label="Figma" />
        <SkillItem label="Heroku" />
        <SkillItem label="Yarn" />
      </Box>

      <Box marginBottom={2}>
        <Typography variant="h4">Worked with</Typography>
        <SkillItem label="Python" />
        <SkillItem label="Java" />
      </Box>
    </motion.div>
  )
}
export default Skills