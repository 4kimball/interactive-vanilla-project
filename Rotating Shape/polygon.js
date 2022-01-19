const PI2 = Math.PI * 2;

export class Polygon {
  constructor(x, y, radius, sides) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.sides = sides;
    this.rotate = 0;
  }

  animate(ctx) {
    ctx.save();
    ctx.fillStyle = '#000';
    ctx.beginPath();

    const radian = PI2 / this.sides;

    // 기준점을 지정한 증분만큼 평행이동하는 함수
    // 중심으로 이동
    ctx.translate(this.x, this.y);

    // 도형의 꼭지점 좌표를 구하여 그린다.
    for (let i = 0; i < this.sides; i++) {
      const x = this.radius * Math.cos(radian * i);
      const y = this.radius * Math.sin(radian * i);
      i == 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    }

    ctx.fill();
    ctx.closePath();
    ctx.restore();
  }
}
