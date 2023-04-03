import Model from './solution.model'
import View from './solution.view'

class SolutionController {
  private model: Model
  private view: View

  constructor(model: Model, view: View) {
    this.model = model
    this.view = view
  }

  solution() {
    let sortedArray: number[] = this.model.sortArray()

    this.view.listingNumber(sortedArray)
  }
}

export function solution(array: number[]) {
  let model: Model = new Model(array)
  let view: View = new View()
  let controller: SolutionController = new SolutionController(model, view)

  controller.solution()
}