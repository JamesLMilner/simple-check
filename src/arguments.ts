import fc from "fast-check";

export type Types = {
  name: string;
  type: () => any;
};

export const NegativeInt: Types = {
  name: "negative integer",
  type: () => fc.integer({ max: 0 }),
};
export const PositiveInt: Types = {
  name: "positive integer",
  type: () => fc.integer({ min: 0 }),
};

export const NonZeroFalsy: Types = {
  name: "non zero falsy value",
  type: () => fc.falsy().filter((val) => val !== 0),
};

export const ShortString: Types = {
  name: "short string",
  type: () => fc.string({ maxLength: 5 }),
};

export const NumericArray: Types = {
  name: "short string",
  type: () => fc.array(fc.float()),
};
