import { motion } from 'framer-motion';
import styled from 'styled-components'

export const Wrapper = styled.nav`
  position: fixed;
  z-index: 1001;
  left: max(15px, 3vw);
  top: calc(10vh + 0.8rem);

  @media (max-width: 1400px) {
    top: calc(10.5vh)
  }
  @media (max-width: 1199px) {
    top: calc(7.5vh);
  }
  @media (max-width: 991px) {
    top: calc(4vh);
  }
`

export const BurgerIcon = styled.div<{ active: boolean }>`
  position: relative;
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: var(--color-gray-100);
  cursor: pointer;
  user-select: none;

  span {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: ${({ active }) =>
      active ? 'translate(-50%, -50%) rotate(45deg);' : 'translate(-50%, -50%);'};
    width: 32px;
    height: 3px;
    background-color: var(--color-gray-200);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;

    display: block;
    width: 32px;
    height: 3px;
    background-color: var(--color-gray-200);
    border-radius: 4px;
    transition: all 0.3s ease;
  }

  &::before {
    transform: ${({ active }) =>
      active ? 'translate(-50%, -50%) rotate(45deg);' : 'translate(-50%, 50%);'};
    left: 50%;
    top: ${({ active }) => (active ? '50%' : '28%')};
  }

  &::after {
    transform: translate(-50%, -50%);
    transform: ${({ active }) =>
      active ? 'translate(-50%, 50%) rotate(135deg);' : 'translate(-50%, --50%);'};
    left: 50%;
    bottom: ${({ active }) => (active ? '50%' : '28%')};
  }
`

export const NavBtn = styled(motion.div)`
  user-select: none;
`;
