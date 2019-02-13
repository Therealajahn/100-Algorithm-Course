//My Solution

function addTwoDigitsA(n: any): number {
    
    let nSplit = n.toString().split('');

    for (let i = 0; i < nSplit.length; i++){
        nSplit[i] = parseInt(nSplit[i], 10);
    }
    
    nSplit = nSplit.reduce((acc, curr) => return acc + curr);
return nSplit;
}

console.log(addTwoDigitsA(29));

//Suppied Solution #1

function addTwoDigitsB(n: any): number {
    const nums = n.toString().split('');

    return nums.reduce((a: string, b: string) => {
        return parseInt(a) + parseInt(b);
    });
}

console.log(addTwoDigitsB(29));

//Suppied Solution #2

function addTwoDigitsC(n: any): number {
    const nums = n.toString().split('');

   return parseInt(nums[0]) + parseInt(nums[1];)
}

console.log(addTwoDigitsC(29));




