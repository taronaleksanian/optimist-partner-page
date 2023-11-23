function createObserver(elements, cb) {
  const observer = new IntersectionObserver(cb);

  for (let el of elements) {
    observer.observe(el);
  }
}

document.body.onload = () => {
  createObserver(
    [document.querySelector("section.about")],
    (entries, observer) => {
      const entry = entries[0];
      const element = entry.target;

      if (!entry.isIntersecting) return;
      const animatableElements = element.querySelectorAll(".about--list__item");
      for (let animatableElement of animatableElements) {
        animatableElement.classList.add(
          "animate__animated",
          "animate__fadeInUp"
        );
      }

      observer.disconnect();
    }
  );

  createObserver(
    [document.querySelector("section.services")],
    (entries, observer) => {
      const entry = entries[0];
      const element = entry.target;

      if (!entry.isIntersecting) return;
      const animatableElements = element.querySelectorAll(
        ".service--list__item"
      );
      for (let animatableElement of animatableElements) {
        animatableElement.classList.add(
          "animate__animated",
          "animate__fadeInBottomLeft"
        );
      }

      observer.disconnect();
    }
  );

  createObserver(
    document.querySelectorAll(".loyal-card__image-content"),
    (entries) => {
      for (let entry of entries) {
        const { bottom } = entry.boundingClientRect;
        console.log(entry);
        const target = entry.target;
        if (bottom > 100) continue;

        target.style.opacity = `opacity: ${bottom}`;
      }
    }
  );
};
