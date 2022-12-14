function solution() {
    let recipesLibrary = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
    };

    let ingredients = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0,
    };

    let commands = {
        restock(microelement, quantity) {
            ingredients[microelement] += Number(quantity);
            return 'Success';
        },
        prepare(recipe, quantity) {
            let keys = Object.keys(recipesLibrary[recipe]);

            for (let key of keys) {
                if (ingredients[key] < recipesLibrary[recipe][key] * Number(quantity)) {
                    return `Error: not enough ${key} in stock`;
                }
            }

            keys.forEach(k => ingredients[k] -= recipesLibrary[recipe][k] * quantity);

            return 'Success';
        },
        report() {
            let result = [];
            Object.entries(ingredients).forEach(([key, value]) => result.push(`${key}=${value}`));
            return result.join(' ');
        },
    }

    return function manager(input) {
        let [command, ...tokens] = input.split(' ');

        if (command === 'restock') {
            return commands[command](...tokens);
        } else if (command === 'prepare') {
            return commands[command](...tokens);
        }

        return commands[command]();
    }
}

let manager = solution();
console.log(manager("prepare turkey 1"));
console.log(manager("restock protein 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock carbohydrate 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare turkey 1"));
console.log(manager("report"));

//another solution
// function solution() {

//     let recipesLibrary = {
//         apple: { carbohydrate: 1, flavour: 2 },
//         lemonade: { carbohydrate: 10, flavour: 20 },
//         burger: { carbohydrate: 5, fat: 7, flavour: 3 },
//         eggs: { protein: 5, fat: 1, flavour: 1 },
//         turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 },
//     };

//     let ingredients = {
//         protein: 0,
//         carbohydrate: 0,
//         fat: 0,
//         flavour: 0,
//     };

//     return function manager(input) {
//         let [command, ...tokens] = input.split(' ');

//         if (command === 'restock') {
//             return restock(...tokens);
//         } else if (command === 'prepare') {
//             return prepare(...tokens);
//         }

//         return report();
//     }

//     function restock(microelement, quantity) {
//         ingredients[microelement] += Number(quantity);
//         return 'Success';
//     }

//     function prepare(recipe, quantity) {
//         let keys = Object.keys(recipesLibrary[recipe]);

//         for (let key of keys) {
//             if (ingredients[key] < recipesLibrary[recipe][key] * Number(quantity)) {
//                 return `Error: not enough ${key} in stock`;
//             }
//         }

//         keys.forEach(k => ingredients[k] -= recipesLibrary[recipe][k] * quantity);

//         return 'Success';
//     }

//     function report() {
//         let result = [];
//         Object.entries(ingredients).forEach(([key, value]) => result.push(`${key}=${value}`));
//         return result.join(' ');
//     }
// }