let mix = [1,2,3];

for (let i = mix.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [mix[i], mix[j]] = [mix[j], mix[i]];

}

console.log(mix);