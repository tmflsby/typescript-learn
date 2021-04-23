// 1.开发过程中，发现潜在的问题
// 2.更友好的编辑器自动提示
// 3.代码语义更清晰易懂

interface Point {
  x: number;
  y: number;
}

const tsDemo = (data: Point) => Math.sqrt(data.x ** 2 + data.y ** 2);

tsDemo({ x: 1, y: 123 });
