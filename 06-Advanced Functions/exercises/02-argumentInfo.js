function argumentsInfo() {
    let typesCounter = {};

    Array.from(arguments).forEach(arg => {
        let type = typeof arg;
        console.log(`${type}: ${arg}`);

        if (!typesCounter.hasOwnProperty(type)) {
            typesCounter[type] = 0;
        }
        typesCounter[type]++;
    })

    Object.entries(typesCounter)
        .sort((a, b) => b[1] - a[1])
        .forEach(e => console.log(`${e[0]} = ${e[1]}`));
}

argumentsInfo('cat', 'dog', 42, function () { console.log('Hello world!'); });