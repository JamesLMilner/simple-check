import * as fc from "fast-check";
import { Types } from "./arguments";
import { ExpectedBehaviours } from "./expectations";

function fastCheckAssert(
  args: Types[],
  expectFunction: (...args: any) => void
): void {
  fc.assert(fc.property(...args.map(({ type }) => type()), expectFunction));
}

function getArgDescribe(args: { name: string }[]): string {
  return `called with arguments (${args.map(({ name }) => name).join(", ")})`;
}

function withArguments(
  args: any[],
  func: (...args: any) => any,
  expectBehavior: ExpectedBehaviours,
  it: any
): void {
  it(`${expectBehavior.statement}`, () => {
    fastCheckAssert(args, (...args) => {
      expectBehavior.expect(func, args);
    });
  });
}

function check<
  It extends (...args: any[]) => any,
  Describe extends (...args: any[]) => any,
  Func extends (...args: any[]) => any
>(
  func: Func,
  functionTests: [Types[], ExpectedBehaviours[]][],
  testFunctions: { it: It; describe: Describe }
): void {
  const { describe, it } = testFunctions;

  describe(func.name, () => {
    functionTests.forEach(([args, properties]) => {
      const argDescribe = getArgDescribe(args);

      describe(argDescribe, () => {
        properties.forEach((props) => {
          withArguments(args, func, props, it);
        });
      });
    });
  });
}

export function checkFactory<
  It extends (...args: any[]) => any,
  Describe extends (...args: any[]) => any
>(testFunctions: { it: It; describe: Describe }) {
  return (
    func: any,
    functionTests: [args: Types[], properties: ExpectedBehaviours[]][]
  ) => {
    return check(func, functionTests, testFunctions);
  };
}
