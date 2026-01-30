export function animate() {
  const els = document.querySelectorAll(
    `[data-anim]`,
  ) as NodeListOf<HTMLElement>;

  const windowHeight = document.documentElement.clientHeight;
  console.log('🚀 ~ :7 ~ animate ~ windowHeight:', windowHeight);
  const windowBottomLimit = windowHeight * 0.8;

  function onScroll() {
    els.forEach((el) => {
      const hide = el.dataset.hide ?? 'true';
      if (hide === 'true') {
        el.style.opacity = '0';
      }
      const animation = el.dataset.anim;
      const elDistanceFromTop = el.getBoundingClientRect().top;
      console.log(
        el.className,
        '🚀 ~ :18 ~ onScroll ~ elDistanceFromTop:',
        elDistanceFromTop,
      );
      if (elDistanceFromTop < windowBottomLimit) {
        el.style.animation = `${animation} 1s ease-in-out forwards`;
      } else if (elDistanceFromTop > windowHeight) {
        el.style.animation = '';
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

// @keyframes moveRight {
//   0% {
//     transform: translateX(-3rem);
//     opacity: 0;
//   }
//   70% {
//     opacity: 1;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }

// @keyframes moveDown {
//   0% {
//     transform: translateY(-3rem);
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

// @keyframes moveLeft {
//   0% {
//     transform: translateX(3rem);
//     opacity: 0;
//   }
//   70% {
//     opacity: 1;
//   }
//   to {
//     transform: translateX(0);
//     opacity: 1;
//   }
// }
