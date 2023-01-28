interface DeepArray<T> extends Array<T | DeepArray<T>> {}
type Deep<T> = T | DeepArray<T>;

export type Properties = DeepArray<Property>;

export type Property = {
  id: string;
  statement: string;
  expect: (
    func: any,
    args: any,
    expectToBeTrue: (value: boolean) => void
  ) => void;
};

export type PropertyIndexFactory = (argIndex: number) => Property;
