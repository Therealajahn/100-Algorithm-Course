//My Solution(does not work)
function areEquallyStrong(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
let leftArm = false;
let rightArm = false;
let equal = false;


    if(yourLeft === friendsLeft || yourLeft === friendsRight){
        leftArm = true;
    }
    if(yourRight === friendsLeft || yourRight === friendsRight){
        rightArm = true;
    }
    if(leftArm && rightArm === true) equal = true;
return equal;
}

console.log(areEquallyStrong(10, 15, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 10))
console.log(areEquallyStrong(15, 10, 15, 9))

//Supplied Solution
function areEquallyStrongA(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
    const yourWeakest = yourLeft <= yourRight ? yourLeft : yourRight;
    const yourStrongest = yourLeft >= yourRight ? yourLeft : yourRight;
    const friendsWeakest = friendsLeft <= friendsRight ? friendsLeft : friendsRight;
    const friendsStrongest = friendsLeft >= friendsRight ? friendsLeft : friendsRight;


    return (yourStrongest === friendsStrongest &&
         yourWeakest === friendsWeakest) ;
    }
    
    console.log(areEquallyStrongA(10, 15, 15, 10))
    console.log(areEquallyStrongA(15, 10, 15, 10))
    console.log(areEquallyStrongA(15, 10, 15, 9))

    //Another Solution(works but hacky)
function areEquallyStrongB(yourLeft: number, yourRight: number, friendsLeft: number, friendsRight: number): boolean {
   let arms = [yourLeft, yourRight, friendsLeft, friendsRight];
   let armsOne = false;
   let armsTwo = false;
   
   for(let i = 2; i <= 3; i++){
        if(arms[0] === arms[i]){
            arms.splice(i, 1);
            armsOne = true;
        }
        if(arms[1] === arms[2]){
           armsTwo = true;
        }
    
    }
    
    return (armsOne && armsTwo);
}
   
    console.log(areEquallyStrongB(10, 15, 15, 10))
    console.log(areEquallyStrongB(15, 10, 15, 10))
    console.log(areEquallyStrongB(15, 10, 15, 9))

    