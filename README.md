# interative-vanilla-project

### devicePixelRatio

디바이스의 물리적인 pixel과 css의 논리적인 pixel이 다를 수 있다. 만약 물리적인 pixel이 200px이고 논리적인 pixel이 100px일 때 100px의 이미지를 출력하면 흐리게 보일 것이다.

이러한 현상을 방지하기위해 devicePixelRatio(DPR)를 통해 canvas의 크기를 설정해준다. DPR은 디바이스 pixel / css pixel로 나타낼 수 있으며, DPR이 2라는 것은 css 1px에 2x2 크기의 px을 채운다는 것이다.

또한 DPR만큼 컨텍스트의 크기도 scale()을 통해 변환하여 선명한 이미지를 출력할 수 있도록 한다.

### window.requestAnimationFrame

requestAnimationFrame은 리페인트가 되기 전에 실행할 함수를 호출한다. 이전 리렌더링이 끝나지도 않았는데 다음 애니메이션 동작이 실행되는 것을 막아줘 부드러원 애니메이션 효과를 만들 수 있다.
