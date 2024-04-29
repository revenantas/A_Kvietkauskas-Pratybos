let arr = [4,6,2,4,8,1,1,5,76];
let skaicius = 5;
let kartojasi = 0;

for (let i = 0; i < arr.length; i++){
    if (arr[i] === skaicius){
        kartojasi++;
    }
}

console.log(kartojasi);