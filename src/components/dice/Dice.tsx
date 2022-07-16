import { Typography } from '@mui/material'
import { motion, PanInfo } from 'framer-motion'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { useNavigate } from 'react-router'
import { DICE_CELL_SIZE, GAP, SECTIONS } from '../../config'
import { closestCell, generateBones, random, WelcomeGenerator } from '../../services/dice'
import DiceCell from '../dice-cell/DiceCell'
import { DiceProps, ICell, ITable } from './interface'
import { GridLayer, Pointer, Wrapper } from './style'

// must be square
const cellText: (string | null)[][] = [
  [SECTIONS.ABOUT_ME, null, SECTIONS.PROJECTS],
  [null, null, null],
  [SECTIONS.SKILLS, null, SECTIONS.EXPERIENCE],
]

const Dice: React.FC<DiceProps> = ({ setTitle }) => {
  const navigate = useNavigate()
  const dragWrapper = useRef(null)

  // offset for gluing framer-motion & dice pointer
  const [offset, setOffset] = useState<ICell & { settled: boolean }>({
    // mock offset. Will be inited properly on first drag
    x: document.body.clientWidth / 2,
    y: document.body.clientHeight / 2,
    settled: false,
  })

  const handleInitOffset = (event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (offset.settled) return
    setOffset({ x: info.point.x, y: info.point.y, settled: true })
  }

  const topLeftCell = useMemo<ICell>(
    () => ({
      x: offset.x - DICE_CELL_SIZE - GAP,
      y: offset.y - DICE_CELL_SIZE - GAP,
    }),
    [offset]
  )

  const cells = useMemo<ITable>(() => {
    function generateCells(skeleton: (string | null)[][]) {
      let newCells: ITable = []

      for (let i = 0; i < skeleton.length; i++) {
        const row = []
        for (let j = 0; j < skeleton.length; j++) {
          row.push({
            x: topLeftCell!.x + (DICE_CELL_SIZE + GAP) * j,
            y: topLeftCell!.y + (DICE_CELL_SIZE + GAP) * i,
          })
        }
        newCells.push(row)
      }
      return newCells
    }
    return generateCells(cellText)
  }, [topLeftCell])

  const [point, setPoint] = useState<ICell>()
  const [animateTo, setAnimateTo] = useState<ICell>()
  const [selectedCell, setSelectedCell] = useState({ row: 1, col: 1 })
  const [bones] = useState(generateBones(random(2, 5)))

  useEffect(() => {
    if (!point) return

    const cell = closestCell(point, cells)
    setSelectedCell(cell)

    const POINTER_COMPUTATIONAL_ERROR = -3
    const salt = Math.random() // needed for framer motion to recognize small movements
    const { row, col } = cell
    setAnimateTo({
      x: cells[row][col].x - offset.x + salt + POINTER_COMPUTATIONAL_ERROR,
      y: cells[row][col].y - offset.y + salt + POINTER_COMPUTATIONAL_ERROR,
    })
    if (row === 0 && col === 2) navigate('/projects')

    setTitle(cellText[row][col] || WelcomeGenerator.generate())
  }, [navigate, offset, cells, point, setTitle])

  return (
    <Wrapper ref={dragWrapper}>
      <GridLayer>
        {cells &&
          cells.map((row, y) =>
            row.map((_, x) => (
              <DiceCell key={`${y}_${x}`} bones={bones[3 * y + x]}>
                <motion.div
                  animate={{ opacity: selectedCell.row === y && selectedCell.col === x ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Typography
                    fontSize={20}
                    zIndex={100}
                    position="relative"
                    style={{ pointerEvents: 'none', userSelect: 'none' }}
                  >
                    {cellText[y][x]}
                  </Typography>
                </motion.div>
              </DiceCell>
            ))
          )}
      </GridLayer>
      <Pointer
        key="pointer"
        drag
        dragMomentum={false}
        initial={{ x: -3, y: -3 }}
        animate={animateTo}
        exit={{
          position: 'fixed',
          width: '3500px',
          height: '3500px',
          color: 'var(--color-gray-200)',
          transition: { duration: 0.7 },
        }}
        onDragStart={handleInitOffset}
        onDragEnd={(event, info) => setPoint({ x: info.point.x, y: info.point.y })}
        dragConstraints={dragWrapper}
        whileDrag={{ backgroundColor: '#9f9f9f', color: '#9f9f9f' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      >
        <Typography style={{ pointerEvents: 'none', userSelect: 'none' }}>Drag</Typography>
      </Pointer>
    </Wrapper>
  )
}
export default Dice
