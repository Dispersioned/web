import { Typography } from '@mui/material';
import globeIcon from 'assets/icons/globe.svg';

export function Location() {
  return (
    <Typography
      component="div"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 5,
        fontSize: 17,
      }}
    >
      <img src={globeIcon} alt="#" style={{ width: 30, height: 30 }} />
      Russia, Rostov-on-Don
    </Typography>
  );
}
