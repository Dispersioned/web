import { motion } from 'framer-motion'
import React from 'react'
import { Paragraph } from '../../app/style/global'

const AboutMe: React.FC = () => {
  return (
    <motion.div
      key="about-me-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Paragraph>
        Hi there. My name’s Max, an ordinary fellow with aptitude for technical sciences.
      </Paragraph>
      <Paragraph>
        Born 2002, Russia. Studied math & python in school. Now am a 2nd year student of software
        engineering at DSTU.
      </Paragraph>
      <Paragraph>Love building custom keyboards and handcraft useful items.</Paragraph>
    </motion.div>
  )
}
export default AboutMe
