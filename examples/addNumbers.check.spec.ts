import {
  NonZeroFalsy,
  NegativeInt,
  PositiveInt,
  ShortString,
} from "../src/arguments";
import {
  IsLessThanOrEqualToZero,
  IsGreaterThanOrEqualToZero,
  IsGreaterThanArgs,
  IsNumber,
} from "../src/properties/number";

import { DoesNotThrow, DoesThrow } from "../src/properties/errors";

import { addNumbers } from "./addNumbers";
import { check } from "./utils/viteCheck";

check(addNumbers, [
  [
    [NegativeInt, NegativeInt], // Arguments, two negative integers e.g. (-1, -2)
    [DoesNotThrow, IsNumber, IsLessThanOrEqualToZero], // The properties that have to met
  ],
  [
    [PositiveInt, PositiveInt], // Arguments, two positive integers e.g. (1, 2)
    [DoesNotThrow, IsNumber, IsGreaterThanOrEqualToZero, IsGreaterThanArgs], // The properties to meet
  ],
  [
    [NegativeInt, PositiveInt], // Arguments, one positive and one negatve integer e.g. (-1, 2)
    [DoesNotThrow, IsNumber], // The properties to meet
  ],
  [
    [NonZeroFalsy, NonZeroFalsy], // Arguments, both a falsy value e.g. false, NaN, etc
    [DoesThrow], // The properties to meet
  ],
  [
    [PositiveInt, NonZeroFalsy], // Arguments, one int and one with falsy value e.g. false, NaN, etc
    [DoesThrow], // The properties to meet
  ],
  [
    [ShortString, ShortString], // Arguments, both strings
    [DoesThrow], // The properties to meet
  ],
]);
