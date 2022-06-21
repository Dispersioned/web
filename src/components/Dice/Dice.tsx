import React, { useEffect, useState } from 'react'
import { closestCell } from '../../services/Dice'
import { CELLS, OFFSET } from '../../services/Dice/consts'
import { DiceProps, ITable } from './interface'
import { Cell, GridLayer, Pointer, Wrapper } from './style'

const Dice: React.FC<DiceProps> = ({ dragWrapperRef }) => {
  const [cells, setCells] = useState<ITable>(CELLS)

  const [coords, setCoords] = useState<{ x: number; y: number }>()
  const [animateTo, setAnimateTo] = useState<{ x: number; y: number }>()

  useEffect(() => {
    if (!coords) return
    const { row, col } = closestCell(coords, cells)
    const salt = Math.random()
    const pointerBugOffset = -3

    setAnimateTo({
      x: cells[row][col].x - OFFSET.x + salt + pointerBugOffset,
      y: cells[row][col].y - OFFSET.y + salt + pointerBugOffset,
    })
  }, [coords])

  return (
    <Wrapper ref={dragWrapperRef}>
      <GridLayer>{cells.map((row, y) => row.map((_, x) => <Cell key={`${y}_${x}`} />))}</GridLayer>
      <Pointer
        drag
        dragMomentum={false}
        initial={{ x: -3, y: -3 }}
        animate={animateTo}
        onDragEnd={(event, info) => setCoords({ x: info.point.x, y: info.point.y })}
        dragConstraints={dragWrapperRef}
        whileDrag={{ backgroundColor: '#9f9f9f' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      />
    </Wrapper>
  )
}
export default Dice
