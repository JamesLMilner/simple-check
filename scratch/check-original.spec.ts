import fc from "fast-check";
import { addPositiveNumbers } from "./example";

test("should throw when both values are negative", () => {
  fc.assert(
    fc.property(fc.integer({ max: 0 }), fc.integer({ max: 0 }), (a, b) => {
      expect(() => addPositiveNumbers(a, b)).toThrowError();
    })
  );
});

test("should throw when one value is negative", () => {
  fc.assert(
    fc.property(fc.integer({ max: 0 }), fc.integer({ min: 0 }), (a, b) => {
      expect(() => addPositiveNumbers(a, b)).toThrowError();
    })
  );
});

test("should always greater than first argument", () => {
  fc.assert(
    fc.property(fc.integer({ min: 0 }), fc.integer({ min: 0 }), (a, b) => {
      expect(addPositiveNumbers(a, b)).toBeGreaterThanOrEqual(a);
    })
  );
});

test("should always be greater than second argument", () => {
  fc.assert(
    fc.property(fc.integer({ min: 0 }), fc.integer({ min: 0 }), (a, b) => {
      expect(addPositiveNumbers(b, a)).toBeGreaterThanOrEqual(b);
    })
  );
});
