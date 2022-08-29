import gear1 from 'assets/icons/gear1.svg';
import gear2 from 'assets/icons/gear2.svg';
import { AnimatePresence, motion } from 'framer-motion';
import React from 'react';

import { AnimationsProps } from './interface';
import { Gears } from './style';

export function Animations({ shouldShow }: AnimationsProps) {
  return (
    <Gears>
      <AnimatePresence>
        {shouldShow && (
          <motion.img
            id="gear1"
            src={gear1}
            alt="#"
            initial={{ top: '-100%', right: 100 }}
            animate={{ top: -120, transition: { duration: '0.8', ease: 'easeOut' } }}
            exit={{ top: '-100%', transition: { duration: '1.1', ease: 'easeIn' } }}
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {shouldShow && (
          <motion.img
            id="gear2"
            src={gear2}
            alt="#"
            initial={{ right: -400, top: -200 }}
            animate={{ right: -80, top: 40, transition: { duration: '0.7', ease: 'easeOut' } }}
            exit={{ right: -400, top: -200, transition: { duration: '1.1', ease: 'easeIn' } }}
          />
        )}
      </AnimatePresence>
    </Gears>
  );
}
