// const arr = ['val-111','val-332','val33334-3','44444444444-4']
// let removed = [];

// console.log(arr)

// arr.push('val-5','val-6')

// console.log(arr)

// removed.push(arr.pop())

// console.log(arr)

// console.log(removed)

// removed.push(arr.shift())

// function test(arr) {
//         return arr.length > 7;
// }

// const filtered = arr.filter(test);                              //.filter allows you to cycle through the index's of an array and cut out the index's that meet the conditions definded by a funciton

// console.log(filtered);

// let names = ['Phill','Dale','Jordan'];
// let names2 = ['Frank','Asti', 'Ali'];

// function poper(arr1,arr2) {
//     for (i = 0; i < names2.length; i++) {
//         arr1.push(arr2[i])
//     }
//     return arr1;
// }
// let result = poper(names,names2);

// console.log(result)


// const plus = (a,b) => { return a + b }
// console.log(plus(5,10))

// const greater = (a,b) => { return (a > b) ? a : b };
// console.log(greater(5,10))

// //sorting arrays
// const arrUnsorted = [1,2,3,4,5,6,7,8,9,10];

// const arrSorted = arrUnsorted.filter((element)=> element%2 === 0);
// console.log(arrSorted);

// const arrSorted2 = [];
// arrUnsorted.forEach((element) => (element%2 === 0)? arrSorted2.push(element): null);
// console.log(arrSorted2);

// let even = [];

// function dale(arrinput) {
//     for (i = 0; i < arrinput.length; i++) {
//         if (arrinput[i] % 2 === 0) {
//             even.push(arrinput[i])
//         }
//     }
// }

// dale(arrUnsorted)
// console.log(even)

// -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- -- --
//setting example array
let arr = [ 
    1,
    [ 3, [ 5, [10, 30] ] ],
    6,
    [ 7, 8 ],
    [ [ 'Ali, Frank' ], 5, 1, [ 5, 6 ] ]
]
console.log(arr)
//flattening array once using the .flat funciton
const flatArr1 = arr.flat( 1 )
console.log( flatArr1 )

//flattening array once with other functions
const flatArr2 = arr.reduce((x, y) => x.concat(y), []);
console.log(flatArr2)

//flattening array completly using the .flat funciton
const flatArr3 = arr.flat(Infinity)
console.log(flatArr3)

//flattening array completly using custom function
function flattenArrayInf(arr) {                                                    //setting function and paramater (input var) as 'arr'
    for (;;) {                                                                      //adding a for loop
        let tmpArr = []                                                                 //setting a temp array, we will use this as a buffer before editing the input array
        if ((arr.filter(element => Array.isArray(element)).length === 0)) {             //filter sub arrays from arr, if there are no sub arrays
            return arr                                                                      //return arr
            break                                                                           //break
        }
        arr.forEach(                                                                    //for each index of arr array 
            element => {                                                                    //create nested js6 function with 'element' as the parameter 
                if (Array.isArray(element)) {                                                   //if the current index of arr is an array
                    element.forEach(element => {                                                    //for each index of the sub array, create nested js6 function with 'element' as the parameter
                        tmpArr.push(element)                                                            //push current index of sub array to tmpArr array
                    })
                } else {                                                                        //else
                    tmpArr.push(element)                                                            //push current index of arr array to tmpArr array
                }
            }
        )
        arr = tmpArr                                                                    //set arr array as tmpArr
    }                                                                              //this loop runs as long as there is a sub array within the input array, when no sub arrays are found it breaks and returns the flattened array
}

let flatArr4 = flattenArrayInf(arr)
console.log(flatArr4)


//flattening array a variable amount of times using custom function
function flattenArrayX(arr,times) {                                                 //setting function and paramater (input var) as 'arr' and ammount of flatterns to 'times'
    for (i = 0; i < times; i++) {                                                       //adding a for loop that runs as long as i is less than times
        let tmpArr = []                                                                     //setting a temp array, we will use this as a buffer before editing the input array
        if ((arr.filter(element => Array.isArray(element)).length === 0)) {                 //filter sub arrays from arr, if there are no sub arrays
            return arr                                                                          //return arr
            break                                                                               //break
        }
        arr.forEach(                                                                        //for each index of arr array 
            element => {                                                                        //create nested js6 function with 'element' as the parameter 
                if (Array.isArray(element)) {                                                       //if the current index of arr is an array
                    element.forEach(element => {                                                        //for each index of the sub array, create nested js6 function with 'element' as the parameter
                        tmpArr.push(element)                                                            //push current index of sub array to tmpArr array
                    })
                } else {                                                                    //else
                    tmpArr.push(element)                                                        //push current index of arr array to tmpArr array
                }
            }
        )
        arr = tmpArr                                                                    //set arr array as tmpArr
    }                                                                              //this loop runs as long as there is a sub array within the input array, when no sub arrays are found it breaks and returns the flattened array
    return arr                                                                          //return arr if loop runs 'times' times
}

let flatArr5 = flattenArrayX(arr, 2)
console.log(flatArr5)