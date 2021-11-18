import React from 'react';

interface IejerciceCard {
  title: string,
  output: any,
  inputType: string,
  inputValues: any,
  onChange: (e: any) => void,
  onClick: () => void
}

export const EjerciceCard = ({
  title,
  output,
  inputType,
  inputValues,
  onChange,
  onClick
}: IejerciceCard) => {
  return (
    <div>
      <h3>{title}</h3>
      <div>
        {output === "" ? <p>Vacío</p> : <h4>{output}</h4>}
        <input
          value={inputValues}
          onChange={onChange}
          type={inputType}/>
        <button onClick={onClick}>Ejecutar</button>
      </div>
    </div>
  )
}

