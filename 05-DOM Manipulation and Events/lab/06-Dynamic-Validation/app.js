function validate() {
    let pattern = /[a-z]+@[a-z]+\.[a-z]+/;

    let input = document.getElementById('email')
    input.addEventListener('change', onChange)

    function onChange(event) {
        let value = event.target.value;
        if (pattern.exec(value)) {
            input.className = '';
        } else {
            input.className = 'error';
        }
        console.log(event)
    }
}