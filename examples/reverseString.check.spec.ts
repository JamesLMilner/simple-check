import { NonZeroFalsy, ShortString } from "../src/arguments";
import {
  DoesNotThrow,
  DoesThrow,
  IsString,
  IsStringWithSameCharsOfArgOne,
  IsStringWithSameLengthOfArgOne,
} from "../src/expectations";
import { reverseString } from "./reverseString";
import { check } from "./utils/viteCheck";

check(reverseString, [
  [
    [ShortString],
    [
      DoesNotThrow,
      IsString,
      IsStringWithSameLengthOfArgOne,
      IsStringWithSameCharsOfArgOne,
    ],
  ],
  [
    [NonZeroFalsy], //
    [DoesThrow],
  ],
]);
