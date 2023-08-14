import { Typography } from '@mui/material';
import globeIcon from 'assets/icons/globe.svg';

import { UILocation } from './styles';

type LocationProps = {
  location: string;
};

export function Location({ location }: LocationProps) {
  return (
    <UILocation>
      <img src={globeIcon} alt="#" style={{ width: 30, height: 30 }} />
      <Typography fontSize={17}>{location}</Typography>
    </UILocation>
  );
}
