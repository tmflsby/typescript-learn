// const add = (first: number, second: number): number => {
//   return first + second;
// };

// const sayHello = (): void => {
//   console.log('hello');
// };

// const errorEmitter = (): never => {
//   while (true) { }
// };

const add = ({ first, second }: { first: number; second: number }): number => {
  return first + second;
};

const getNumber = ({ first }: { first: number }) => {
  return first;
};

const total = add({ first: 1, second: 2 });
const count = getNumber({ first: 1 });
