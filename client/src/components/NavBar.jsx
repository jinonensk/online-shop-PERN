import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink } from 'react-router-dom'
import { Context } from '..'
import { SHOP_ROUTE } from '../utils/constants'

const NavBar = observer(() => {
  const { user } = useContext(Context)

  const handleAuth = () => {
    user.setIsAuth(true)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto">
            <Button variant="outline-light">Авторизция</Button>
            <Button variant="outline-light" className="ms-2">
              Выйти
            </Button>
          </Nav>
        ) : (
          <Nav className="ms-auto">
            <Button variant="outline-light" onClick={handleAuth}>
              Авторизция
            </Button>
          </Nav>
        )}
      </Container>
    </Navbar>
  )
})

export default NavBar
