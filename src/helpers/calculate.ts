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
  let result = Number(expressionNumbers[0]);

  for (let index = 1; index < expressionNumbers.length; index++) {
    let a = result;
    let b = Number(expressionNumbers[index]);
    let symbol = expressionSymbols[symbolsIndex];
    result = ejecuteOperation(symbol, a, b);
    symbolsIndex--;
  }

  return result;

}