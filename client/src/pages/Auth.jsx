import React from 'react'
import { useLocation } from 'react-router-dom'
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { NavLink } from 'react-router-dom'
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/constants'

const Auth = () => {
  const location = useLocation()
  const isLogin = location.pathname === LOGIN_ROUTE
  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? 'Авторизция' : 'Регистрация'}</h2>
        <Form>
          <Form.Control className="mt-3" placeholder="Введите email" />
          <Form.Control className="mt-3" placeholder="Введите пароль" />
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

            <Button variant="outline-success">
              {isLogin ? 'Войти' : 'Регистрция'}
            </Button>
          </div>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
