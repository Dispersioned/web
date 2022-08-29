import githubIcon from 'assets/icons/githubIcon.svg';
import headhunterIcon from 'assets/icons/headhunterIcon.svg';
import telegramIcon from 'assets/icons/telegramIcon.svg';
import { AnimatePresence, motion } from 'framer-motion';
import React, { useState } from 'react';

import { BurgerIcon, NavBtn, Wrapper } from './style';

export function Navigation() {
  const [isActive, setIsActive] = useState(false);

  const navBtnAnimation = [0, 1, 2].map((index) => ({
    initial: 'initial',
    animate: 'animate',
    exit: 'exit',
    variants: {
      initial: { y: -64, opacity: 0 },
      animate: { y: 15 * (index + 1), opacity: 1 },
      exit: { y: -64 * (index + 1), opacity: 0 },
    },
  }));

  return (
    <Wrapper>
      <motion.div>
        <BurgerIcon active={isActive} onClick={() => setIsActive(!isActive)}>
          <span />
        </BurgerIcon>
        <AnimatePresence>
          {isActive && (
            <motion.div
              key="navigation"
              initial={{ opacity: 0, pointerEvents: 'none' }}
              animate={{ opacity: 1, pointerEvents: 'all' }}
              exit={{ opacity: 0.2, pointerEvents: 'none' }}
              style={{ position: 'absolute', left: 0, right: 0, width: 64 }}
            >
              <NavBtn
                key="navigation-icon-github"
                {...navBtnAnimation[0]}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a href="https://github.com/Dispersioned" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="menu button" />
                </a>
              </NavBtn>

              <NavBtn
                key="navigation-icon-telegram"
                {...navBtnAnimation[1]}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a href="https://t.me/Dispersioned" target="_blank" rel="noreferrer">
                  <img src={telegramIcon} alt="menu button" />
                </a>
              </NavBtn>

              <NavBtn
                key="navigation-icon-headhunter"
                {...navBtnAnimation[2]}
                transition={{ duration: 0.3, ease: 'easeOut' }}
              >
                <a
                  href="https://rostov.hh.ru/applicant/resumes/view?resume=23e5510fff09055f900039ed1f327579537633"
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={headhunterIcon} alt="menu button" />
                </a>
              </NavBtn>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </Wrapper>
  );
}
