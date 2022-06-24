import { motion } from 'framer-motion'
import styled from 'styled-components'

export const MobileOverlay = styled(motion.div)`
  position: fixed;
  bottom: 20px;
  left: 50%;
  padding: 7px 0;
  height: 50px;
  z-index: 100000;
  transform: translateX(-50%);

  img {
    background-color: var(--color-gray-100);
    box-shadow: 4px 3px 8px var(--color-gray-200);
    padding: 5px 10px;
    border-radius: 7px;
    transform: translateX(-50%);
  }
`
