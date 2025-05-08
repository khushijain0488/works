export const animateOnScroll = (element: HTMLElement, delay = 0) => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add('animate-fade-in');
          }, delay);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1 }
  );

  observer.observe(element);
  return () => observer.disconnect();
};

export const initCustomCursor = () => {
  const cursor = document.createElement('div');
  cursor.classList.add('custom-cursor', 'bg-blue-600');
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.left = `${e.clientX}px`;
    cursor.style.top = `${e.clientY}px`;
  });

  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
  });

  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });

  document.querySelectorAll('a, button').forEach((el) => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
    });
  });

  return cursor;
};

export const typeText = (element: HTMLElement, text: string, speed = 100) => {
  let index = 0;
  element.textContent = '';

  const timer = setInterval(() => {
    if (index < text.length) {
      element.textContent += text.charAt(index);
      index++;
    } else {
      clearInterval(timer);
    }
  }, speed);

  return timer;
};