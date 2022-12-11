function addItem() {
    let input = document.getElementById('newItemText').value;

    let newLi = document.createElement('li');
    newLi.textContent = input;

    let deleteBtn = document.createElement('a');
    deleteBtn.textContent = '[Delete]';
    deleteBtn.href = '#';

    newLi.appendChild(deleteBtn);
    deleteBtn.addEventListener('click', onDelete);

    let ul = document.getElementById('items')
    ul.appendChild(newLi);

    input.value = '';

    function onDelete(event) {
        event.target.parentElement.remove();
    }
}
