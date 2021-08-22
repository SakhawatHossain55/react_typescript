export class Player {
    constructor(name, age, country) {
        this.name = name;
        this.age = age;
        this.country = country;
    }
    getAge() { return this.age; }
    palay() {
        console.log(`${this.name} form ${this.country} is playing!`);
    }
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
