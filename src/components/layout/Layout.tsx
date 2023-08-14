import { Container } from '@mui/material';
import { IntroAnimation } from 'components/intro-animation';
import React from 'react';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <IntroAnimation>
        <Container
          component="main"
          maxWidth="md"
          style={{
            minHeight: '100vh',
            background: 'rgba(216, 205, 197, 0.4)',
            padding: '0 36px',
            borderWidth: '0 2px',
            borderStyle: 'solid',
            borderImage: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.05)) 1 100%',
          }}
        >
          {children}
        </Container>
      </IntroAnimation>
    </UILayout>
  );
}
