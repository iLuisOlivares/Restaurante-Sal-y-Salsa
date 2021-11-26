import React from 'react'

function InputModal({setInput,nombre,tipo,defaulValue}) {

    const modificarInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <div className="text-dark mb-3">
        <label htmlFor="recipient-name" className="col-form-label">
          {nombre}
        </label>
        <input onChange={modificarInput} type={tipo} defaultValue={defaulValue} step="1000" className="form-control" id="recipient-name" />
      </div>
    )
}

export default InputModal
