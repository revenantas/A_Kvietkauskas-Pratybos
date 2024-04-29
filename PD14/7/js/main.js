let m1 = 1997;
let m2 = 2018;

for(let m = m1; m <= m2; m++){
    if ((m % 4 == 0 && m % 100 != 0) || m % 400 == 0) {
        console.log(m);
    }
}

