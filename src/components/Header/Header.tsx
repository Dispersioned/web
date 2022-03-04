import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import Container from '../Container/Container'
import * as S from './style'

const Header: React.FC = () => {
  return (
    <S.Header>
      <Container>
        <S.Body>
          <Link to="/">
            <S.Logo src={logo} alt="Dispersioned logo" />
          </Link>
          <S.Navbar>
            <S.Navlink to="/projects">Projects</S.Navlink>
            <S.Navlink to="/experience">Work Experience</S.Navlink>
            <S.Navlink to="/bio">Bio</S.Navlink>
          </S.Navbar>
        </S.Body>
      </Container>
    </S.Header>
  )
}
export default Header
