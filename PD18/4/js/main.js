const zmogus ={
    name: "Rokas" , 
    age: 16
}

function print(obj) {
    for(const info in obj){
        console.log(info, obj[info]);
    }
}

print(zmogus)