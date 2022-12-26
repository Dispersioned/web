import React from 'react';
import { Navigation } from 'widgets/navigation';

import { LayoutRoot } from './style';

type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return (
    <LayoutRoot>
      <Navigation />
      <main>{children}</main>
    </LayoutRoot>
  );
}
