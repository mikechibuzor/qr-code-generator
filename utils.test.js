const { generateText, validateEnteredUrl } = require("./utils");

test("Should output name and age", () => {
  const text = generateText("Chibuzor", 22);
  expect(text).toBe("Chibuzor is 22 years old");
});

/*
----------------------------------HomePage methods tests----------------------------------

*/

// pass
test("Should output true (be validated)", () => {
  const validation = validateEnteredUrl("www.nairaland.com");
  expect(validation).toBe(true);
});
test("Should output true (be validated)", () => {
  const validation = validateEnteredUrl("nairaland.com");
  expect(validation).toBe(true);
});

// fail
test("Should output false (invalid)", () => {
  const validation = validateEnteredUrl("nairaland");
  expect(validation).toBe(false);
});
