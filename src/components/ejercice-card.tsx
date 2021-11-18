import React from 'react';
import "../styles/ejercice-card.css";

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
    <div className="my-7">
      <h3 className="text-xl mb-2 font-medium text-purple-700">{title}</h3>
      <div
        style={{ width: "500px", height: "250px" }}
        className="ejercice__card">
        <span className="text-xs">Output:</span>
        <span className="text-center">
          {
            output === "" 
              ? <p className="text-gray-400">Vacío</p>
              : <b className="text-lg">{output}</b>
          }
        </span>
        <div className="flex flex-row justify-between">
          <input
            className="ejercice__card--input"
            value={inputValues}
            onChange={onChange}
            type={inputType}/>
          <button
            className="ejercice__card--btn"
            onClick={onClick}>Ejecutar</button>
        </div>
      </div>
    </div>
  )
}

