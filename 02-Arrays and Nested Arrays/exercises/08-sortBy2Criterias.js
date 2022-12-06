function sortByTwoCriteria(input) {
    let sortedArr = input.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sortedArr.join('\n'));
}

sortByTwoCriteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);

sortByTwoCriteria(['test', 'Deny', 'omen', 'Default']);
