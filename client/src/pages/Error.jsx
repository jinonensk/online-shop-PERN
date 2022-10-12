import React from 'react'
import { Link } from 'react-router-dom'
import { SHOP_ROUTE } from '../utils/constants'

const Error = () => {
  return (
    <div>
      <p>Ой. Нет такой такой страницы</p>
      <Link to={SHOP_ROUTE}>На главну {'->'}</Link>
    </div>
  )
}

export default Error
