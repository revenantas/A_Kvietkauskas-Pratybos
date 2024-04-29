let puodeliai = 7;
let dezes = 0;

for (let i = 0; i < 7; i++) {
    if (puodeliai >= 3) {
        dezes += 1;
        puodeliai -= 3;
    }
}

console.log(`Pilnų dėžučių skaičius: ${dezes}. Nesupakuotų puodelių skaičius: ${puodeliai}.`);
