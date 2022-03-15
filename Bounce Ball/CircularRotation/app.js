import Ball from './ball.js';
class App {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.ctx = this.canvas.getContext('2d');

    document.body.appendChild(this.canvas);

    this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
    window.addEventListener('resize', this.resize.bind(this), false);
    this.resize();

    this.ball = new Ball(100, this.stageWidth, this.stageHeight, 12);
    window.requestAnimationFrame(this.animate.bind(this));
  }

  resize() {
    this.stageWidth = document.body.clientWidth;
    this.stageHeight = document.body.clientHeight;

    this.canvas.width = this.stageWidth * this.pixelRatio;
    this.canvas.height = this.stageHeight * this.pixelRatio;

    this.ctx.scale(this.pixelRatio, this.pixelRatio);
  }

  animate(t) {
    window.requestAnimationFrame(this.animate.bind(this));
    this.ball.draw(this.ctx);
  }
}

window.onload = () => {
  new App();
};
