import React from 'react';
import { CalculateSection } from '../../components/calculate-section';
import { CardNumberMaskifySection } from '../../components/card-number-maskify-section';
import { OrdinalNumbersSection } from '../../components/number-to-ordinal-section';

export const CodingAbilitiesChallenge = () => {

  return (
    <div>
      <h1 className="text-3xl font-bold text-center pt-10">Coding abilities challenge</h1>
      <h2 className="text-center pl-52 pb-10">by Gerardo Mayboca</h2>
      <div className="flex flex-col items-center">
        <CardNumberMaskifySection />
        <OrdinalNumbersSection />
        <CalculateSection />
      </div>
    </div>
  )
}
