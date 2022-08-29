import { styled } from '@mui/material';
import { motion } from 'framer-motion';
import { DICE_CELL_SIZE, DICE_SIZE, GAP } from 'shared/config/sizes';

export const Wrapper = styled('div')`
  position: relative;
  width: ${`${DICE_SIZE}px`};
  height: ${`${DICE_SIZE}px`};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GridLayer = styled('div')`
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-gap: ${`${GAP}px`};
  grid-template-columns: ${`repeat(3,${`${DICE_CELL_SIZE}px`})`};
  grid-template-rows: ${`repeat(3, ${`${DICE_CELL_SIZE}px`})`};
`;

export const Pointer = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--color-gray-400);
  cursor: pointer;
  width: 70px;
  height: 70px;
  background-color: var(--color-gray-200);
  border-radius: 50%;
  position: relative;
  z-index: 1000;
`;
