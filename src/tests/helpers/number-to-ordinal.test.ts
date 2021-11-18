import numberToOrdinal from "../../helpers/number-to-ordinal";

test("Should return 0", () => {
  const number = 0;
  const result = numberToOrdinal(number);
  expect(result).toEqual("0");
});

test("Should return the first three exceptions right", () => {
  const first = numberToOrdinal(1);
  expect(first).toEqual("1st");
  const second = numberToOrdinal(2);
  expect(second).toEqual("2nd");
  const third = numberToOrdinal(3);
  expect(third).toEqual("3rd");
})

test("Should return the number with 'th' at the end", () => {
  const result = numberToOrdinal(54);
  expect(result).toEqual("54th");
});

test("Should return the number and st when ends with 1", () => {
  const result = numberToOrdinal(61);
  expect(result).toEqual("61st");
})