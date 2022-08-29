import back from 'assets/icons/back.svg';
import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { WelcomeGenerator } from 'shared/lib/dice';
import { isMobile } from 'shared/lib/sizes';

import { MobileOverlay } from './style';

export interface BackBtnMobileProps {
  title: string;
  callback: () => void;
}

export function BackBtnMobile({ title, callback }: BackBtnMobileProps) {
  return (
    <AnimatePresence>
      {isMobile() && !WelcomeGenerator.phrases.includes(title) && (
        <MobileOverlay
          key="back"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          initial={{ x: 0, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
          onDrag={(_, info) => {
            if (info.offset.x > 125) callback();
          }}
        >
          <img src={back} alt="previous page" />
        </MobileOverlay>
      )}
    </AnimatePresence>
  );
}
