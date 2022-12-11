function deleteByEmail() {
    let inputValue = document.querySelector('input[name="email"]').value;

    let rows = document.querySelectorAll('tbody tr');

    let isFound = false;

    for (let row of rows) {
        if (inputValue === row.children[1].textContent) {
            let parent = row.parentElement;
            parent.removeChild(row);
            isFound = true;
        }
    }

    document.getElementById('result').textContent = isFound ? 'Deleted' : 'Not found.';
}