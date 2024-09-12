// Ex9 longest word

function longestWord(str){
    let words= str.split(' '); // transforma em um array separando por um espaço em branco
    let longest= words[0];
    for (let i = 1; i < words.length; i++){
        if (words[i].length > longest.length){
            longest= words[i];
        }
    }

    return `${longest} - ${words.length}`;
}

console.log(longestWord("Esse exercício foi menos difícil que o anterior"));

// claramente preciso fazer uma melhoria para exibir todas as palavras com a mesma quantidade de caracteres e não somente a primeira. 

// verificar se tem palavras com o mesmo número de caracteres e exibir ambas

