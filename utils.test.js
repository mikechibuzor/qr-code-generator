const { validateEnteredUrl, addHistoryObj, historyReset } = require("./utils");

/*
==================================== HomePage methods tests ==================================== 
*/

/*
---------------------------------------- PASS CASES --------------------------------
 */

describe("validateEnteredUrl", () => {
  test("Should output true (be validated)", () => {
    const validation = validateEnteredUrl("www.nairaland.com");
    expect(validation).toBe(true);
  });
});

describe("validateEnteredUrl", () => {
  test("Should output true (be validated)", () => {
    const validation = validateEnteredUrl("https://www.nairaland.com");
    expect(validation).toBe(true);
  });
});

describe("validateEnteredUrl", () => {
  test("Should output true (be validated)", () => {
    const validation = validateEnteredUrl("nairaland.com");
    expect(validation).toBe(true);
  });
});

describe("validateEnteredUrl", () => {
  test("Should output true (be validated)", () => {
    const validation = validateEnteredUrl("yahoo.co.uk");
    expect(validation).toBe(true);
  });
});

/*
---------------------------------------- FAIL CASES --------------------------------
 */

describe("validateEnteredUrl", () => {
  test("Should output false (not be validated)", () => {
    const validation = validateEnteredUrl("6");
    expect(validation).toBe(false);
  });
});

describe("validateEnteredUrl", () => {
  test("Should output false (not be validated)", () => {
    const validation = validateEnteredUrl("nairaland");
    expect(validation).toBe(false);
  });
});

/*
---------------------------------------- PASS CASES --------------------------------
 */

describe("addHistoryObject", () => {
  test("should return a non-empty array", () => {
    const history = [];
    const historyObject = {
      id: 1,
      userEnteredUrl: "www.nairaland.com",
      imgUrl: "image/url",
      validation: true,
    };
    const addHistory = addHistoryObj(history, historyObject);
    expect(addHistory).toBe(true);
  });
});

// test("Should output true (be validated)", () => {
//   const validation = validateEnteredUrl("https://www.nairaland.com");
//   expect(validation).toBe(true);
// });

// test("Should output true (be validated)", () => {
//   const validation = validateEnteredUrl("https://nairaland.com");
//   expect(validation).toBe(true);
// });

// test("should return a non-empty array", () => {
//   const history = [];
//   const historyObject = {
//     id: 1,
//     userEnteredUrl: "www.nairaland.com",
//     imgUrl: "image/url",
//     validation: true,
//   };
//   const addHistory = addHistoryObj(history, historyObject);
//   expect(addHistory).toBe(true);
// });

// // fail
// test("Should output false (invalid)", () => {
//   const validation = validateEnteredUrl("nairaland");
//   expect(validation).toBe(false);
// });

/*

---------------------------------- TheHistory Component methods tests----------------------------------

*/

// pass
// test("should reset the object's counter and state property", () => {
//   const stateObjectHistory = {
//     history: ["1", "2", "3"],
//     historyCounter: 10,
//   };
//   const changedStateHistory = historyReset(stateObjectHistory);
//   const newHistoryCounter = changedStateHistory.historyCounter;
//   const newHistory = changedStateHistory.history;

//   // const validateTest =
//   //   (newHistoryCounter === 0) & (newHistory.length === 0) ? true : false;
//   let validateTest = null;
//   if ((newHistoryCounter === 0) & (newHistory.length === 0)) {
//     validateTest = true;
//   } else {
//     validateTest = false;
//   }
//   expect(validateTest).toBe(true);
// });
