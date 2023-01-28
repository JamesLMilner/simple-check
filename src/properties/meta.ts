import { GreaterThanOneArgumentError } from "../errors";
import { Property } from "./types";

export const IsDeterministicValue: Property = {
  id: "IsDeterministic",
  statement: `result is determinsitic (same result for 10 iterations)`,
  expect: (func, args, expectToBeTrue) => {
    const iterations = 10;

    let outputSet = false;
    let output;
    for (let i = 0; i < iterations; i++) {
      const iterationOutput = func(args[0]);

      if (!outputSet) {
        outputSet = true;
      } else if (iterationOutput !== output) {
        expectToBeTrue(false);
        break;
      }
      output = iterationOutput;
    }

    expectToBeTrue(true);
  },
};

export const IsDeterministicValueArray: Property = {
  id: "IsDeterministic",
  statement: `result is determinsitic (same result for 10 iterations)`,
  expect: (func, args, expectToBeTrue) => {
    const iterations = 10;

    let outputSet = false;
    let output;
    for (let i = 0; i < iterations; i++) {
      const iterationOutput = func(args[0]);

      if (!outputSet) {
        outputSet = true;
      } else if (JSON.stringify(iterationOutput) !== JSON.stringify(output)) {
        expectToBeTrue(false);
        break;
      }
      output = iterationOutput;
    }

    expectToBeTrue(true);
  },
};

export const IsInvertable: Property = {
  id: "IsInvertable",
  statement: `result is invertable (can be reverted back to the calling argument using the same function)`,
  expect: (func, args, expectToBeTrue) => {
    if (args.length > 1) {
      throw GreaterThanOneArgumentError();
    }

    const inverseResult = func(func(args[0]));
    expectToBeTrue(args[0] === inverseResult);
  },
};

export const IsIdempotent: Property = {
  id: "IsIdempotent",
  statement: `result is the same when the function is applied on the result again`,
  expect: (func, args, expectToBeTrue) => {
    if (args.length > 1) {
      throw GreaterThanOneArgumentError();
    }

    const firstResult = func(args[0]);
    const secondResult = func(firstResult);
    expectToBeTrue(firstResult === secondResult);
  },
};
