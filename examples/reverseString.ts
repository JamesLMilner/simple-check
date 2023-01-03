export function reverseString(str: string): string {
  if (typeof str !== "string") {
    throw new Error("Arguments must be string");
  }

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}
