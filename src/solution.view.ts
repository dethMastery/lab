export default class SolutionView {
  listingNumber(array: number[]) {
    let i: number = 0

    for (i; i<2; i++) {
      if (i == 0) {
        console.log('1st smallest = ', array[i]);
      } else {
        console.log('2nd smallest = ', array[i]);
      }
    }
  }
}