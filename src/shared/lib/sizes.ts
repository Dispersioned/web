export const SIZES = {
  mobile: 'mobile',
  desktop: 'desktop',
};

export function getWindowSize() {
  return window.innerWidth <= 1024 ? SIZES.mobile : SIZES.desktop;
}

export function isMobile() {
  return getWindowSize() === SIZES.mobile;
}
