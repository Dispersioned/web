import { ICells } from '../../components/Dice/interface'

export const DICE_SIZE = 370
export const GAP = 4
export const DICE_CELL_SIZE = Math.floor(DICE_SIZE / 3) - GAP

export const OFFSET = {
  x: 625,
  y: 530,
}

export const ZERO_POINT = {
  x: OFFSET.x - DICE_CELL_SIZE - GAP,
  y: OFFSET.y - DICE_CELL_SIZE - GAP,
}

export function generateCells(skeleton: number[][]) {
  let cells: ICells = []

  for (let i = 0; i < skeleton.length; i++) {
    const row = []
    for (let j = 0; j < skeleton.length; j++) {
      row.push({
        x: ZERO_POINT.x + (DICE_CELL_SIZE + GAP) * j,
        y: ZERO_POINT.y + (DICE_CELL_SIZE + GAP) * i,
      })
    }
    cells.push(row)
  }

  return cells
}

export const CELLS: ICells = generateCells([
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0],
])
