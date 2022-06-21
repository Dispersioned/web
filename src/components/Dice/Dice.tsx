import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import './style.css'

interface DiceProps {
  dragWrapperRef: React.MutableRefObject<null>
}

const DICE_SIZE = '370px'

const Wrapper = styled.div`
  position: relative;
  width: ${DICE_SIZE};
  height: ${DICE_SIZE};
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`

const GridLayer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: grid;
  grid-gap: 4px;
  grid-template-columns: ${`repeat(3, calc(${DICE_SIZE} / 3 - 4px))`};
  grid-template-rows: ${`repeat(3, calc(${DICE_SIZE} / 3 - 4px))`};
`

const Cell = styled.div`
  background-color: #efefef;
  border-radius: 5px;
`

const Dice: React.FC<DiceProps> = ({ dragWrapperRef }) => {
  const [cells, setCells] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ])

  return (
    <Wrapper ref={dragWrapperRef}>
      <GridLayer>{cells.map((row, y) => row.map((_, x) => <Cell key={`${y}_${x}`} />))}</GridLayer>
      <motion.div
        className="dice"
        drag
        dragConstraints={dragWrapperRef}
        whileDrag={{ backgroundColor: '#9f9f9f' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      />
    </Wrapper>
  )
}
export default Dice
