class Ball {
  constructor(x, y, radius, maxHeight, speed) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.maxHeight = maxHeight;

    this.dy = speed;
  }

  draw(ctx, stageHeight) {
    this.y += this.dy;

    this.checkBoundary(stageHeight);

    ctx.fillStyle = 'red';
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fill();
  }

  checkBoundary(stageHeight) {
    if (
      this.y >= this.maxHeight ||
      this.y >= stageHeight ||
      this.y == this.x ||
      this.y <= 0
    ) {
      this.dy *= -1;
      this.y += this.dy;
    }
  }
}

export default Ball;
