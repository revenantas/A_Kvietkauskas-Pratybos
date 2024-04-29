let a = 231;
let b = 421;
let c = 124;
let sum;

if (a >= b && a >= c) {
    if (b >= c) {
        sum = a + +b;
        console.log(`Didžiausia suma yra ${sum}, sudaryta iš a ir b`)
    } else {
        sum = a + +c;
        console.log(`Didžiausia suma yra ${sum}, sudaryta iš a ir c`)
    }
} else if (b >= a && b >= c) {
    if (a >= c) {
        sum = b + +a;
        console.log(`Didžiausia suma yra ${sum}, sudaryta iš b ir a`)
    } else {
        sum = b + +c;
        console.log(`Didžiausia suma yra ${sum}, sudaryta iš b ir c`)
    }
} else {
    if (a >= b) {
        sum = c + +a;
        console.log(`Didžiausia suma yra ${sum}, sudaryta iš c ir a`)
    } else {
        sum = c + +b;
        console.log(`Didžiausia suma yra ${sum}, sudaryta iš c ir b`)
    }
}