
let arr = 'AAAbbb'; 
let reverse = '';

for(let i = 0; i < arr.length; i++) {
    if(arr[i] === arr[i].toUpperCase()){
        reverse += arr[i].toLowerCase();
    } else if (arr[i] === arr[i].toLowerCase()){
        reverse += arr[i].toUpperCase();
    }
}

console.log(reverse);