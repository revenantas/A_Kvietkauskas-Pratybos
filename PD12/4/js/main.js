const metraiPerS = 1000 / 3600;
let tunelioIlgis = 264;   
let automobilioGreitis = 60; 
let mps = 0;

while (automobilioGreitis > 0) {
    mps += metraiPerS;
    automobilioGreitis--;
}

let laikasPersikelti = tunelioIlgis / mps;

console.log(Math.round(laikasPersikelti * 100) / 100);