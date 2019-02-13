//supplied solution 

function absoluteValuesSumMinimizationA(a: number[]): number {
    const isEven = a.length % 2 ===0;

    return isEven ? a[a.length / 2 - 1] : a[Math.floor(a.length / 2)];
}

console.log(absoluteValuesSumMinimizationA([2, 4, 7]));
console.log(absoluteValuesSumMinimizationA([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimizationA([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimizationA([2, 4, 7, 6, 6, 8]))

//my alternate solution using bitwise AND operator

function absoluteValuesSumMinimizationB(a: number[]): number {
    let isOdd = (a.length & 1) ? true : false;
    let middle = isOdd ? a[Math.floor(a.length / 2)] :  a[(a.length / 2 - 1)]
    return middle; 
}

console.log(absoluteValuesSumMinimizationB([2, 4, 7]));
console.log(absoluteValuesSumMinimizationB([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimizationB([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimizationB([2, 4, 7, 6, 6, 8]))


//my first alternate solution using bitwise AND operator

function absoluteValuesSumMinimizationB(a: number[]): number {
    let isOdd = false;
    if (a.length & 1) isOdd = true;
    if (isOdd === true) middle = a[Math.floor(a.length * .5)];
    if (isOdd === false) middle = a[(a.length * .5 - 1)];
    return middle; 


}

console.log(absoluteValuesSumMinimizationB([2, 4, 7]));
console.log(absoluteValuesSumMinimizationB([2, 4, 7, 6]));
console.log(absoluteValuesSumMinimizationB([2, 4, 7, 6, 6]));
console.log(absoluteValuesSumMinimizationB([2, 4, 7, 6, 6, 8]))

