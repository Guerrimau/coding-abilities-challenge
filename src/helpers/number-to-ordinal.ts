
export default function numberToOrdinal(Number: number) {
  
  const validateIfLastNumberIsOne = (Number: number) => {
    const numberToString = String(Number);
    return numberToString.includes("1", numberToString.length - 1);
  }
  if(Number === 0) {
    return "0";
  } else if(Number === 1) {
    return "1st";
  } else if(Number === 2) {
    return "2nd";
  } else if (Number === 3) {
    return "3rd";
  } else if (Number > 20 && validateIfLastNumberIsOne(Number)) {
    return Number + "st";
  } else {
    return Number + "th";
  }
}