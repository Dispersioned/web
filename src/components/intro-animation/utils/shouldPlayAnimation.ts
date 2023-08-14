import { KEY_ANIMATION } from 'config/keys';

export function shouldPlayAnimation() {
  const dateStr = localStorage.getItem(KEY_ANIMATION);

  if (!dateStr) return true;

  const date = new Date(parseInt(dateStr, 10));
  const diff = Date.now() - +date;

  // 10 minutes
  const limit = 1000 * 60 * 10;

  return diff > limit;
}
