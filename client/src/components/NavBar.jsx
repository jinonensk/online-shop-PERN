import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import Button from 'react-bootstrap/Button'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { NavLink, useNavigate } from 'react-router-dom'
import { Context } from '..'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/constants'

const NavBar = observer(() => {
  const { user } = useContext(Context)
  const navigate = useNavigate()

  const handleAuth = () => {
    user.setIsAuth(true)
  }
  const handleLogout = () => {
    navigate(LOGIN_ROUTE)
    user.setIsAuth(false)
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>
          КупиДевайс
        </NavLink>
        {user.isAuth ? (
          <Nav className="ms-auto">
            <Button
              variant="outline-light"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              Админ панель
            </Button>
            <Button
              variant="outline-light"
              className="ms-2"
              onClick={handleLogout}
            >
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
