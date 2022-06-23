import { Typography } from '@mui/material'
import React from 'react'
import { Wrapper } from './style'
import { motion } from 'framer-motion'

interface LayoutProps {
  title: string
}

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Typography variant="h1" fontSize="5rem" align="center">
        <motion.div
          key={title}
          initial={{ x: '40px', opacity: 0 }}
          animate={{ x: '0', opacity: 1 }}
        >
          {title}
        </motion.div>
      </Typography>

      {children}
    </Wrapper>
  )
}
export default Layout
