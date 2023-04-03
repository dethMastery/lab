export default class SolutionModel {
  private array: number[]

  constructor (array: number[]) {
    this.array = array
  }

  sortArray() {
    this.array.sort((prevValue: number, nextValue: number): any => {
      return prevValue - nextValue
    })

    return this.array
  }
}