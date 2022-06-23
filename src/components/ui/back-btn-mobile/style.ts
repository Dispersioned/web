import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MobileOverlay = styled(motion.img)`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100vw;
  padding: 7px 0;
  height: 50px;
  z-index: 100000;
  transform: translateX(-50%);
`
