import React from 'react'

export const EYInput = ({ label, value, onChange }) => {
  return (
    <div>
      <div>{label}</div>
      <input type="text" value={value} onChange={onChange} />
    </div>
  )
}
