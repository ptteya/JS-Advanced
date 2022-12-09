function colorize() {
    let rowElements = document.querySelectorAll('tr');

    let rowElementsArr = Array.from(rowElements);

    for (let i = 0; i < rowElementsArr.length; i++) {
        let element = rowElementsArr[i];
        if (i % 2 !== 0) {
            element.style.backgroundColor = 'teal';
        }
    }
}

// function colorize() {
//     let rowElements = document.querySelectorAll('tr:nth-of-type(2n) td');

//     rowElements.forEach(el => el.style.backgroundColor = 'teal');
// }