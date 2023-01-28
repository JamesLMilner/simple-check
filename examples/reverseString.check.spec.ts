import { NonZeroFalsy, ShortString } from "../src/arguments";
import { IsStringPermutation } from "../src/properties/string";
import { DoesNotThrow, DoesThrow } from "../src/properties/errors";
import { reverseString } from "./reverseString";
import { check } from "./utils/viteCheck";
import { IsDeterministicValue, IsInvertable } from "../src/properties/meta";

check(reverseString, [
  [
    [ShortString],
    [
      // function exectutes without throwing an error
      DoesNotThrow,
      // hello -> olleh (string of same length + characters)
      IsStringPermutation,
      // 1. hello -> ooleh 2. hello -> ooleh 3. hello -> ooleh etc
      IsDeterministicValue,
      // hello -> olleh -> hello
      IsInvertable,
    ],
  ],
  [
    [NonZeroFalsy], //
    [DoesThrow],
  ],
]);
