import { Container } from '@mui/material';
import React from 'react';

import { UILayout } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <UILayout>
      <Container component="main" maxWidth="md" style={{ minHeight: '100vh' }}>
        {children}
      </Container>
    </UILayout>
  );
}
