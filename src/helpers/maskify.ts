
export default function maskify (cardNumber: string) {
  
  if(cardNumber.length < 7) return cardNumber;

  let maskedNumber = "";

  for (let index = 0; index < cardNumber.length; index++) {
    const char = cardNumber[index];
    
    if(index === 0) {
      maskedNumber = maskedNumber + char;
    }

  }

  return maskedNumber;

}