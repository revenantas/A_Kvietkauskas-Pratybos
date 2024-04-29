let sWidth = 4 * 100;   
let sHeight = 3 * 100; 
let pWidth = 20;    
let pHeight = 10;   
let bricks = 0;

for (let i = 0; i < sWidth; i += pWidth) {
  for (let j = 0; j < sHeight; j += pHeight) {
    bricks++;
  }
}

let price = bricks * 0.5;

console.log(`Plytų kiekis ${bricks}. Plytos kainuos ${price} Eur.`)
