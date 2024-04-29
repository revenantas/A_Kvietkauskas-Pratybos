function palindromas(numbers) {

    let tempWord = numbers.split(""); 
    let temp = tempWord.reverse();
    let result = temp.join("");

    return result;

};


console.log(palindromas('AoA'));
