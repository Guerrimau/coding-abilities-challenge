import React from 'react';
import maskify from '../../helpers/maskify';
import numberToOrdinal from '../../helpers/number-to-ordinal';

export const CodingAbilitiesChallenge = () => {

  const maskedString = maskify("12345634324234322332");
  const ordinalNumber = numberToOrdinal("2");
  
  return (
    <div>
      <h1>HolaMundo </h1>
    </div>
  )
}
