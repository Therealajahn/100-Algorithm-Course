//My Solution

function adjacentElementsProduct(inputArray: number[]): number {
   
let pairs = [];
   for(let i = 0; i < inputArray.length - 1;i++){
      pairs.push(inputArray[i] * inputArray[i+1]);     
   }
let bigPair = Math.max(...pairs);
        return bigPair; 
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));

//Supplied Solution

function adjacentElementsProductB(inputArray: number[]): number {
    let largestProduct = inputArray[0] * inputArray[1]   
    
    for (let i = 0; i < inputArray.length - 1; i++){
        const product = inputArray[i] * inputArray [i + 1];
        console.log(product)
        largestProduct = largestProduct < product? product : largestProduct
    }
return largestProduct;
}
    
    console.log(adjacentElementsProductB([3, 6, -2, -5, 7, 3]));