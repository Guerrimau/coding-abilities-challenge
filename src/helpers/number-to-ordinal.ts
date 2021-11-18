
export default function numberToOrdinal(Number: number) {
  
  if(Number === 0) {
    return "0";
  } else if(Number === 1) {
    return "1st";
  } else if(Number === 2) {
    return "2nd";
  } else if (Number === 3) {
    return "3rd";
  } else if (Number > 20 && String(Number).includes("1")) {
    return Number + "st";
  } else {
    return Number + "th";
  }
}