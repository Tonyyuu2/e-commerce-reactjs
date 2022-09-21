import React from 'react'
import './cartItem.styles.scss'

function CartItem({cartItem}) {

  const { name, quantity } = cartItem

  return (
    <div>
      <h2>{name}</h2>
      <h2>{quantity}</h2>
    </div>
  )
}

export default CartItem