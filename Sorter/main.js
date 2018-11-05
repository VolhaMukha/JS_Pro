class Sorter {
    constructor(arr) {
        this.arr = arr;
    }

    add(elem) {
        this.arr = [...this.arr, elem];
        // arr.push(elem);
        return this.arr.length;
    }

    length() {
        return this.arr.length;
    }

    sort() {
        return this.arr.sort();
    }
    map(callbackFunc) {
        return this.arr.map(callbackFunc);
    }

    filter(callbackFunc) {
        return this.arr.filter(callbackFunc);
    }

    pushArray(addArr) {
        return this.arr.push(...addArr);
    }
}
let baseArr = new Sorter (['pen', 'book', '123', 10, true]);
const elem1 = 7, elem2 = 'chair';

console.log(`Add method. Length of array after add element: ${baseArr.add(elem1)}`);
console.log(`Add method. Length of array after add element: ${baseArr.add(elem2)}`);

console.log(`Length of array:  ${baseArr.length()}`);

console.log(`Sort method. Sort_arr: ${baseArr.sort()}`);

let map_arr = baseArr.map(elem => elem+1);
console.log(`Map method. New_arr: ${map_arr}`);

let filter_arr = baseArr.filter(elem => elem.length > 3);
console.log(`Filter method. Filter_arr: ${filter_arr}`);

let addArray = [3,16,'new'];
baseArr.pushArray(addArray);
console.log(`Push method. Arr: ${baseArr}`);
