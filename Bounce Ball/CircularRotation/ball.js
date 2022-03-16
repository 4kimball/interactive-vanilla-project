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
    this.move();
  }

  move() {
    // stepSize가 클수록 느려짐
    const radian = (Math.PI * 2) / this.stepSize;

    // cos(radian) * radius를 통해 다음 x, y 좌표를 구할 수 있음.
    // cos(radian) = x / radius
    // sin(radian) = y / radius
    // 여기에 중심좌표를 더해주면 해당 좌표를 기준으로 다음 위치를 정함.
    this.x = this.cx + this.radius * Math.cos(radian * this.curStep);
    this.y = this.cy + this.radius * Math.sin(radian * this.curStep);
    this.curStep = this.curStep >= this.stepSize ? 0 : this.curStep + 1;
  }
}

export default Ball;
