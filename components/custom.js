function letterJumble() {
  if (window !== undefined) {
    const small = document.querySelectorAll(".small");
    const medium = document.querySelectorAll(".medium");
    const large = document.querySelectorAll(".large");

    const arr = [...small, ...medium, ...large];

    arr.forEach((el) => {
      let angle =
        Math.ceil(Math.random() * 6) * (Math.round(Math.random()) ? 1 : -1);
      el.style.transform = `rotate(${angle}deg)`;
    });
  }
}

export { letterJumble };
