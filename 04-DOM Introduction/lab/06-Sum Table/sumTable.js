function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

    let costElementsArr = Array.from(costElements);
    costElementsArr.pop();

    let sum = costElementsArr.reduce((a, el) => a + Number(el.textContent), 0);

    let sumElement = document.getElementById('sum');
    sumElement.textContent = sum;
}