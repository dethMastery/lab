import Model from './solution.model'

export class SolutionController {
  private model: Model

  constructor(model: Model) {
    this.model = model
  }
}