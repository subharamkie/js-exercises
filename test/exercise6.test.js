import {
  sumDigits,
  createRange,
  getScreentimeAlertList,
  hexToRGB,
} from "../challenges/exercise6-optional";

describe("sumDigits", () => {
  test("Return sum of digits of the number passed", () => {
    expect(sumDigits(123)).toBe(6);
    expect(sumDigits(67452)).toBe(24);
    expect(sumDigits(189067452)).toBe(42);
    expect(sumDigits(0)).toBe(0);
    expect(sumDigits(1)).toBe(1);
    expect(sumDigits(-561.76)).toBe(0);
    expect(sumDigits(1679.98)).toBe(23);
  });
  test("Throw an error if number is not passed", () => {
    expect(() => {
      sumDigits();
    }).toThrow("number is required");
  });
});

describe("createRange", () => {
  test("Throw error if start is not passed", () => {
    expect(() => {
      createRange();
    }).toThrow("starting number is required");
  });
  test("Throw error if end is not passed", () => {
    expect(() => {
      createRange(1);
    }).toThrow("ending number is required");
  });
  test("Return an array with the range of numbers from start to end incremented by step if provide,1 if not", () => {
    expect(createRange(3, 11, 2)).toEqual([3, 5, 7, 9, 11]);
    expect(createRange(1, 9, 2)).toEqual([1, 3, 5, 7, 9]);
    expect(createRange(5, 30, 5)).toEqual([5, 10, 15, 20, 25, 30]);
    expect(createRange(1, 5)).toEqual([1, 2, 3, 4, 5]);
    expect(createRange(3, 10, 2)).toEqual([3, 5, 7, 9, 10]); //includes the end element even if not in the series???
  });
});

describe("getScreentimeAlertList", () => {
  test("Throw error if user is not passed", () => {
    expect(() => {
      getScreentimeAlertList();
    }).toThrow("users is required");
  });
  test("Throw error if date is not passed", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    expect(() => {
      getScreentimeAlertList(users);
    }).toThrow("date is required");
  });
  test("Return an array with usernames if usage is > 100 mins on the given date", () => {
    const users = [
      {
        username: "beth_1234",
        name: "Beth Smith",
        screenTime: [
          {
            date: "2019-05-01",
            usage: { twitter: 34, instagram: 22, facebook: 40 },
          },
          {
            date: "2019-05-02",
            usage: { twitter: 56, instagram: 40, facebook: 31 },
          },
          {
            date: "2019-05-03",
            usage: { twitter: 12, instagram: 15, facebook: 19 },
          },
          {
            date: "2019-05-04",
            usage: { twitter: 10, instagram: 56, facebook: 61 },
          },
        ],
      },
      {
        username: "sam_j_1989",
        name: "Sam Jones",
        screenTime: [
          {
            date: "2019-06-11",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 10 },
          },
          {
            date: "2019-06-13",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 16 },
          },
          {
            date: "2019-06-14",
            usage: { mapMyRun: 0, whatsApp: 0, facebook: 0, safari: 31 },
          },
        ],
      },
    ];
    expect(getScreentimeAlertList(users, "2019-05-04")).toEqual(["beth_1234"]);
    expect(getScreentimeAlertList(users, "2019-06-13")).toEqual([]);
  });
});

describe("hexToRGB", () => {
  test("Throw error if string is not passed", () => {
    expect(() => {
      hexToRGB();
    }).toThrow("hexStr is required");
  });
  test("Throw error if string is empty", () => {
    expect(() => {
      hexToRGB("");
    }).toThrow("Pass valid Hex string");
  });
  test("Throw error if string is invalid", () => {
    expect(() => {
      hexToRGB("ABCHD");
    }).toThrow("Pass valid Hex string");
  });
  
  test("Give RGB equivalent of hexStr", () => {
    expect(hexToRGB("#FF1133")).toBe("RGB(255,17,51)");
    expect(hexToRGB("#008000")).toBe("RGB(0,128,0)");
  });
});
