import React, { useContext, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { observer } from 'mobx-react-lite'

import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'

import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/constants'
import { login, registration } from '../http/userAPI'
import { Context } from '..'

const Auth = observer(() => {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useContext(Context)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const isLogin = location.pathname === LOGIN_ROUTE

  const handleButtonClick = async () => {
    let userData

    try {
      if (isLogin) {
        userData = await login(email, password)
      } else {
        userData = await registration(email, password)
      }
      user.setUser(userData)
      user.setIsAuth(true)
      navigate(SHOP_ROUTE)
    } catch (e) {
      console.debug(e)
      const message = e.response?.data?.message
      if (message) alert(message)
    }
    console.log(user)
  }

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизция' : 'Регистрация'}</h2>
        <Form>
          <Form.Control
            className="mt-3"
            placeholder="Введите email"
            type="email"
            value={email}
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <Form.Control
            className="mt-3"
            placeholder="Введите пароль"
            type="password"
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <div className="d-flex justify-content-between align-items-center mt-3 px-3">
            {isLogin ? (
              <div>
                Нет аккаунта?{' '}
                <NavLink to={REGISTRATION_ROUTE}>Зарегистрируйся</NavLink>
              </div>
            ) : (
              <div>
                Есть аккаунт? <NavLink to={LOGIN_ROUTE}>Войдине</NavLink>
              </div>
            )}

            <Button variant="outline-success" onClick={handleButtonClick}>
              {isLogin ? 'Войти' : 'Регистрция'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
})

export default Auth
