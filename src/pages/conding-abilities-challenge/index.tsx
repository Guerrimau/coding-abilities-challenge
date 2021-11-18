import React from 'react';
import { CalculateSection } from '../../components/calculate-section';
import { CardNumberMaskifySection } from '../../components/card-number-maskify-section';
import { OrdinalNumbersSection } from '../../components/number-to-ordinal-section';

export const CodingAbilitiesChallenge = () => {
  
  return (
    <div>
      <h1>Coding abilities challenge</h1>
      <CardNumberMaskifySection />
      <OrdinalNumbersSection />
      <CalculateSection />
    </div>
  )
}
