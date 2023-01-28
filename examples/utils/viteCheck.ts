import { checkFactory } from "../../src/check";
import { it, describe, expect } from "vitest";

export const check = checkFactory({
  it,
  describe,
  expectToBeTrue: (value) => expect(value).toBe(true),
});
