import { motion } from 'framer-motion'
import React from 'react'
import './style.css'

interface DiceProps {
  dragWrapperRef: React.MutableRefObject<null>
}

const Dice: React.FC<DiceProps> = ({ dragWrapperRef }) => {
  return (
    <div className="dice-wrapper" ref={dragWrapperRef}>
      <motion.div
        className="dice"
        drag
        dragConstraints={dragWrapperRef}
        whileDrag={{ backgroundColor: '#9f9f9f' }}
        dragTransition={{ bounceStiffness: 200, bounceDamping: 20 }}
      />
    </div>
  )
}
export default Dice
