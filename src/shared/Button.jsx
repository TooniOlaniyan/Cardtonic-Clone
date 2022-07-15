import React from 'react'

function Button({children , reverse}) {
  return (
    <div className='btn' style={{
      backgroundColor: reverse ? '#ffeaca' : '#f8f8f8'
    }}>{children}</div>
  )
}
Button.defaultProps = {
  reverse: true
}

export default Button