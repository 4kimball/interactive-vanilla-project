class Ball {
  constructor(stageWidth, stageHeight, radius, speed) {
    this.radius = radius;
    this.dy = speed;
    this.dx = speed;

    const diameter = this.radius * 2;

    this.x = diameter + (Math.random() * stageWidth - diameter);
    this.y = diameter + (Math.random() * stageHeight - diameter);
  }

  draw(ctx, stageWidth, stageHeight) {
    this.x += this.dx;
    this.y += this.dy;

    this.bounceBall(stageWidth, stageHeight);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  bounceBall(stageWidth, stageHeight) {
    const minX = this.radius;
    const maxX = stageWidth - this.radius;
    const minY = this.radius;
    const maxY = stageHeight - this.radius;

    if (this.x <= minX || this.x >= maxX) {
      this.dx *= -1;
      this.x += this.dx;
    } else if (this.y <= minY || this.y >= maxY) {
      this.dy *= -1;
      this.y += this.dy;
    }
  }
}

export default Ball;
