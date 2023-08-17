import { Container } from '@mui/material';
import { IntroAnimation } from 'components/intro-animation';
import React from 'react';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <IntroAnimation>
        <Container component="main" maxWidth="md">
          {children}
        </Container>
      </IntroAnimation>
    </UILayout>
  );
}
