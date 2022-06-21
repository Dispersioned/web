import { Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { closestCell } from '../../services/Dice'
import { CELLS, OFFSET } from '../../services/Dice/consts'
import { DiceProps, ITable } from './interface'
import { Cell, GridLayer, Pointer, Wrapper } from './style'

const Dice: React.FC<DiceProps> = ({ dragWrapperRef }) => {
  const [cells, setCells] = useState<ITable>(CELLS)

  const [cellText, setCellText] = useState([
    ['About me', null, 'Projects'],
    [null, null, null],
    ['Skills', null, 'Experience'],
  ])

  const [point, setPoint] = useState<{ x: number; y: number }>()
  const [animateTo, setAnimateTo] = useState<{ x: number; y: number }>()

  useEffect(() => {
    if (!point) return
    const { row, col } = closestCell(point, cells)
    const salt = Math.random() // needed for framer motion to recognize small movements
    const pointerBugOffset = -3

    setAnimateTo({
      x: cells[row][col].x - OFFSET.x + salt + pointerBugOffset,
      y: cells[row][col].y - OFFSET.y + salt + pointerBugOffset,
    })
  }, [point])

  return (
    <Wrapper ref={dragWrapperRef}>
      <GridLayer>
        {cells.map((row, y) =>
          row.map((_, x) => (
            <Cell key={`${y}_${x}`}>
              <Typography
                fontSize={20}
                zIndex={100}
                style={{ pointerEvents: 'none', userSelect: 'none' }}
              >
                {cellText[x][y]}
              </Typography>
            </Cell>
          ))
        )}
      </GridLayer>
      <Pointer
        drag
        dragMomentum={false}
        initial={{ x: -3, y: -3 }}
        animate={animateTo}
        onDragEnd={(event, info) => setPoint({ x: info.point.x, y: info.point.y })}
        dragConstraints={dragWrapperRef}
        whileDrag={{ backgroundColor: '#9f9f9f' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      />
    </Wrapper>
  )
}
export default Dice
