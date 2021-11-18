
export default function maskify (cardNumber: string) {
  
  if(cardNumber.length < 7) return cardNumber;
  
  for (let char of cardNumber) {
      console.log(char);
  }

}