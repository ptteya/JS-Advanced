function lockedProfile() {
    Array.from(document.querySelectorAll('button')).forEach(b => b.addEventListener('click', onShowMore));

    function onShowMore(ev) {
        let parent = ev.target.parentElement;
        let lockedInfo = parent.querySelectorAll('input[type = "radio"]')[1];
        let hiddenInfo = parent.querySelector('div');

        if (lockedInfo.checked && ev.target.textContent === 'Show more') {
            hiddenInfo.style.display = 'block';
            ev.target.innerText = 'Hide it';
        } else if (lockedInfo.checked && ev.target.textContent === 'Hide it') {
            hiddenInfo.style.display = 'none';
            ev.target.innerText = 'Show more';
        }
    }
}
