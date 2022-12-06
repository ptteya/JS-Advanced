function listOfNames(input) {
    let nameList = input;
    nameList.sort((a, b) => a.localeCompare(b));
    nameList.forEach((name, i) => console.log(`${i + 1}.${name}`));
}

listOfNames(["John", "Bob", "Christina", "Ema"]);