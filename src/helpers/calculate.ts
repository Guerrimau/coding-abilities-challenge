export default function calculate(expression: string) {
  const expressionCharacters = expression.split(" ");
  const expressionNumbers = expressionCharacters.filter(character => !isNaN(Number(character)));
  const expressionSymbols = expressionCharacters.filter(character => isNaN(Number(character)));
  console.log({expressionCharacters, expressionNumbers, expressionSymbols});
  
}