//My Solution
function alphabetSubsequence(s: string): boolean {


    let charCode = [];
    for(let i = 0; i < s.length; i++){
    charCode.push(s.charCodeAt(i));
    }
    //push ascii codes of s to charCode
    
    let isIncreasing = 0;
    for(let i = 0; i < charCode.length - 1; i++){
    if(charCode[i] < charCode[i + 1])isIncreasing++;
    }
    //if the current ascii is less than the next, increment isIncreasing
    let alphaSample = false;
    if(isIncreasing === (s.length - 1)) alphaSample = true;
    //if isIncreasing is one less than the s, alphaSample is true,
    //(the sample is a subset of the alphabet)
    return alphaSample;
    }
    
    console.log(alphabetSubsequence('zab'))
    console.log(alphabetSubsequence('effg'))
    console.log(alphabetSubsequence('cdce'))
    console.log(alphabetSubsequence('ace'))
    console.log(alphabetSubsequence('bxz'))

    //Supplied Solution

    function alphabetSubsequenceA(s: string): boolean {
      const chars: string[] = s.split('');
      let charValues: number[] = [];
      chars.forEach((char: string) => {
            charValues.push(char.charCodeAt(0));
      });
      
      if(new Set(charValues).size !== charValues.length){
          return false;
      }

      for(let i = 0; i < charValues.length - 1; i++){
          if(charValues[i] >= charValues[i + 1]) {
              return false;
          }
      }


        return true;
    }
    
    console.log(alphabetSubsequenceA('zab'))
    console.log(alphabetSubsequenceA('effg'))
    console.log(alphabetSubsequenceA('cdce'))
    console.log(alphabetSubsequenceA('ace'))
    console.log(alphabetSubsequenceA('bxz'))

    //Supplied Solution(reworked)

    function alphabetSubsequenceB(s: string): boolean {
        const chars: string[] = s.split('');
        let charValues: number[] = [];
        chars.forEach((char: string) => {
              charValues.push(char.charCodeAt(0));
        });
        // Duplicates don't need filtering if you return false 
        //for a char code that is the same as the next
        for(let i = 0; i < charValues.length - 1; i++){
            if(charValues[i] >= charValues[i + 1]) {
                return false;
            }
        }
         
        return true;
      }
      
      console.log(alphabetSubsequenceB('zab'))
      console.log(alphabetSubsequenceB('effg'))
      console.log(alphabetSubsequenceB('cdce'))
      console.log(alphabetSubsequenceB('ace'))
      console.log(alphabetSubsequenceB('bxz'))
    