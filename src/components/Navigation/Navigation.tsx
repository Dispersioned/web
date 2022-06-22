import { AnimatePresence, motion } from 'framer-motion'
import React, { useState } from 'react'
import burger from '../../assets/icons/burger.svg'
import githubIcon from '../../assets/icons/githubIcon.svg'
import headhunterIcon from '../../assets/icons/headhunterIcon.svg'
import telegramIcon from '../../assets/icons/telegramIcon.svg'
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
              key="menu"
              initial={{ opacity: 0, pointerEvents: 'none', y: -60 }}
              animate={{ opacity: 1, pointerEvents: 'all', y: -60 }}
              exit={{ opacity: 0.2, pointerEvents: 'none', y: 0 }}
            >
              <motion.div
                key="menu-github"
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
                key="menu-headhunter"
                initial={{ y: -65, opacity: 0 }}
                animate={{ y: 20, opacity: 1 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a
                  href="https://rostov.hh.ru/resume/23e5510fff09055f900039ed1f327579537633"
                  target="_blank"
                  rel="noreferrer"
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
