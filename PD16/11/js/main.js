let arr = ['a', 'aaa', 'aaaaa'];


function longest() {
    return arr.sort(function (a, b) {
        return b.length - a.length;
    })[0];
}
 
console.log(longest());