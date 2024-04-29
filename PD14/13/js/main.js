for (let i = 1; i <= 300; i++) {    
    let daliklis = 0;

    for (let y = 1; y <= i; y++) {
        if (i % y === 0) {
            daliklis++;
        }
    }

    if (daliklis === 5) {
        console.log(i);
    }
}
