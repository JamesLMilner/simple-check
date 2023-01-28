import { Property } from "./types";

export const IsNumber = {
  id: "IsNumber",
  statement: "result is of type number and is not NaN",
  expect: (func, args, expectToBeTrue) => {
    const result = func(...args);
    expectToBeTrue(typeof result === "number" && !isNaN(result));
  },
};

export const IsLessThanOrEqualToZero: Property = {
  id: "IsLessThanZero",
  statement: "result is less than or equal to zero",
  expect: (func, args, expectToBeTrue) => expectToBeTrue(func(...args) <= 0),
};
export const IsGreaterThanOrEqualToZero: Property = {
  id: "IsGeaterThanZero",
  statement: "result is greater than or equal to zero",
  expect: (func, args, expectToBeTrue) => expectToBeTrue(func(...args) >= 0),
};
export const IsGreaterThanArgs: Property = {
  id: "IsGreaterThanArgs",
  statement: "result is greater than all its arguments",
  expect: (func, args, expectToBeTrue) => {
    args.forEach((arg) => {
      expectToBeTrue(func(...args) >= arg);
    });
  },
};
