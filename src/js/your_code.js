// raf loop

const cursorElement = document.getElementById("cursor");
const offset = 0;
let prevTime = 0;
let currCursorPosition = { x: 0, y: 0 };
let prevCursorPosition = { x: 0, y: 0 };
function render(timestamp) {
    const deltaTime = timestamp - prevTime;
    prevTime = timestamp;
    let alpha = deltaTime * 0.001;

    const newCursorPos = {
        x: lerp(prevCursorPosition.x, currCursorPosition.x, Math.min(alpha, 1)),
        y: lerp(prevCursorPosition.y, currCursorPosition.y, Math.min(alpha, 1))
    };
    cursorElement.style.transform = `translate3d(${newCursorPos.x}px, ${newCursorPos.y}px, 0px)`
    prevCursorPosition = newCursorPos;

    requestAnimationFrame(render);
}

window.addEventListener("mousemove", function (ev) {
    currCursorPosition = { x: ev.x, y: ev.y };
});

window.addEventListener("load", function () {
    const elements = document.querySelectorAll(".face--box");
    for (const element of elements) {
        const keyframeEffects = [
            {
                transform: `translate(0, 0)`
            },
            {
                transform: `translate(${Math.random() * 100}px, ${Math.random() * -500}px)`
            }
        ];

        const keyframeOptions = {
            duration: 1000,
            fill: "forwards",
            easing: "ease-in-out"
        }

        element.animate(keyframeEffects, keyframeOptions);
    }

    requestAnimationFrame(render);
})