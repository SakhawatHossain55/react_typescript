import { IsPlayer } from "../interpaces/isPlayer.js";

export class Player implements IsPlayer {
  constructor(
    public name: string,
    public age: number,
    readonly country: string
  ) {}

  getAge() { return this.age}

  palay() {
    console.log(`${this.name} form ${this.country} is playing!`);
  }
}

interface RectangleOptions {
  width: number;
  length: number;
}

//   function drawRectangle(options: RectangleOptions) {
//       let width = options.width;
//       let length = options.length;
//   }

//  let threeDdoptions = {
//       width: 30,                         // akhon lagtece na
//       length: 30,
//       height: 10
//   }

//   drawRectangle(threeDdoptions)
