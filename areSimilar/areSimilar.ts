//My Second Solution
function areSimilarA(a: number[], b: number[]): boolean {
   
    let match = 0
   for(let i = 0; i < a.length; i++) {
       if(a[i] === b[i]){match++};
   }

   let reverseMatch = false;
   for(let i = 0; i < a.length - 1; i++) {
       let aPair = [a[i], a[i + 1]];
       let bPair = [b[i + 1], b[i]];
       if(aPair.toString === bPair.toString){reverseMatch = true}
    }
    
   if(match === a.length){
        return true;
    }else if(match === (a.length - 2) && reverseMatch){
        return true;
    }
    return false;    
}
    


console.log(areSimilarA([1, 2, 3], [1, 2, 3 ]));
console.log(areSimilarA([1, 2, 3], [2, 1, 3]));
console.log(areSimilarA([1, 2, 2], [2, 1, 1]));

// My (bad) Solution
function areSimilar(a: number[], b: number[]): boolean {
    let exactMatch = 0;
    let pairMatch = 0;
    let reverseMatch = 0;

    
    for(let i = 0; i < a.length - 1; i++){
       
        if(a[i] === b[i] && a[i + 1] === b[i + 1]){ 
                pairMatch += 1;
        }else{
            if(a[i] === b[i + 1] && a[i + 1] === b[i]){
                reverseMatch += 1;
            };
        };
    };
    
    for(let k = 0; k < a.length; k++){
        let current = a[k]:
        
        for(let j = 0; j < a.length; j++){
        
            if(current === b[j]){
            exactMatch += 1;
            b.splice(j,1);
        }    
        }
    } 
    
    if(reverseMatch >= 1 && exactMatch === a.length){return true}
    else if(pairMatch === a.length - 1){return true};
    else{return false};
}
    


console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));


function areSimilarB(a: number[], b: number[]): boolean {
    const c: number[] = [];
    let d: number[] = [];

    
    if(a.toString() === b.toString()){
        return true;
    }

    for (let i = 0; i < a.length; i++) {
        if(a[i] !== b[i]) {
            c.push(a[i]);
            d.push(b[i]);
        }
    }

    d = d.reverse();

    if(c.length === 2 && (c.toString() === d.toString())){
        return true;
    }
    return false;
}
    


console.log(areSimilarB([1, 2, 3], [1, 2, 3]));
console.log(areSimilarB([1, 2, 3], [2, 1, 3]));
console.log(areSimilarB([1, 2, 2], [2, 1, 1]));
