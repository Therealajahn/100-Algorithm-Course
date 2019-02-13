//My (original) Solution
function alphabeticShift(inputString: string): string {
    
    let charCodes = [];
    for(let i = 0; i < inputString.length; i++){
    charCodes.push(inputString.charCodeAt(i));
    }
    
    let charTilted = [];
    for(let j = 0; j < charCodes.length; j++){
    if(charCodes[j] === 122)charTilted.push(97)
        else{charTilted.push(charCodes[j] + 1)};  
    }
    
    let tiltedArray =[];
    for(let k = 0; k < charTilted.length; k++){
        tiltedArray.push(String.fromCharCode(charTilted[k]));
      }
    
    let tilted = tiltedArray.join('');

      return tilted;
}

console.log(alphabeticShift('crazy'));


//My (Refactored) Solution
function alphabeticShiftA(inputString: string): string {
    let tiltedArray = [];
   
    for(let i = 0; i < inputString.length; i++){
    let charCodes = (inputString.charCodeAt(i));
    let charTilted = 0;
    
    if(charCodes === 122)charTilted = 97;
        else{charTilted = (charCodes + 1)};  
   
     tiltedArray.push(String.fromCharCode(charTilted));
    }
    
    let tilted = tiltedArray.join('');

    return tilted;
}

console.log(alphabeticShiftA('crazy'));


//Supplied Solution

function alphabeticShiftB(inputString: string): string {
    const alphabet = ['a','b','c','d','e','f',
        'g','h','i','j','k','l','m','n','o','p',
        'q','r','s','t','u','v','w','x','y','z' ]
    let inputShifted = inputString.split('');

    for(let i = 0; i < inputShifted.length; i++){
        let index = 0;
        //if the letter is 'z', it is assigned to 'a'(index 0)
        if(inputString[i] !== 'z'){
            index = alphabet.indexOf(inputShifted[i]) + 1;
        }
       inputShifted[i] = alphabet[index];
        //if the letter is not z, it is assigned 
        //to the letter with the index of the same 
        //letter in alphabet plus one  
    }

    return inputShifted.join('');
}
 
 console.log(alphabeticShiftB('crazy'));
 
 //Another Supplied Solution
 function alphabeticShiftC(inputString: string): string {
    const alphabet = {'a':'b','b':'c','c':'d',
                      'd':'e','e':'f','f':'g',
                      'g':'h','h':'i','i':'j',
                      'j':'k','k':'l','l':'m',
                      'm':'n','o':'p','p':'q',
                      'q':'r','r':'s','s':'t',
                      't':'u','u':'v','v':'w',
                      'w':'x','x':'y','y':'z',
                      'z':'a' 
                    }
    //no looping, all values are prescribed
    let inputShifted = inputString.split('');

    for(let i = 0; i < inputShifted.length; i++){
      inputShifted[i] = alphabet[inputShifted[i]]
    }

    return inputShifted.join('');
}
 
 console.log(alphabeticShiftC('crazy'));