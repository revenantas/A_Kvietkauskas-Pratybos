let normal = "JavaScript for all";
let lifo = [];


for(let i = 0; i < normal.length; i++) {
    lifo.push(normal[i]);
}

let reverse = '';
while (lifo.length > 0) {
    reverse += lifo.pop();
}

console.log(reverse);

