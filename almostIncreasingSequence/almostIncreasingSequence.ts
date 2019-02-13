//My Solution
//doesn't work in hind sight
function almostIncreasingSequence(sequence: number[]): boolean {

let trues = 0;
let falses = 0;

for(let i = 0; i < sequence.length - 1; i++){
    sequence[i] <= sequence[i + 1]? trues++ : falses++;
}
//counts the number of decreases and increases between adjacent pairs
let increase = trues >= falses? true : false; 
//if there are more increases than decreases it returns true
//this doesn't account for cases where the sequence fluctuates under the initial value 
return increase;
}

console.log(almostIncreasingSequence([1, 3, 2, 1])) 
console.log(almostIncreasingSequence([1, 3, 2])) 

//Supplied Solution
function almostIncreasingSequenceB(sequence: number[]): boolean {
    let count = 0;

    for(let i = 0; i < sequence.length; i++){
        if(sequence[i] <= sequence[i - 1]){
            count++;
        //if the value is less than the number before it, increment count
            if(sequence[i] <= sequence[i - 2]
                 && sequence[i + 1] <= sequence[i - 1]){
                     return false;
                 }
        //if the number after the value is less than the number before a value...
        //...AND...
        //...the number two indeces away from the value is less than the value...
        //...return false          
        }
    }

    return count <= 1;
    //if count is 1 or more, return true
    }
    
    console.log(almostIncreasingSequenceB([1, 3, 2, 1])) 
    console.log(almostIncreasingSequenceB([1, 3, 2])) 