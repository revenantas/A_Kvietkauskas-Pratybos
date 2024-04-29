const number = 12;
const digits = [...number.toString()];

if (digits[0] > digits[1]) {
    console.log("pirmas skaicius didesnis");
} else if (digits[0] < digits[1]) {
    console.log("antras skaicius didesnis");
} else {
    console.log("jie lygus");
}