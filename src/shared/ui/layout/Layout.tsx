import { motion } from 'framer-motion';
import React from 'react';

import { Title, Wrapper } from './style';

export type LayoutProps = React.PropsWithChildren<{
  title: string;
}>;

export function Layout({ title, children }: LayoutProps) {
  return (
    <Wrapper>
      <Title variant="h1" align="center">
        <motion.div key={title} initial={{ x: '40px', opacity: 0 }} animate={{ x: '0', opacity: 1 }}>
          {title}
        </motion.div>
      </Title>

      {children}
    </Wrapper>
  );
}
