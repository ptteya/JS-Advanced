function attachGradientEvents() {
    let gradientBox = document.getElementById('gradient');
    gradientBox.addEventListener('mousemove', onMouseMove);
    let result = document.getElementById('result');

    function onMouseMove(event) {
        result.textContent = Math.floor(event.offsetX / gradientBox.clientWidth * 100) + '%';
    }
}