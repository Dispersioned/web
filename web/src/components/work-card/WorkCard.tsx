import { Typography } from '@mui/material';

import { Company } from './style';

type WorkCardProps = {
  date: {
    from: string;
    to: string;
  };
  company: string;
  experience: string | string[];
};

export function WorkCard({ date, company, experience }: WorkCardProps) {
  let experienceBlocks: string[];

  if (Array.isArray(experience)) experienceBlocks = experience;
  else experienceBlocks = [experience];

  return (
    <div style={{ marginBottom: 20 }}>
      <Typography color="#666" fontStyle="italic">
        {date.from} — {date.to}
      </Typography>
      <Company>{company}</Company>
      {experienceBlocks.map((text) => (
        <Typography key={text} style={{ marginBottom: 8 }}>
          {text}
        </Typography>
      ))}
    </div>
  );
}
