import { Typography } from '@mui/material'
import { PanInfo } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { closestCell } from '../../services/Dice'
import { DICE_CELL_SIZE, GAP } from '../../services/Dice/consts'
import { DiceProps, ICell, ITable } from './interface'
import { Cell, GridLayer, Pointer, Wrapper } from './style'

// must be square
const cellText: (string | null)[][] = [
  ['About me', null, 'Projects'],
  [null, null, null],
  ['Skills', null, 'Experience'],
]

const Dice: React.FC<DiceProps> = ({ dragWrapperRef }) => {
  const [cells, setCells] = useState<ITable>()

  const [point, setPoint] = useState<ICell>()
  const [animateTo, setAnimateTo] = useState<ICell>()
  const [offset, setOffset] = useState<(ICell & { settled: boolean }) | null>(null) // framer-motion and local coords offset
  const [zeroPoint, setZeroPoint] = useState<ICell | null>(null) // top left grid cell

  useEffect(() => {
    // mock offset. Will be inited properly on first drag
    setOffset({ x: window.innerWidth / 2, y: window.innerHeight / 2, settled: false })
  }, [])

  const handleInitOffset = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!offset || offset.settled) return
    setOffset({ x: info.point.x, y: info.point.y, settled: true })
  }

  useEffect(() => {
    if (!offset) return
    setZeroPoint({ x: offset.x - DICE_CELL_SIZE - GAP, y: offset.y - DICE_CELL_SIZE - GAP })
  }, [offset])

  useEffect(() => {
    if (!zeroPoint) return
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function generateCells(skeleton: any[][]) {
      let newCells: ITable = []

      for (let i = 0; i < skeleton.length; i++) {
        const row = []
        for (let j = 0; j < skeleton.length; j++) {
          row.push({
            x: zeroPoint!.x + (DICE_CELL_SIZE + GAP) * j,
            y: zeroPoint!.y + (DICE_CELL_SIZE + GAP) * i,
          })
        }
        newCells.push(row)
      }

      return newCells
    }

    const newCells = generateCells(cellText)

    setCells(newCells)
  }, [zeroPoint])

  useEffect(() => {
    if (!point || !cells || !offset) return

    const { row, col } = closestCell(point, cells)
    const salt = Math.random() // needed for framer motion to recognize small movements
    const pointerBugOffset = -3

    setAnimateTo({
      x: cells[row][col].x - offset.x + salt + pointerBugOffset,
      y: cells[row][col].y - offset.y + salt + pointerBugOffset,
    })
  }, [point])

  return (
    <Wrapper ref={dragWrapperRef}>
      <GridLayer>
        {cells &&
          cells.map((row, y) =>
            row.map((_, x) => (
              <Cell key={`${y}_${x}`}>
                <Typography
                  fontSize={20}
                  zIndex={100}
                  style={{ pointerEvents: 'none', userSelect: 'none' }}
                >
                  {cellText[y][x]}
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
        onDragStart={handleInitOffset}
        onDragEnd={(event, info) => setPoint({ x: info.point.x, y: info.point.y })}
        dragConstraints={dragWrapperRef}
        whileDrag={{ backgroundColor: '#9f9f9f' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      />
    </Wrapper>
  )
}
export default Dice
