function daysOfAMonth(month, year) {
    let result = new Date(year, month, 0).getDate();
    console.log(result);
}

daysOfAMonth(1, 2012);
//result: 31

daysOfAMonth(2, 2021);
//result: 28
