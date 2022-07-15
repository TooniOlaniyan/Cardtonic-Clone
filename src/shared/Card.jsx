import React from 'react'
import {useState} from 'react'



function Card({children , reverse }) {
  const [hover , setHover] = useState(false)
  const [changeColor, setChangeColor] = useState(false);
 



  return (
    <div
      onMouseEnter={() => setHover(true) & setChangeColor(true)}
      onMouseLeave={() => setHover(false) & setChangeColor(false) }
      className="card"
      style={{
        backgroundColor: reverse & !hover ? "#fff" : "#002444",
        color: changeColor? "#fff" : "#1b507e",
      }}
    >
      {children}
    </div>
  );
}
Card.defaultProps = {
  reverse: true
}

export default Card