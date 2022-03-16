class Ball {
  constructor(ballSize, speed, radius, stageWidth, stageHeight) {
    this.ballSize = ballSize;
    this.speed = speed;
    this.radius = radius;

    this.cx = stageWidth / 2;
    this.cy = stageHeight / 2;

    this.x = this.cx;
    this.y = this.cy - this.radius;
    this.curStep = 0;
  }

  draw(ctx) {
    this.rotate();

    ctx.beginPath();
    ctx.moveTo(this.cx, this.cy);
    ctx.lineTo(this.x, this.y);
    ctx.strokeStyle = '#fff';
    ctx.stroke();
    ctx.closePath();

    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(this.cx, this.cy, 10, 0, Math.PI * 2);
    ctx.arc(this.x, this.y, this.ballSize, 0, Math.PI * 2);
    ctx.fill();
  }

  rotate() {
    const radian = (Math.PI * 2) / this.speed;
    this.x = this.cx + this.radius * Math.cos(radian * this.curStep);
    this.y = this.cy + this.radius * Math.sin(radian * this.curStep);
    this.curStep = this.curStep >= this.speed ? 0 : this.curStep + 1;
  }
}

export default Ball;
