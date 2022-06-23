export enum SIZES {
  MOBILE,
  LAPTOP,
}

export function getScreenSize() {
  return window.innerWidth <= 900 ? SIZES.MOBILE : SIZES.LAPTOP
}
