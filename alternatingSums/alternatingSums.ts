//My Solution
function alternatingSums(a: number[]): number[] {
let team1 = 0;
let team2 = 0;

for(let i = 0; i < a.length; i++){
    let loop = i%2;
    if(loop === 0) team1 += a[i]
    if(loop === 1) team2 += a[i];
};

return [team1, team2];
}

console.log(alternatingSums([50, 60, 60, 45, 70]))

//Supplied Solution
function alternatingSumsA(a: number[]): number[] {
    let evenSum = 0;
    let oddSum  = 0;

    a.forEach((element, index) => {
       if(index%2 === 0){
           evenSum += element;
       }else{
           oddSum += element;
       } 
    })

    return [evenSum, oddSum]
    }
    
    console.log(alternatingSumsA([50, 60, 60, 45, 70]))