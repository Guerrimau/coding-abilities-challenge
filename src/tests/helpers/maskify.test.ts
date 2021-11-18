import maskify from "../../helpers/maskify";

test("Should show numbers as normal if the string has less than 7 characters", () => {
  const cardNumber = "224354";
  const maskedNumber = maskify(cardNumber);
  expect(maskedNumber).toEqual(cardNumber);
});

test("Should mask a card number just leaving the first digit and the last four normal", () => {
  const cardNumber = "123456789";
  const expectedResult = "1xxxx6789";
  const maskedNumber = maskify(cardNumber);
  expect(maskedNumber).toEqual(expectedResult);
})