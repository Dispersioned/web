import { ITable, ICell } from './../../components/Dice/interface'

export function closestCell(point: ICell, cells: ITable) {
  let best: { row: number; col: number; distance: number } | null = null

  for (let i = 0; i < cells.length; i++) {
    for (let j = 0; j < cells[i].length; j++) {
      const distance = Math.sqrt((point.x - cells[i][j].x) ** 2 + (point.y - cells[i][j].y) ** 2)
      if (!best) best = { row: i, col: j, distance }
      else if (distance < best.distance) best = { row: i, col: j, distance }
    }
  }

  return {
    row: best!.row,
    col: best!.col,
  }
}

export function getRandomPhrase(): string {
  const phrases = [
    'Hola!',
    'Bonjour!',
    'Guten tag!',
    'Salve!',
    'Nǐn hǎo!',
    'Olá!',
    'Konnichiwa!',
    'Привет!',
    'Shalom!',
    'Yassas!',
    'Dzień dobry!',
    'Merhaba!',
    'Zdraveite!',
    'Hyvää päivää!',
    'Selamat siang!',
    'Zdravo!',
  ]

  return phrases[Math.floor(Math.random() * phrases.length)]
}
