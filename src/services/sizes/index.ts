export enum SIZES {
  MOBILE,
  DESKTOP,
}

export function getWindowSize() {
  return window.innerWidth <= 1024 ? SIZES.MOBILE : SIZES.DESKTOP;
}

export function isMobile() {
  return getWindowSize() === SIZES.MOBILE;
}
