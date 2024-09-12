//  Ex10 counting words JavaScript

function countingWords1(string){
    let phrase = string.split(' ');
    return phrase.length;
}

console.log(countingWords1("Esse até que foi simples, o anterior menos."));

//  Pensando na segunda parte exigida(mas também terão de resolver o exercício sem esses métodos.)
// pensando...
// ...
// ...
//  usar um for para contar as palavras e quando encontrar um espaço vazio, ele conta e verificar se tem mais palavras. Quando não encontrar mais palavras, ele para.
//  Problema: se o usuário colocar mais de um espaço entre as palavras, como o for vai reagir? Imagino que vá parar. Solução? Penso depois!

function countingWords2(str) {
    let count = 0;
    let findWord = false;

    for(let i=0; i< str.length; i++)
        if(str[i]!== ' ' && !findWord){
            findWord=true;
            count++;            
        }
        else if(str[i]== ' '){
            findWord=false;
        }

    return count;
}

console.log(countingWords2("Esse foi mais complicado."));
// Solução: eu estava com pressa e apenar passei para o chatGpt como a lógica iria funcionar. Em seguida fiz do meu modo com algumas correções dele. 
//  Não entendi o porque mesmo colocando espaços vazios entre as palavras ele continua procurando até verificar se tem mais.