import React, { useState } from 'react';
import numberToOrdinal from '../helpers/number-to-ordinal';
import { EjerciceCard } from './ejercice-card';

export const OrdinalNumbersSection = () => {
  const [ordinalNumber, setOrdinalNumber] = useState("");
  const [inputValues, setInputValues] = useState(0);

  const onInputChange = (e: any) => {
    setInputValues(e.target.value);
  }

  const onClick = () => {
    setOrdinalNumber(numberToOrdinal(Number(inputValues)));
  }

  return (
    <EjerciceCard
      title="Ordinal numbers"
      output={ordinalNumber}
      inputType="number"
      inputValues={inputValues}
      onChange={onInputChange}
      onClick={onClick} />
  )
}
