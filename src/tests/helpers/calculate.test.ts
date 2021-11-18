import calculate from "../../helpers/calculate";

test("Should return the correct result of a given expression", () => {
  const expression = "5 4 8 - +";
  const expectedResult = 1;
  const result = calculate(expression);
  expect(result).toEqual(expectedResult);
});