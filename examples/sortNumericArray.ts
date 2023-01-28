export function sortNumericArray(arr: number[]) {
  const newArray = [...arr];

  // Bubble sort

  for (let i = 0; i < newArray.length; i++) {
    for (let j = 0; j < newArray.length - i - 1; j++) {
      if (newArray[j] > newArray[j + 1]) {
        const temp = newArray[j];
        newArray[j] = newArray[j + 1];
        newArray[j + 1] = temp;
      }
    }
  }

  return newArray;
}
