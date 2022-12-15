function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    let input = document.querySelector('#email');

    input.addEventListener('change', () => {
        if (!pattern.test(input.value)) {
            input.className = 'error';
        } else {
            input.className = 'default';
        }
    });
}