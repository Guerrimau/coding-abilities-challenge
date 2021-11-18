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
    <div className="my-7">
      <h3 className="text-xl mb-2 font-medium text-purple-700">{title}</h3>
      <div
        style={{ width: "500px", height: "250px" }}
        className="flex flex-col justify-between b py-10 px-8 bg-white rounded-xl shadow-md space-y-2">
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
            className="border py-2 px-3 text-grey-darkest w-9/12 focus:outline-none focus:shadow-outline"
            value={inputValues}
            onChange={onChange}
            type={inputType}/>
          <button
            className="bg-purple-700 text-white px-4 py-2 rounded hover:bg-purple-800 transition"
            onClick={onClick}>Ejecutar</button>
        </div>
      </div>
    </div>
  )
}

