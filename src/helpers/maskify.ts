
export default function maskify (cardNumber: string) {
  
  if(cardNumber.length < 7) return cardNumber;

  const lastFourIndex = cardNumber.length - 5; // 4 digits + 1 extra to match with the array index
  let maskedNumber = "";

  for (let index = 0; index < cardNumber.length; index++) {
    const char = cardNumber[index];
    
    if(index === 0) {
      maskedNumber = maskedNumber + char;
    }

  }

  return maskedNumber;

}