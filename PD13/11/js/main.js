// s = vienam asmeniui per menesi gauna (minimum)
// k = lieka paskolai moketi
// n = sudaro asmeniu
// t = atlyginimas
// m = atlyginimas

const min = 750;
const paskola = 350;
const seima = 2;
const tevas = 1350;
const mama = 900;
const bendras = (tevas + mama) / seima;

if (bendras >= min && min * seima >= paskola) {
    console.log("Bankas suteiks paskolą");
} else {
    console.log("Bankas nesuteiks paskolos");
}