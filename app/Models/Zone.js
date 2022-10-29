import { generateId } from "../Utils/generateId.js";




export class Zone {
  constructor(data) {
    this.id = generateId()
    this.name = data.name
    this.img = data.img || "assets\img\lightningBackground.gif"
    this.difficulty = data.difficulty
  }
}