const objektas ={
    numeris : 1,
    zodis: 'one'
}

function change(obj, savybe, a){
    const clone = {
        ...obj
    }
    clone[savybe] = a

    console.log(clone)
    console.log(obj)
}

change(objektas, "numeris", 0)