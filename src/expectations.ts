import { expect } from "vitest";

export const DoesThrow = {
  id: "DoesThrow",
  statement: "does throw",
  expect: (func, args) => expect(() => func(...args)).toThrowError(),
};

export const DoesNotThrow = {
  id: "DoesNotThrow",
  statement: "does not throw",
  expect: (func, args) => expect(() => func(...args)).not.toThrowError(),
};
export const IsNumber = {
  id: "IsNumber",
  statement: "is of type number and is not NaN",
  expect: (func, args) => {
    const result = func(...args);
    expect(typeof result === "number" && !isNaN(result)).toBe(true);
  },
};

export const IsStringOfSameLengthOfArgFactory = (argIndex: number) => ({
  id: "IsStringOfSameLengthOfArgOne",
  statement: `is string of same length as argument ${argIndex}`,
  expect: (func, args) => {
    expect(func(args[argIndex]).length).toBe(args[argIndex].length);
  },
});

export const IsStringWithSameLengthOfArgOne = IsStringOfSameLengthOfArgFactory(
  0
);

export const IsStringWithSameCharsOfArgFactory = (argIndex: number) => ({
  id: "IsStringWithSameCharsOfArg",
  statement: `has the same characters as argument ${argIndex}`,
  expect: (func, args) => {
    func(args[0])
      .split("")
      .forEach((char) => {
        expect(args[0].includes(char)).toBe(true);
      });
  },
});

export const IsStringWithSameCharsOfArgOne = IsStringWithSameCharsOfArgFactory(
  0
);

export const IsNotIdenticalToArgFactory = (argIndex: number) => ({
  id: "IsNotIdenticalToArg",
  statement: `is not idential to input argument ${argIndex}`,
  expect: (func, args) => {
    expect(func(args[0])).not.toStrictEqual(args[0]);
  },
});

export const IsNotIdenticalToArgOne = IsNotIdenticalToArgFactory(0);

export const IsString = {
  id: "IsString",
  statement: "is of type string",
  expect: (func, args) => {
    expect(typeof func(...args) === "string").toBe(true);
  },
};

export const IsLessThanOrEqualToZero = {
  id: "IsLessThanZero",
  statement: "is less than or equal to zero",
  expect: (func, args) => expect(func(...args)).toBeLessThanOrEqual(0),
};
export const IsGreaterThanOrEqualToZero = {
  id: "IsGeaterThanZero",
  statement: "is greater than or equal to zero",
  expect: (func, args) => expect(func(...args)).toBeGreaterThanOrEqual(0),
};
export const IsGreaterThanArgs = {
  id: "IsGreaterThanArgs",
  statement: "is greater than all its arguments",
  expect: (func, args) => {
    args.forEach((arg) => {
      expect(func(...args)).toBeGreaterThanOrEqual(arg);
    });
  },
};

export type ExpectedBehaviours =
  | typeof DoesNotThrow
  | typeof IsLessThanOrEqualToZero
  | typeof IsGreaterThanOrEqualToZero
  | typeof IsGreaterThanArgs
  | typeof DoesThrow;
