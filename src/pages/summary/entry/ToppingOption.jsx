import React from 'react'
import { Col } from 'react-bootstrap'

function ToppingOption({name,imagePath}) {
  return (
    <Col md={6}>
        <img src={`http://localhost:3030/${imagePath}`} alt={`${name} topping`} />
    </Col>
  )
}

export default ToppingOption
