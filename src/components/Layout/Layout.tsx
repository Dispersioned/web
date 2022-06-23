import { Typography } from '@mui/material'
import { motion } from 'framer-motion'
import React from 'react'
import { getWindowSize, SIZES } from '../../services/sizes'
import { LayoutProps } from './interface'
import { WrapperLaptop, WrapperMobile } from './style'

const Layout: React.FC<LayoutProps> = ({ title, children }) => {
  const isMobile = getWindowSize() === SIZES.MOBILE
  const WrapperComponent = isMobile ? WrapperLaptop : WrapperMobile

  return (
    <WrapperComponent>
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
    </WrapperComponent>
  )
}
export default Layout
