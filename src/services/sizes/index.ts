export enum SIZES {
  DESKTOP,
  LAPTOP,
}

export function getWindowSize() {
  return window.innerWidth <= 900 ? SIZES.DESKTOP : SIZES.LAPTOP
}
