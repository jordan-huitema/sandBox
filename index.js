const arr = ['val-111','val-332','val33334-3','44444444444-4']
let removed = [];

console.log(arr)

arr.push('val-5','val-6')

console.log(arr)

removed.push(arr.pop())

console.log(arr)

console.log(removed)

removed.push(arr.shift())

function test(arr) {
        return arr.length > 7;
}

const filtered = arr.filter(test);                              //.filter allows you to cycle through the index's of an array and cut out the index's that meet the conditions definded by a funciton

console.log(filtered);

let names = ['Phill','Dale','Jordan'];
let names2 = ['Frank','Asti', 'Ali'];

function poper(arr1,arr2) {
    for (i = 0; i < names2.length; i++) {
        arr1.push(arr2[i])
    }
    return arr1;
}
let result = poper(names,names2);

console.log(result)


const plus = (a,b) => { return a + b }
console.log(plus(5,10))

const greater = (a,b) => { return (a > b) ? a : b };
console.log(greater(5,10))

//sorting arrays
const arrUnsorted = [1,2,3,4,5,6,7,8,9,10];

const arrSorted = arrUnsorted.filter((element)=> element%2 === 0);
console.log(arrSorted);

const arrSorted2 = [];
arrUnsorted.forEach((element) => (element%2 === 0)? arrSorted2.push(element): null);
console.log(arrSorted2);

let even = [];

function dale(arrinput) {
    for (i = 0; i < arrinput.length; i++) {
        if (arrinput[i] % 2 === 0) {
            even.push(arrinput[i])
        }
    }
}

dale(arrUnsorted)
console.log(even)
