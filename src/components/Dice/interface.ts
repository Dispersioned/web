export interface DiceProps {
  dragWrapperRef: React.MutableRefObject<null>
}

export interface ICell {
  x: number
  y: number
}

export type ITable = ICell[][]
