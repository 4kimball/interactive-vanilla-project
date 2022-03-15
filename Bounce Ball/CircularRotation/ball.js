class Ball {
  constructor(radius, stageWidth, stageHeight, stepSize) {
    this.radius = radius;
    this.cx = stageWidth / 2;
    this.cy = stageHeight / 2;
    this.stepSize = stepSize;
    this.curStep = 0;

    this.x = this.cx;
    this.y = this.cy - radius;
  }

  draw(ctx) {
    ctx.fillStyle = 'orange';
    ctx.beginPath();
    ctx.arc(this.x, this.y, 30, 0, Math.PI * 2);
    ctx.fill();
  }

  //   move() {
  //     const radian = (Math.PI * 2) / this.stepSize;
  //     this.x = this.radius * Math.cos(radian * this.curStep);
  //     this.y = this
  //   }
}
