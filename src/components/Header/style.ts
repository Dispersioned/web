import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;

  background: linear-gradient(
    90.42deg,
    #152654 -4.59%,
    rgba(26, 50, 111, 0.812463) 14.43%,
    rgba(14, 38, 100, 0.568583) 39.16%,
    rgba(21, 61, 165, 0.302727) 62.28%,
    rgba(14, 44, 122, 0.120067) 75.3%,
    rgba(11, 33, 92, 0.0799027) 82.5%,
    rgba(11, 24, 58, 0.0404166) 89.58%,
    rgba(23, 38, 77, 0) 96.82%
  );
`

export const Body = styled.div`
  display: flex;
  align-items: center;
`

export const Logo = styled.img`
  display: inline-block;
  width: 70px;
  height: 90px;
`

export const Navbar = styled.div`
  margin-left: 100px;
  display: grid;
  grid-auto-flow: column;
  justify-content: center;
  grid-gap: 50px;
`

export const Navlink = styled(NavLink)`
  position: relative;
  color: #fff;
  font-size: 30px;
  transition: all 0.3s ease;

  &.active {
    font-weight: 700;
  }

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translateX(-50%);
    width: 0;
    height: 1px;
    background-color: #fff;
    transition: all 0.3s ease;
  }

  &:hover {
    &::before {
      width: 100%;
    }
  }
`