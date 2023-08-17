import { Typography } from '@mui/material';

import { Company } from './style';
import { IWorkingExperience } from 'shared/types';

type WorkCardProps = {
  experience: IWorkingExperience;
};

export function WorkCard({ experience }: WorkCardProps) {
  const { company, date, experience: workingExperience } = experience;

  return (
    <div style={{ marginBottom: 20 }}>
      <Typography color='#666' fontStyle='italic'>
        {date.from} — {date.to}
      </Typography>
      <Company>{company}</Company>
      {workingExperience.map((text) => (
        <Typography key={text} style={{ marginBottom: 8 }}>
          {text}
        </Typography>
      ))}
    </div>
  );
}
