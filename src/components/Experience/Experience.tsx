import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator,
} from '@mui/lab'
import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { Paragraph } from '../../style/global'

const Experience: React.FC = () => {
  return (
    <motion.div
      key="experience-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Timeline>
        <TimelineItem>
          <TimelineOppositeContent style={{ display: 'none' }} />
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="caption" fontSize={14}>
              Jan 2022 - May 2022
            </Typography>
            <br />
            LTD South Gerion
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent style={{ display: 'none' }} />
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Typography variant="caption" fontSize={14}>
              May 2022 - now
            </Typography>
            <br />
            Research institute Spetsvuzavtomatika
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </motion.div>
  )
}
export default Experience
