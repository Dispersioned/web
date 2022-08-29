import { styled } from '@mui/material';
import { motion } from 'framer-motion';

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
    box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.15);
    padding: 5px 10px;
    border-radius: 7px;
    transform: translateX(-50%);
  }
`;
