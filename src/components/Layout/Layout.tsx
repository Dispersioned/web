import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { LayoutProps } from './interface'
import { Wrapper } from './style'

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  return (
    <Wrapper>
      <Typography
        variant="h1"
        align="center"
        sx={{ fontSize: { xs: '3rem', sm: '4rem', md: '5rem' } }}
      >
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
