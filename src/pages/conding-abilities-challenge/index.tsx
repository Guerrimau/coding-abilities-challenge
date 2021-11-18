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
      <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
        <div>
          <div className="text-xl font-medium text-primary">ChitChat</div>
          <p className="text-gray-500">You have a new message!</p>
        </div>
      </div>
    </div>
  )
}
