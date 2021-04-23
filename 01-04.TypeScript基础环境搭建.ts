interface Point {
  x: number;
  y: number;
}

const tsDemo = (data: Point) => {
  console.log('Hello ShuaiYang');
  return Math.sqrt(data.x ** 2 + data.y ** 2);
};

tsDemo({ x: 1, y: 123 });
