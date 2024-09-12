
// ex8 euromilhões

// const total = 5, minTotal = 1, maxTotal = 60;
// const numTotal= []; // números guardados no array para verificação
// const stars = 2, minStars = 1, maxStars = 12
// const numStars= [];

// function randomNumber(number, min, max, arrayNumber){
//    while (arrayNumber.length < number){
//     // isso abaixo ainda me deixa confuso
//     const listNumber = Math.floor(Math.random() * (max - min + 1)) + min;
//     //  ! se o array ainda não contém o número adicionado, então push(adicione o próximo(loop))
//     if (!arrayNumber.includes(listNumber)){
//         arrayNumber.push(listNumber);
//     }
//  }
// }

// randomNumber(total, minTotal, maxTotal, numTotal);
// randomNumber(stars, minStars, maxStars, numStars);

// console.log("Números: " + numTotal.join(','));
// console.log("Estrelas: " + numStars.join(','));

//  Esse foi meio confuso para mim, sendo bem sincero. Recorri ao chatGpt, porém para entender o código e não somente para fazer para mim. 
//  Após terminar os outros exercícios vou pensar em melhorias e outras formas de resolução para esse.

let numbers = [];
while(numbers.length < 5){
    let numbersRandom = Math.floor(Math.random() * 50) + 1;
    if(!numbers.includes(numbersRandom)){
        numbers.push(numbersRandom);
    }
}

numbers.sort((a, b) => a - b);


let stars = [];
while(stars.length < 2){
    let stars = Math.floor(Math.random() * 12) + 1;
    if(!stars.includes(stars)){
        stars.push(stars);
    }
}

stars.sort((a, b) => a - b);

let key = 'Números do euro: ' + numbers + '-' +  estrelas;
console.log(key);