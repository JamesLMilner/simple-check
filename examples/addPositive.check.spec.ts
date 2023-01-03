import { check } from "./utils/viteCheck";
import {
  NonZeroFalsy,
  NegativeInt,
  PositiveInt,
  ShortString,
} from "../src/arguments";
import {
  DoesNotThrow,
  IsGreaterThanOrEqualToZero,
  IsGreaterThanArgs,
  DoesThrow,
  IsNumber,
} from "../src/expectations";
import { addPositiveNumbers } from "./addPositive";

check(addPositiveNumbers, [
  [
    [PositiveInt, PositiveInt], // Arguments, two positive integers e.g. (1, 2)
    [DoesNotThrow, IsNumber, IsGreaterThanOrEqualToZero, IsGreaterThanArgs], // The properties to meet
  ],
  [
    [NegativeInt, NegativeInt], // Arguments, two negative integers e.g. (-1, -2)
    [DoesThrow], // The properties that have to met
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
