export function move(direction: string = 'up', hide: boolean = true) {
  const els = document.querySelectorAll(
    `[data-move]`,
  ) as NodeListOf<HTMLElement>;

  const windowHeight = document.documentElement.clientHeight;
  const windowBottomLimit = windowHeight * 0.85;

  function onScroll() {
    els.forEach((el) => {
      if (hide) {
        el.style.opacity = '0';
      }
      const elDistanceFromTop = el.getBoundingClientRect().top;
      switch (direction) {
        default:
          if (elDistanceFromTop < windowBottomLimit) {
            el.style.animation = 'moveUp 1s ease-in-out forwards';
          } else if (elDistanceFromTop > windowHeight) {
            el.style.animation = '';
          }
          break;
      }
    });
  }
  onScroll();
  document.addEventListener('scroll', onScroll);
}

// ANIMATIONS

// @keyframes moveUp {
//   0% {
//     transform: translateY(3rem);
//     opacity: 0;
//   }
//   70% {
//     opacity: 1;
//   }
//   to {
//     transform: translateY(0);
//     opacity: 1;
//   }
// }
