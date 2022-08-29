export interface DiceProps {
  setTitle: React.Dispatch<React.SetStateAction<string>>;
}

export interface ICell {
  x: number;
  y: number;
}

export type ITable = ICell[][];
