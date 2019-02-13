//My Solution
function allLongestStrings(inputArray: string[]): string[] {
let longArray = [];
let longest = 0;
longStrings = [];

for (let i = 0; i < inputArray.length; i++){
 longArray.push(inputArray[i].length);
 
}
for (let j = 0; j < longArray.length; j++){
if (longArray[j] > longArray[j+1]){
longest = longArray[j]
}
else if (longArray[j] < longArray[j+1]){
    longest = longArray[j+1]
}
} 
for (let k = 0; k < longArray.length; k++){
    if(longArray[k] === longest){
        longStrings.push(inputArray[k])
    }
}
console.log(longStrings); 
   
return longStrings;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));

//Supplied Solution
function allLongestStringsB(inputArray: string[]): string[] {
   let longestLength = 0;
   const longestWords = []; 
   inputArray.forEach((word:string) =>{
       longestLength = longestLength < word.length ?
       word.length : longestLength;
   });

   inputArray.forEach((word:string) => {
      if (word.length === longestLength){
          longestWords.push(word);
      } 
   })
       
   });
   return longestWords

}
    
    console.log(allLongestStringsB(["aba", "aa", "ad", "vcd", "aba"]));