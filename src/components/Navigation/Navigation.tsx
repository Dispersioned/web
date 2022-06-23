import { IconButton } from '@mui/material'
import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import back from '../../assets/icons/back.svg'
import burger from '../../assets/icons/burger.svg'
import githubIcon from '../../assets/icons/githubIcon.svg'
import headhunterIcon from '../../assets/icons/headhunterIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
import { isMobile } from '../../services/sizes'
import { Wrapper } from './style'

const Navigation: React.FC = () => {
  const [isNavHovered, setIsNavHovered] = useState(false)

  return (
    <Wrapper>
      <motion.div
        onHoverStart={() => setIsNavHovered(true)}
        onHoverEnd={() => setIsNavHovered(false)}
      >
        {!isNavHovered && (
          <motion.img
            initial={{ width: 0, height: 0 }}
            animate={{ opacity: 1, width: 64, height: 64 }}
            src={burger}
            alt="menu button"
          />
        )}
        <AnimatePresence>
          {isNavHovered && (
            <motion.div
              key="navigation"
              initial={{ opacity: 0, pointerEvents: 'none', y: -60 }}
              animate={{ opacity: 1, pointerEvents: 'all', y: -60 }}
              exit={{ opacity: 0.2, pointerEvents: 'none', y: 0 }}
            >
              <motion.div
                key="navigation-icon-github"
                initial={{ y: 62, opacity: 0 }}
                animate={{ y: -20, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a href="https://github.com/Dispersioned" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="menu button" />
                </a>
              </motion.div>
              <a href="https://t.me/Dispersioned" target="_blank" rel="noreferrer">
                <img src={telegramIcon} alt="menu button" />
              </a>
              <motion.div
                key="navigation-icon-headhunter"
                initial={{ y: -65, opacity: 0 }}
                animate={{ y: 20, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a
                  href="#disabled"
                  title="i don't wanna keep my hh up to date so link's disabled. Write to me in telegram"
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => {
                    e.preventDefault()
                  }}
                >
                  <img src={headhunterIcon} alt="menu button" />
                </a>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Wrapper>
  )
}
export default Navigation
