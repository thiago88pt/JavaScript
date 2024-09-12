// ex7 repeating String

// essa foi a 1ª versão, porém na 2ª é mais fácil controlar a quantidade de repetições 

// function repeating(times, string){
//     return string.repeat(times);    
// }

// console.log(repeating(3, "Primavera"));



// 2ª versão
let repeatTimes = 3;
let repeatString = "Primavera"; 

function repeating1(times, string){
    return string.repeat(times);
    }
console.log(repeating1(repeatTimes, repeatString));

// 3ª versão
let repeatTimesIf = 5; 
let repeatStringIf = "Primavera"; 

function repeating2(times, string){
    return times > 0 ? string.repeat(times) : "Valor tem que superior a zero.";         
}

console.log(repeating2(repeatTimesIf, repeatStringIf));
