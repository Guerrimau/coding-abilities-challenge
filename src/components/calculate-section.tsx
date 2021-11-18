import React, { useState } from 'react';
import calculate from '../helpers/calculate';
import { EjerciceCard } from './ejercice-card';

export const CalculateSection = () => {
  const [result, setResult] = useState("");
  const [inputValues, setInputValues] = useState("");

  const onInputChange = (e: any) => {
    setInputValues(e.target.value);
  }

  const onClick = () => {
    setResult(String(calculate(inputValues)));
  }

  return (
    <EjerciceCard
      title="Reverse polish notation calculator"
      output={result}
      inputType="text"
      inputValues={inputValues}
      onChange={onInputChange}
      onClick={onClick} />
  )
}
