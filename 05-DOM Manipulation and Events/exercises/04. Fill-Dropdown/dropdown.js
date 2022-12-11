function addItem() {
    let currText = document.querySelector('#newItemText').value;
    let currValue = document.querySelector('#newItemValue').value;

    document.querySelector('input[type = "button"]')

    let option = document.createElement('option');
    option.innerText = currText;
    option.value = currValue;

    if (currText !== '' && currValue !== '') {
        document.getElementById('menu').appendChild(option);
    }
    document.querySelector('#newItemText').value = '';
    document.querySelector('#newItemValue').value = '';
}