import React from 'react'
import './cartDropDown.styles.scss'
import Button from '../button/Button'

function CartDropDown() {
  return (
    <div className='cart-dropdown-container'>
      <div className='cart-items'>
        <Button>CHECKOUT</Button>
      </div>
    </div>
  )
}

export default CartDropDown