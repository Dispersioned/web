import { motion } from 'framer-motion'
import styled from 'styled-components'

export const ContentDesktop = styled.div`
  display: grid;
  grid-template-columns: 1fr fit-content(100%) 1fr;
  column-gap: max(20px, 4vw);
  align-items: flex-start;
  overflow-y: hidden;
`

export const ContentMobile = styled.div`
  display: grid;
  row-gap: 20px;
  align-items: flex-start;
`

export const ContentColumn = styled.div`
  overflow: auto;
  height: 100%;
  padding-right: 10px;
`

export const MobileOverlay = styled(motion.img)`
  position: fixed;
  bottom: 20px;
  left: 0;
  width: 100vw;
  padding: 7px 0;
  height: 50px;
  z-index: 100000;
  transform: translateX(-50%);
`
