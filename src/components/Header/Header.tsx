import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/img/logo.svg'
import Container from '../Container/Container'
import BurgerIcon from './BurgerIcon/BurgerIcon'
import * as S from './style'

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleBurger = (): void => {
    setIsOpen(!isOpen)
  }

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
          <div onClick={handleBurger}>
            <BurgerIcon className={isOpen ? 'active' : ''} />
          </div>
        </S.Body>
      </Container>
    </S.Header>
  )
}
export default Header
