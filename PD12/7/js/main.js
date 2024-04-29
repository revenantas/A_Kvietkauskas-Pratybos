let runners = [22, 20, 25, 25];
let ans = 0;
let first = runners[0];

for(let i = 1; i < runners.length; i++){
    if (runners[i] < first) {
        first = runners[i];
    }
}

for (let i = 0; i < runners.length; i++) {
  ans += runners[i];
}
let average = ans / runners.length;
let difference = average - first;

console.log(`Greičiausio bėgiko laikas: ${first} Jis buvo: ${difference} sek geresnis už vidurkį.`);