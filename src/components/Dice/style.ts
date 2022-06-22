import { motion } from 'framer-motion'
import styled from 'styled-components'
import { DICE_CELL_SIZE, DICE_SIZE, GAP } from '../../services/Dice/consts'

export const Wrapper = styled.div`
  position: relative;
  width: ${`${DICE_SIZE}px`};
  height: ${`${DICE_SIZE}px`};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

export const GridLayer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-gap: ${`${GAP}px`};
  grid-template-columns: ${`repeat(3,${`${DICE_CELL_SIZE}px`})`};
  grid-template-rows: ${`repeat(3, ${`${DICE_CELL_SIZE}px`})`};
`

export const Cell = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-gray-100);
  border-radius: 5px;
`

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
`
