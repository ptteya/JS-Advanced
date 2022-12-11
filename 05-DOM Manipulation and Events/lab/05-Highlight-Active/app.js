function focused() {
    Array.from(document.querySelectorAll('input')).forEach(i => {
        i.addEventListener('focus', onFocus);

        i.addEventListener('blur', onBlur);
    });

    function onFocus(event) {
        event.target.parentElement.className = 'focused';
        //event.target.parentElement.classList.add('focused');
    }

    function onBlur(event) {
        event.target.parentElement.className = 'blurred';
        //event.target.parentElement.classList.add('blurred');
    }
}