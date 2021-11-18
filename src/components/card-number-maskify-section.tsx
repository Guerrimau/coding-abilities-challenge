import React, { useState } from 'react';
import maskify from '../helpers/maskify';
import { EjerciceCard } from './ejercice-card';

export const CardNumberMaskifySection = () => {
  const [maskedString, setMaskedString] = useState("");
  const [inputValues, setInputValues] = useState(0);

  const onInputChange = (e: any) => {
    setInputValues(e.target.value);
  }

  const onClick = () => {
    const inputValuesString = String(inputValues)
    setMaskedString(maskify(inputValuesString));
  }

  return (
    <EjerciceCard
      title="Credit card number masking"
      output={maskedString}
      inputType="number"
      inputValues={inputValues}
      onChange={onInputChange}
      onClick={onClick} />
  )
}
