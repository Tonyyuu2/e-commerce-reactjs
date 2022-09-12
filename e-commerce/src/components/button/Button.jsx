import React from 'react'

const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

function Button({ children, buttonType }) {
  return (
    <button className={`button-container ${BUTTON_TYPE_CLASSES}`}>
      {children}
    </button>
  )
}

export default Button