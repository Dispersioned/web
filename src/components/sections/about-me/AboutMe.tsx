import { Paragraph } from 'app/style/global';
import { motion } from 'framer-motion';
import React from 'react';

export function AboutMe() {
  return (
    <motion.div key="about-me-section" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <Paragraph>Hi there. My name’s Max, 20yo frontend developer.</Paragraph>
      <Paragraph>
        At school I was fond of technical sciences. Later began to study html make-up and javascript. Now I am a
        2nd-year student of software engineering speciality at DSTU.
      </Paragraph>
      <Paragraph>Currently I am deepening my knowledge about TypeScript & Frontend architecture.</Paragraph>
      <Paragraph>Love building custom keyboards and handcraft useless yet funny items.</Paragraph>
    </motion.div>
  );
}
