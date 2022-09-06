import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import React from 'react';

import { SkillItem } from './style';

export function Skills() {
  const coreSkills = [
    'React',
    'JavaScript',
    'ES6+',
    'TypeScript',
    'MobX',
    'Effector',
    'SCSS',
    'Styled Components',
    'Material UI',
    'GraphQL',
    'Git',
    'Figma',
  ];
  const auxiliarySkills = ['Redux', 'Gatsby', 'Gulp', 'Netlify', 'Contentful', 'Figma'];

  return (
    <motion.div key="skills-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Box marginBottom={2}>
        <Typography variant="h4">Core skills</Typography>
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
  );
}
