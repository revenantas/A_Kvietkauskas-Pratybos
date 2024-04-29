let a = 96;
let b = 103;
let k = 0; 

for (let i = a; i < 100; i++){
    k++;
    for(let y = b; y >= 100; y--){
        k++;
    }
}

console.log(`k=${k}`);