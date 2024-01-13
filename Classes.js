// basic class

class Demo {
  constructor(a, b) {
    this.number1 = a;
    this.number2 = b;
  }
  add(a, b) {
    return this.number1 + this.number2;
  }
}

// inheritance

class demo2 {
  constructor(number1, number2, c) {
    // super(number1, number2);
    this.number3 = c;
  }

  sub() {
    return -this.number3;
  }
}

let result = new demo2(2, 2, 3);
console.log(result.sub());

// Static keyword

// class StaticUseCase {
//   constructor(firstName) {
//     this.firstName = firstName;
//   }
//   static result(pointer) {
//     return pointer.firstName;
//   }

//   details() {
//     return this.firstName;
//   }
// }

// const ans = new StaticUseCase("mridul");

// console.log(StaticUseCase.result(ans));
// console.log(ans.details());
