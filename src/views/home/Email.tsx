import { Link, Typography } from '@mui/material';
import emailIcon from 'assets/icons/email.svg';

import { EmailLink, UIEmail } from './styles';

type EmailProps = {
  email: string;
};

export function Email({ email }: EmailProps) {
  return (
    <UIEmail>
      <img src={emailIcon} alt="email me" style={{ width: 34, height: 34, position: 'relative', top: 3 }} />
      <Typography fontSize={17}>
        <EmailLink color="inherit" href={`mailto:${email}`} target="_blank">
          {email}
        </EmailLink>
      </Typography>
    </UIEmail>
  );
}
