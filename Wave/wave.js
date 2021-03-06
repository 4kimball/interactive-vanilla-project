import Point from "./point.js";
class Wave {
  constructor(totalPoints, color) {
    this.totalPoints = totalPoints;
    this.color = color;
    this.points = [];
  }

  resize(stageWidth, stageHeight) {
    this.stageWidth = stageWidth;
    this.stageHeight = stageHeight;

    this.centerX = this.stageWidth / 2;
    this.centerY = this.stageHeight / 2;

    this.pointGap = this.stageWidth / (this.totalPoints - 1);
    this.init();
  }

  init() {
    this.points = [];
    for (let i = 0; i < this.totalPoints; i++) {
      const point = new Point(i, this.pointGap * i, this.centerY);
      this.points[i] = point;
    }
  }

  draw(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;

    let prevX = this.points[0].x;
    let prevY = this.points[0].y;

    ctx.moveTo(prevX, prevY);
    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints) this.points[i].update();

      const cx = (prevX + this.points[i].x) / 2;
      const cy = (prevY + this.points[i].y) / 2;

      // 이전 좌표, 이전 좌표와 현재 좌표의 중간 좌표를 넣어야 곡선이 완성
      ctx.quadraticCurveTo(prevX, prevY, cx, cy);

      prevX = this.points[i].x;
      prevY = this.points[i].y;
    }
    // 물결 선 밑을 채우기 위한
    ctx.lineTo(prevX, prevY);
    ctx.lineTo(this.stageWidth, this.stageHeight);
    ctx.lineTo(this.points[0].x, this.stageHeight);
    ctx.fill();
    ctx.closePath();
  }

  drawArc(ctx) {
    ctx.beginPath();
    ctx.fillStyle = this.color;
    ctx.moveTo(this.points[0].x, this.points[0].y);
    ctx.arc(this.points[0].x, this.points[0].y, 30, 0, Math.PI * 2);
    for (let i = 1; i < this.totalPoints; i++) {
      if (i < this.totalPoints) this.points[i].update();
      ctx.moveTo(this.points[i].x, this.points[i].y);
      ctx.arc(this.points[i].x, this.points[i].y, 30, 0, Math.PI * 2);
    }
    ctx.fill();
    ctx.closePath();
  }
}

export default Wave;
