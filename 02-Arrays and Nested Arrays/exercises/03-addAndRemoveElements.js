function addAndRemoveElements(input) {
    let result = [];

    let counter = 0;
    for (let command of input) {
        counter++;
        if (command === 'add') {
            result.push(counter);
        } else {
            result.pop();
        }
    }

    if (result.length === 0) {
        console.log('Empty');
    } else {
        result.forEach(el => console.log(el));
    }
}

addAndRemoveElements([
    'add',
    'add',
    'remove',
    'add',
    'add'
]);

//result:
// 1
// 4
// 5
