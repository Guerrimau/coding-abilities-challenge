export default function calculate(expression: string) {
  
  const ejecuteOperation = (symbol: string, a: number, b: number) => {
    switch (symbol) {
      case "+":
        return a + b;
      
      case "-":
        return a - b;

      default:
        break;
    }
  }

  const expressionCharacters = expression.split(" ");
  const expressionNumbers = expressionCharacters.filter(character => !isNaN(Number(character)));
  const expressionSymbols = expressionCharacters.filter(character => isNaN(Number(character)));
  
  let symbolsIndex = expressionSymbols.length - 1;
  let result = 0;

  for (let index = 0; index < expressionNumbers.length; index++) {
    if(index === 0) {
      
    }
    
  }

  return result;
  
}