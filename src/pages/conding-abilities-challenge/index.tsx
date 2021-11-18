import React from 'react';
import calculate from '../../helpers/calculate';
import maskify from '../../helpers/maskify';
import numberToOrdinal from '../../helpers/number-to-ordinal';

export const CodingAbilitiesChallenge = () => {

  const maskedString = maskify("12345634324234322332");
  const ordinalNumber = numberToOrdinal(22222111111);
  const result = calculate("2 1 5 + -");

  console.log(result);
  
  return (
    <div>
      <h1>HolaMundo </h1>
    </div>
  )
}
