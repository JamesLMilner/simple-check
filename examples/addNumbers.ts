export function addNumbers(numOne: number, numTwo: number): number {
  if (
    typeof numOne !== "number" ||
    typeof numTwo !== "number" ||
    isNaN(numOne) ||
    isNaN(numTwo)
  ) {
    throw new Error("Arguments must be numbers");
  }
  return numOne + numTwo;
}
