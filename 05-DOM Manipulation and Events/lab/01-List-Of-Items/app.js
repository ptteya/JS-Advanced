function addItem() {
    let input = document.getElementById('newItemText');

    let newLiElement = document.createElement('li');
    newLiElement.textContent = input.value;

    let ulElement = document.getElementById('items')
    ulElement.appendChild(newLiElement);

    input.value = ''
}