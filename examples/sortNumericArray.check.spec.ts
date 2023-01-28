import { NumericArray } from "../src/arguments";
import { DoesNotThrow } from "../src/properties/errors";
import { check } from "./utils/viteCheck";
import {
  IsDeterministicValueArray,
  IsIdempotent,
} from "../src/properties/meta";
import { sortNumericArray } from "./sortNumericArray";

check(sortNumericArray, [
  [
    [NumericArray],
    [
      // function exectutes without throwing an error
      DoesNotThrow,

      // result is always the same
      IsDeterministicValueArray,

      // function is idempotent
      IsIdempotent,

      // length and content of the array remain the same
      // IsPermutationNumericArray

      // items in the array only increase as you iterate through
      // IsAscendingNumericArray
    ],
  ],
]);
