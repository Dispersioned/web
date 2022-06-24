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
        <motion.img
          style={{ cursor: 'pointer' }}
          animate={{ opacity: 1, width: 64, height: 64 }}
          src={burger}
          alt="menu button"
        />
        <AnimatePresence>
          {isNavHovered && (
            <motion.div
              key="navigation"
              initial={{ opacity: 0, pointerEvents: 'none' }}
              animate={{ opacity: 1, pointerEvents: 'all' }}
              exit={{ opacity: 0.2, pointerEvents: 'none' }}
              style={{ position: 'absolute', left: 0, right: 0, width: 64 }}
            >
              <motion.div
                key="navigation-icon-github"
                initial={{ y: -64, opacity: 0 }}
                animate={{ y: 15, opacity: 1 }}
                exit={{ y: -64, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a href="https://github.com/Dispersioned" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="menu button" />
                </a>
              </motion.div>

              <motion.div
                key="navigation-icon-telegram"
                initial={{ y: -64 - 64, opacity: 0 }}
                animate={{ y: 30, opacity: 1 }}
                exit={{ y: -64 - 64, opacity: 0 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a href="https://t.me/Dispersioned" target="_blank" rel="noreferrer">
                  <img src={telegramIcon} alt="menu button" />
                </a>
              </motion.div>

              <motion.div
                key="navigation-icon-headhunter"
                initial={{ y: -64 - 64 - 64, opacity: 0 }}
                animate={{ y: 45, opacity: 1 }}
                exit={{ y: -64 - 64 - 64, opacity: 0 }}
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
