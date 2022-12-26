import React from 'react';

import { UILayout } from './style';

export type LayoutProps = React.PropsWithChildren;

export function Layout({ children }: LayoutProps) {
  return <UILayout>{children}</UILayout>;
}
