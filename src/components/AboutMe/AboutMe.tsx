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
      <Paragraph>Hi there. My name’s Max, one more ordinary frontend developer.</Paragraph>
      <Paragraph>
        I was born 2002, Russia. At school I was fond of technical sciences. Later began to study
        html make-up and javascript. Now I am a 2nd year student of software engineering at DSTU.
      </Paragraph>
      <Paragraph>
        Currently deepening my knowledge about typescript & frontend architecture.
      </Paragraph>
      <Paragraph>Love building custom keyboards and handcraft useless yet funny items.</Paragraph>
    </motion.div>
  )
}
export default AboutMe
