const a = 120;
let numberFactors = [];
let evenFactors = [];
let sum = 0;
let sumOfEvens = 0;

for(let i = 1; i <= a; i++){
    if(a % i === 0){
        numberFactors.push(i);
    }
}

for (let j = 0; j < numberFactors.length; j++ ) {
    sum += numberFactors[j];
}

for(let k = 1; k <= a; k++){
    if (a % k === 0 && k % 2 === 0){
        evenFactors.push(k);
    }
}

for (let l = 0; l < evenFactors.length; l++ ) {
    sumOfEvens += evenFactors[l];
}

console.log(`Visi dalikliai: ${numberFactors}`);
console.log(`Daliklių suma: ${sum}`);
console.log(`Lyginių daliklių suma: ${sumOfEvens}`);