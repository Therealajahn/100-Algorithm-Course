//My solution

function addBorderA(picture: string[]): string[] {

        let NumberOfWords = picture.length;
        let lettersPerLine = picture[0].length;
        let starNum = lettersPerLine + 2;
        let star = [];
        let textStars = []; 
        let num = [];
        
        for (let i = 0; i < NumberOfWords; i++) {
           num.push(i);
           picture.push('*' + picture[i] + '*');
         
        }
        picture.splice(0, num.length)
           


        for (let i = 0; i < (starNum); i++) {
            star.push('*')
            }
        let starJoin = star.join('');
        picture.unshift(starJoin);
        picture.push(starJoin);
            
        

        
        console.log(num);
        console.log(picture);
        console.log(starJoin);
        console.log(lettersPerLine);
       
  return picture;    
}

console.log(addBorderA(["abc", "ded"]));

//Supplied Solution




function addBorderB(picture: string[]): any[] {
    
    const wall = '*'.repeat(picture[0].length + 2);
 
    picture.unshift(wall);
    picture.push(wall);

    for (let i = 1; i < picture.length - 1; i++) {
        picture[i] = '*'.concat(picture[i], '*');
    }

    return picture;   
}

console.log(addBorderB(["abc", "ded"]));



