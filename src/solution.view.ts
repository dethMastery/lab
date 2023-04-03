export default class SolutionView {
  listingNumber(array: number[]) {
    let i: number = 0

    for (let no of array) {
      switch (i) {
        case 0:
          console.log('1st smallest = ', no);
          break;

        case 1:
          console.log('2nd smallest = ', no);
          break;

        case 2:
          console.log('3rd smallest = ', no);
          break;
      
        default:
          console.log(`${i + 1}th smallest = `, no);
          break;
      }

      i++
    }
  }
}