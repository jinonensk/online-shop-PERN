import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  LOGIN_ROUTE,
  SHOP_ROUTE,
} from '../utils/constants'

const PRIVATE_ROUTES = [BASKET_ROUTE, ADMIN_ROUTE]

const Error = () => {
  const { pathname } = useLocation()

  return (
    <div>
      {PRIVATE_ROUTES.includes(pathname) ? (
        <>
          <p>Нужно авторизоваться чтобы продолжиь</p>
          <Link to={LOGIN_ROUTE}>Залогинитья {'->'}</Link>
        </>
      ) : (
        <>
          <p>Ой. Нет такой такой страницы</p>
          <Link to={SHOP_ROUTE}>На главну {'->'}</Link>
        </>
      )}
    </div>
  )
}

export default Error
