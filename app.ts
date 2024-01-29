const createRipple = (elem: HTMLElement) => {
  if (!elem) return;

  elem.addEventListener("click", (e) => {
    const { offsetX, offsetY, target } = e;

    if (!(target instanceof HTMLElement)) return;

    const rect = target.getBoundingClientRect();

    const size = Math.max(rect.width, rect.height);

    const ripple = document.createElement("span");

    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${offsetX - size / 2}px`;
    ripple.style.top = `${offsetY - size / 2}px`;

    ripple.classList.add("ripple");

    target.appendChild(ripple);

    ripple.addEventListener("animationend", () => ripple.remove());
  });
};

document.querySelectorAll("button").forEach((button) => button.hasAttribute("data-ripple") && createRipple(button));
