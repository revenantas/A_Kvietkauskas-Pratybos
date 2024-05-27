const workers =[
    {
        vardas: 'Erikas',
        pavarde: 'Kuznecovas',
        atlyginimas: 1500
    },

    {
        vardas: 'Paulius',
        pavarde: 'Valaitis',
        atlyginimas: 1000
    }
]

function count(obj, min){
    let arr = [];
    for(let i = 0; i < workers.length; i++){
        if(obj[i].atlyginimas > min){
            arr.push(obj[i]);
            console.log(arr)
        }
    }
}


count(workers, 1000);