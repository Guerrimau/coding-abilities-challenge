export default function calculate(expression: string) {

  const ejecuteOperation = (symbol: string, a: number, b: number) => {
    switch (symbol) {
      case "+":
        return a + b;

      case "-":
        return a - b;

      default:
        return 0
    }
  }

  const expressionCharacters = expression.split(" ");
  const expressionNumbers = expressionCharacters.filter(character => !isNaN(Number(character)));
  const expressionSymbols = expressionCharacters.filter(character => isNaN(Number(character)));

  let symbolsIndex = expressionSymbols.length - 1;
  let result = 0;

  for (let index = 0; index < expressionNumbers.length; index++) {
    let a: number;
    let b: number;
    if (index === 0) {
      a = Number(expressionNumbers[index]);
      b = Number(expressionNumbers[index + 1]);
      index++;
    } else {
      a = result;
      b = Number(expressionNumbers[index]);
    }
    let symbol = expressionSymbols[symbolsIndex];
    result = ejecuteOperation(symbol, a, b);
    symbolsIndex--;
  }

  return result;

}