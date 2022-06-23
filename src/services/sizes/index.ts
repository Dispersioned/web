export enum SIZES {
  MOBILE,
  LAPTOP,
}

export function getWindowSize() {
  return window.innerWidth <= 900 ? SIZES.MOBILE : SIZES.LAPTOP
}
