import React from 'react'
import Container from '../Container/Container'
import * as S from './style'
import logo from '../../assets/img/logo.svg'
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom'

const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <S.Body>
          <Link to="/">
            <S.Logo src={logo} alt="Dispersioned logo" />
          </Link>
          <S.Navbar>
            <NavLink to="/projects">
              <S.Navlink>Projects</S.Navlink>
            </NavLink>
            <NavLink to="/experience">
              <S.Navlink>Work Experience</S.Navlink>
            </NavLink>
            <NavLink to="/bio">
              <S.Navlink>Bio</S.Navlink>
            </NavLink>
          </S.Navbar>
        </S.Body>
      </Container>
    </S.Header>
  )
}
export default Header
