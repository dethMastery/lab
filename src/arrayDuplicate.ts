export function arrayCheck(arrays: number[]) {
  let duplicate: number[] = [];

  let i = 0

  for (let array of arrays) {
    let temp = i

    for (i; i < arrays.length; i++) {
      if (array == arrays[i+1]) {
        duplicate.push(array)
        i = temp

        break;
      }

      if ((i + 1) == arrays.length) {
        i = temp

        break;
      }
    }
    
    i++
  }

  return duplicate;
}
