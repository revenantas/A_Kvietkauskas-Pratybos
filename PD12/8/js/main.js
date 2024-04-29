let consumption = 11;
let days = 0;

for (let fuel = 112; fuel > 0; fuel -= 22) {
    if (days % 2 !== 0) {
        fuel -= 11;
        days++;
    }
    days++;
}

console.log(`Keliauti bus galima ${days} dienas.`);