let arr = [2, 2, 2];
let pliusas = 0;
let daugyba = 1;

for (let i = 0; i < arr.length; i++){
    pliusas += arr[i];
}

for (let i = 0; i < arr.length; i++){
    daugyba *= arr[i];
}

console.log(pliusas);
console.log(daugyba);