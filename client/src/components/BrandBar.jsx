import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Context } from '..'
import Row from 'react-bootstrap/Row'
import Card from 'react-bootstrap/Card'

const BrandBar = observer(() => {
  const { device } = useContext(Context)

  const handleSelect = (type) => {
    device.setSelectedBrand(type)
  }

  return (
    <Row>
      {device.brands.map((b) => (
        <Card
          style={{ width: 'initial', cursor: 'pointer' }}
          key={b.id}
          border={b.id === device.selectedBrand.id ? 'danger' : 'light'}
          onClick={() => handleSelect(b)}
        >
          {b.name}
        </Card>
      ))}
    </Row>
  )
})

export default BrandBar
