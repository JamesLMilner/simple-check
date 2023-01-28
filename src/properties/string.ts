import { Property, PropertyIndexFactory } from "./types";

export const IsStringOfSameLengthOfArgFactory: PropertyIndexFactory = (
  argIndex: number
) => ({
  id: "IsStringOfSameLengthOfArgOne",
  statement: `result is string of same length as argument ${argIndex}`,
  expect: (func, args, expectToBeTrue) => {
    expectToBeTrue(func(args[argIndex]).length === args[argIndex].length);
  },
});

export const IsStringWithSameLengthOfArgOne: Property = IsStringOfSameLengthOfArgFactory(
  0
);

export const IsStringWithSameCharsOfArgFactory: PropertyIndexFactory = (
  argIndex: number
) => ({
  id: "IsStringWithSameCharsOfArg",
  statement: `result is string with the same characters as argument ${argIndex}`,
  expect: (func, args, expectToBeTrue) => {
    const result: string = func(args[0]);

    result.split("").forEach((char) => {
      const lengthOriginal = args[0].split(char).length - 1;
      const lengthResult = result.split(char).length - 1;
      expectToBeTrue(lengthOriginal === lengthResult);
    });
  },
});

export const IsStringWithSameCharsOfArgOne: Property = IsStringWithSameCharsOfArgFactory(
  0
);

export const IsString: Property = {
  id: "IsString",
  statement: "result is of type string",
  expect: (func, args, expectToBeTrue) => {
    expectToBeTrue(typeof func(...args) === "string");
  },
};

export const IsStringPermutation: Property[] = [
  IsString,
  IsStringWithSameLengthOfArgOne,
  IsStringWithSameCharsOfArgOne,
];
