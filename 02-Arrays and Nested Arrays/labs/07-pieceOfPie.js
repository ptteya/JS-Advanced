function pieceOfPie(flavorsArr, targetFlavor1, targetFlavor2) {
    let startIndex = flavorsArr.indexOf(targetFlavor1);
    let endIndex = flavorsArr.indexOf(targetFlavor2);
    let resultArr = flavorsArr.slice(startIndex, endIndex + 1);
    return resultArr;
}

console.log(pieceOfPie(['Pumpkin Pie',
    'Key Lime Pie',
    'Cherry Pie',
    'Lemon Meringue Pie',
    'Sugar Cream Pie'],
    'Key Lime Pie',
    'Lemon Meringue Pie'));

//result:
// ['Key Lime Pie',
//  'Cherry Pie',
//  'Lemon Meringue Pie']


console.log(pieceOfPie(['Apple Crisp',
    'Mississippi Mud Pie',
    'Pot Pie',
    'Steak and Cheese Pie',
    'Butter Chicken Pie',
    'Smoked Fish Pie'],
    'Pot Pie',
    'Smoked Fish Pie'));

//result:
// ['Pot Pie',
//  'Steak and Cheese Pie',
//  'Butter Chicken Pie',
//  'Smoked Fish Pie']
