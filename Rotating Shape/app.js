import { Polygon } from './polygon.js';

class App {
    constructor() {
        this.canvas = document.createElement('canvas');
        document.body.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        // 디바이스의 물리적 픽셀과 뷰포트 픽셀을 맞춰주기 위해 => 출력되는 객체가 선명하게 보일 수 있도록
        this.pixelRatio = window.devicePixelRatio > 1 ? 2 : 1;
        console.log(document.body.clientWidth, this.pixelRatio);
        window.addEventListener('resize', this.resize.bind(this), false);
        this.resize();

        window.requestAnimationFrame(this.animate.bind(this));
    }

    resize() {
        // padding 포함한 컨텐츠의 크기
        this.stageWidth = document.body.clientWidth;
        this.stageHeight = document.body.clientHeight;

        // DPR에 따라 canvas 크기 정하기
        this.canvas.width = this.stageWidth * this.pixelRatio;
        this.canvas.height = this.stageHeight * this.pixelRatio;
        
        // context의 x축, y축 크기조정
        this.ctx.scale(this.pixelRatio, this.pixelRatio);

        this.polygon = new Polygon(this.stageWidth / 2, this.stageHeight / 2, this.stageHeight / 3, 3);
    }

    animate() {
        window.requestAnimationFrame(this.animate.bind(this));

        this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

        this.polygon.animate(this.ctx);
    }
}

window.onload = () => {
    new App();
}