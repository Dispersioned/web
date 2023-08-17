import { Typography } from '@mui/material';

type EducationCardProps = {
  date: {
    from: string;
    to: string;
  };
  name: string;
  specialization: string;
};

export function EducationCard({ date, name, specialization }: EducationCardProps) {
  return (
    <div>
      <Typography color="#666" fontStyle="italic">
        {date.from} — {date.to}
      </Typography>
      <Typography fontWeight="bold">{name}</Typography>
      <Typography>{specialization}</Typography>
    </div>
  );
}
