class List {
    constructor() {
        this.numberList = [];
        this.size = 0;
    }

    add(number) {
        this.numberList.push(number);
        this.numberList.sort((a, b) => a - b);
        this.size++;
    }

    remove(index) {
        if (index >= 0 && index < this.numberList.length) {
            this.numberList.splice(index, 1);
            this.size--;
        }
    }

    get(index) {
        if (index >= 0 && index < this.numberList.length) {
            return this.numberList[index];
        }
    }
}

let list = new List();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1));
list.remove(1);
console.log(list.get(1));


