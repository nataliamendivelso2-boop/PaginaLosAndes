export const HEADER_OFFSET = 96;
export const SCROLL_DURATION = 750;

const easeInOutQuad = (t) => (t < 0.5 ? 2 * t * t : 1 - ((-2 * t + 2) ** 2) / 2);

export const animateScroll = (targetPosition, duration = SCROLL_DURATION) => {
  if (typeof window === 'undefined') {
    return;
  }

  const startPosition = window.pageYOffset;
  const distance = targetPosition - startPosition;
  let startTime = null;

  const step = (currentTime) => {
    if (startTime === null) {
      startTime = currentTime;
    }
    const progress = Math.min((currentTime - startTime) / duration, 1);
    const easedProgress = easeInOutQuad(progress);
    window.scrollTo(0, startPosition + distance * easedProgress);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };

  window.requestAnimationFrame(step);
};

export const scrollToHash = (hash) => {
  if (typeof document === 'undefined' || typeof window === 'undefined' || !hash) {
    return false;
  }

  const target = document.querySelector(hash);
  if (!target) {
    return false;
  }

  const elementTop = target.getBoundingClientRect().top + window.pageYOffset - HEADER_OFFSET;
  animateScroll(elementTop);
  return true;
};
