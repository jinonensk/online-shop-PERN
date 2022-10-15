import React, { useContext } from 'react'
import { observer } from 'mobx-react-lite'
import { Context } from '..'
import ListGroup from 'react-bootstrap/ListGroup'

const TypeBar = observer(() => {
  const { device } = useContext(Context)

  const handleSelect = (type) => {
    device.setSelectedType(type)
  }

  return (
    <ListGroup>
      {device.types.map((t) => (
        <ListGroup.Item
          style={{ cursor: 'pointer' }}
          key={t.id}
          active={t.id === device.selectedType.id}
          onClick={() => handleSelect(t)}
        >
          {t.name}
        </ListGroup.Item>
      ))}
    </ListGroup>
  )
})

export default TypeBar
