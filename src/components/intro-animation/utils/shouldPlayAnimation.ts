import { KEY_ANIMATION } from 'config/keys';

export function shouldPlayAnimation() {
  const dateStr = localStorage.getItem(KEY_ANIMATION);

  if (!dateStr) return true;

  const date = new Date(parseInt(dateStr, 10));
  const diff = Date.now() - +date;

  // 3 minutes
  const limit = 1000 * 60 * 3;

  return diff > limit;
}
