import React from 'react'

function InputModal({setInput,nombre,defaultv}) {

    const modificarInput = (e) => {
        setInput(e.target.value);
    }
    return (
        <div className="mb-3">
        <label htmlFor="recipient-name" className="col-form-label">
          {nombre}
        </label>
        <input defaultValue={defaultv} onChange={modificarInput} type="text" className="form-control" id="recipient-name" />
      </div>
    )
}

export default InputModal
