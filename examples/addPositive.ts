export function addPositiveNumbers(numOne: number, numTwo: number): number {
  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    isNaN(numOne) ||
    isNaN(numTwo)
  ) {
    throw new Error("Arguments must be numbers");
  }

  if (numOne < 0) {
    throw new Error("First argument should be positive number");
  }

  if (numTwo < 0) {
    throw new Error("Second argument should be positive number");
  }

  return numOne + numTwo;
}
