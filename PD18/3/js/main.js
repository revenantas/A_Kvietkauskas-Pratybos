const bookOne ={
    author: "Orwell",
    name : "1984",
    pages : 200
}

const bookTwo ={
    author: "Jonas Biliunas",
    name : "Vagis",
    pages : 2
}

function print(obj) {
    console.log(obj.author);
    console.log(obj.name);
    console.log(obj.pages);
};

print(bookOne)
print(bookTwo)
