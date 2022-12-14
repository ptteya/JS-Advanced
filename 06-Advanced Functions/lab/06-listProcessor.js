function solve(input) {
    let result = [];

    let commandEngine = {
        add(str) {
            result.push(str);
        },
        remove(str) {
            result = result.filter(x => x != str);
        },
        print() {
            console.log(result.join(','));
        }
    }

    for (let entry of input) {
        let [command, str] = entry.split(' ');
        commandEngine[command](str);
    }
}

solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])

solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print'])