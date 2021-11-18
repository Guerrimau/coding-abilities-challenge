
export default function maskify (cardNumber: string) {
  
  if(cardNumber.length < 7) return cardNumber;

  const lastFourIndex = cardNumber.length - 4; // 4 digits to match with the array index
  let maskedNumber = "";

  for (let index = 0; index < cardNumber.length; index++) {
    const char = cardNumber[index];
    
    if(index === 0 || index >= lastFourIndex) {
      maskedNumber = maskedNumber + char;
    } else {
      maskedNumber = maskedNumber + "x";
    }

  }

  return maskedNumber;

}