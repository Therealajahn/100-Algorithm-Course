function alternatingSums(a: number[]): number[] {
let team1 = 0;
let team2 = 0;

for(let i = 0; i < a.length; i++){
    let loop = i%2;
    if(loop === 0) team1 += a[i]
    if(loop === 1) team2 += a[i];
};

let weight = [team1, team2];

return weight;
}

console.log(alternatingSums([50, 60, 60, 45, 70]))