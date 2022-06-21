export interface DiceProps {
  dragWrapperRef: React.MutableRefObject<null>
  setTitle: React.Dispatch<React.SetStateAction<string>>
}

export interface ICell {
  x: number
  y: number
}

export type ITable = ICell[][]
