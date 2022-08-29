import { motion } from 'framer-motion';
import React from 'react';

import { LayoutProps } from './interface';
import { Title, Wrapper } from './style';

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
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
};
export default Layout;
