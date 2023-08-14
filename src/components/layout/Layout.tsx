import { Container } from '@mui/material';
import { IntroAnimation } from 'components/intro-animation';
import React from 'react';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <Container component="main" maxWidth="md" style={{ minHeight: '100vh' }}>
        <IntroAnimation>{children}</IntroAnimation>
      </Container>
    </UILayout>
  );
}
