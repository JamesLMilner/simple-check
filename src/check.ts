import * as fc from "fast-check";
import { e } from "vitest/dist/index-40ebba2b";
import { Types } from "./arguments";
import { Properties, Property } from "./properties/types";

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
  properties: Property,
  it: any,
  expectToBeTrue: any
): void {
  it(`${properties.statement}`, () => {
    fastCheckAssert(args, (...args) => {
      properties.expect(func, args, (value: boolean) =>
        expectToBeTrue(value).toBe(true)
      );
    });
  });
}

function check<
  It extends (...args: any[]) => any,
  Describe extends (...args: any[]) => any,
  ExpectToBeTrue extends (value: boolean) => void,
  Func extends (...args: any[]) => any
>(
  func: Func,
  functionTests: [Types[], Properties][],
  testFunctions: { it: It; describe: Describe; expectToBeTrue: ExpectToBeTrue }
): void {
  const { describe, it, expectToBeTrue } = testFunctions;

  describe(func.name, () => {
    functionTests.forEach(([args, properties]) => {
      const argDescribe = getArgDescribe(args);

      describe(argDescribe, () => {
        let flattenedProperties: Property[];

        if (Array.isArray(properties)) {
          flattenedProperties = (properties as any).flat(
            Infinity
          ) as Property[];
        } else {
          flattenedProperties = properties;
        }

        flattenedProperties.forEach((props) => {
          withArguments(args, func, props, it, expectToBeTrue);
        });
      });
    });
  });
}

export function checkFactory<
  It extends (...args: any[]) => any,
  Describe extends (...args: any[]) => any,
  ExpectToBeTrue extends (value: boolean) => void
>(testFunctions: {
  it: It;
  describe: Describe;
  expectToBeTrue: ExpectToBeTrue;
}) {
  return (
    func: any,
    functionTests: [args: Types[], properties: Properties][]
  ) => {
    return check(func, functionTests, testFunctions);
  };
}
