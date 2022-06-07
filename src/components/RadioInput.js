import React from 'react'

const RadioButton = ({menu, name, handleChange, handleDisable, checked}) => {
  return (
    <div  className="col col-lg-2 mt-5">
        <div className="form-check">
            <input
              className="form-check-input" 
              name={name} 
              type="radio" 
              id={menu.value} 
              value={menu.id} 
              onChange={handleChange} 
              disabled={handleDisable} 
              checked={checked}
            />
            <label className="form-check-label" htmlFor={menu.value}>{menu.id} {menu.value}</label>
        </div>     
    </div>
  )
}

export default RadioButton