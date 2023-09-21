import React from 'react'
import './SpanText.css'

function SpanText({clase, texto}) {
  return (
    <span className={clase}>{texto}</span>
  )
}

export default SpanText