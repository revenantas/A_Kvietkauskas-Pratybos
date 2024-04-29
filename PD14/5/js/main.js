let atlyginimas = [824.25, 1225.12, 459.16, 1500];
let atlpo = [];


for (let i = 0; i < atlyginimas.length; i++) {
  if (atlyginimas[i] < 1000) {
    atlpo.push(atlyginimas[i] + atlyginimas[i] * 0.10);
  } else {
    atlpo.push(atlyginimas[i] + atlyginimas[i] * 0.05);
  }
}
    atlFinal = atlpo.map(function(each_element){
        return Number(each_element.toFixed(2));
    });

console.log(`Atlyginimas iki: ${atlyginimas}.`);
console.log(`Atlyginimas po: ${atlpo}.`);