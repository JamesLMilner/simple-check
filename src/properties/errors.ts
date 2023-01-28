import { Property } from "./types";

export const DoesThrow: Property = {
  id: "DoesThrow",
  statement: "does throw",
  expect: (func, args, expectToBeTrue) => {
    try {
      func(...args);
      expectToBeTrue(false);
    } catch {
      expectToBeTrue(true);
    }
  },
};

export const DoesNotThrow: Property = {
  id: "DoesNotThrow",
  statement: "does not throw",
  expect: (func, args, expectToBeTrue) => {
    try {
      func(...args);
      expectToBeTrue(true);
    } catch {
      expectToBeTrue(false);
    }
  },
};
