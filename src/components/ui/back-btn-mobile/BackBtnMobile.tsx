import { AnimatePresence } from 'framer-motion'
import React from 'react'
import back from '../../../assets/icons/back.svg'
import { WelcomeGenerator } from '../../../services/dice'
import { isMobile } from '../../../services/sizes'
import { BackBtnMobileProps } from './interface'
import { MobileOverlay } from './style'

const BackBtnMobile: React.FC<BackBtnMobileProps> = ({ title, callback }) => {
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
            if (info.offset.x > 125) callback()
          }}
        >
          <img src={back} alt="previous page" />
        </MobileOverlay>
      )}
    </AnimatePresence>
  )
}
export default BackBtnMobile
