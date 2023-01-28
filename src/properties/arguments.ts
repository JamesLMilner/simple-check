import { PropertyIndexFactory } from "./types";

export const IsNotIdenticalToArgFactory: PropertyIndexFactory = (
  argIndex: number
) => ({
  id: "IsNotIdenticalToArg",
  statement: `is not idential to input argument ${argIndex}`,
  expect: (func, args, expectToBeTrue) => {
    expectToBeTrue(func(args[0]) !== args[0]);
  },
});

export const IsNotIdenticalToArgOne = IsNotIdenticalToArgFactory(0);
