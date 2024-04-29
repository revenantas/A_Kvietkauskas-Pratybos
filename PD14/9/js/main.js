let amebos = 1;
let val = 0; 

for (let i = 0; i < 24; i++){
    if (val % 3 == 0){
    amebos *= 2;
    console.log(amebos);
    }
    val++;
}