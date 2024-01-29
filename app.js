var ripple = function (elem) {
    if (!elem)
        return;
    elem.addEventListener("click", function (e) {
        var offsetX = e.offsetX, offsetY = e.offsetY, target = e.target;
        var rect = target.getBoundingClientRect();
        var size = Math.max(rect.width, rect.height);
        var ripple = document.createElement("span");
        ripple.style.width = ripple.style.height = "".concat(size, "px");
        ripple.style.left = "".concat(offsetX - size / 2, "px");
        ripple.style.top = "".concat(offsetY - size / 2, "px");
        ripple.classList.add("ripple");
        target.appendChild(ripple);
        ripple.addEventListener("animationend", function () { return ripple.remove(); });
    });
};
document.querySelectorAll("button").forEach(function (button) { return button.hasAttribute("data-ripple") && ripple(button); });
