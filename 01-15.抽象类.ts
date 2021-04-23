// readonly
// class Person {
//   public readonly name: string;
//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const person = new Person('ShuaiYang');
// person.name = 'hello';
// console.log(person.name);

// 抽象类  只能被继承，不能被new
// abstract class Geom {
//   width: number;
//   getType() {
//     return 'Gemo';
//   }
//   abstract getArea(): number;
// }

// class Circle extends Geom {
//   getArea() {
//     return 123;
//   }
// }

// class Square {}
// class Triangle {}

interface Person {
  name: string;
}

interface Teacher extends Person {
  teachingAge: number;
}

interface Student extends Person {
  age: number;
}

interface Driver {
  name: string;
  age: number;
}

const teacher = {
  name: 'Messi',
  teachingAge: 3,
};

const student = {
  name: 'Neymar',
  age: 18,
};

const getUserInfo = (user: Person) => {
  console.log(user.name);
};

getUserInfo(teacher);
getUserInfo(student);
