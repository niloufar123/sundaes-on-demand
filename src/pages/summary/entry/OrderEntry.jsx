import React from 'react'
import Options from './options'

function OrderEntry() {
  return (
    <div>
        <Options optionType='scoops' />
        <Options optionType='toppings' />
    </div>
  )
}

export default OrderEntry
