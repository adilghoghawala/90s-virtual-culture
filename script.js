// ✨ 90s Cursor Sparkle Trail (known working) ✨

document.addEventListener("DOMContentLoaded", function () {
    document.addEventListener("mousemove", function (e) {
        const sparkle = document.createElement("div");
        sparkle.className = "sparkle";

        // position near the cursor
        sparkle.style.left = e.pageX + "px";
        sparkle.style.top = e.pageY + "px";

        document.body.appendChild(sparkle);

        // remove after animation
        setTimeout(() => {
            sparkle.remove();
        }, 700);
    });
});
