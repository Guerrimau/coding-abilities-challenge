import React from 'react';

interface IejerciceCard {
  title: string,
  output: string,
  inputType: string,
  inputValues: any,
  onChange: () => void,
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
        <h4>{output}</h4>
        <input
          value={inputValues}
          onChange={onChange}
          type={inputType}/>
        <button onClick={onClick}>Ejecutar</button>
      </div>
    </div>
  )
}

