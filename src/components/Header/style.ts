import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 1000;

  background: linear-gradient(
    90.42deg,
    #152654 -4.59%,
    #172f6d 15.27%,
    #10214a 28.47%,
    #132e72 45.38%,
    #071a4e 65.45%,
    #222222 96.82%
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
