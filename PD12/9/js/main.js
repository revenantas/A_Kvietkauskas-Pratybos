let buses = [
  { time: [1, 50], passengers: 17 },
  { time: [2, 0], passengers: 25 },
];

let totalPassengers = 0;
for (let bus of buses) {
  totalPassengers += bus.passengers;
}

let averageTime = 0;
for (let bus of buses) {
  let [hours, minutes] = bus.time;
  let totalMinutes = hours * 60 + minutes;
  averageTime += totalMinutes;
}

let lessThanTenPassengers = 0;
for (let bus of buses) {
  if (bus.passengers < 10) {
    lessThanTenPassengers++;
  }
}

console.log(`Bendrai pervežtų keleivių skaičius = ${totalPassengers} || Vidutinis sugaištas važiavimo laikas (min.): ${averageTime} || Autobusų
skaičius (keleiviai < 10): 0. ${lessThanTenPassengers}`);




