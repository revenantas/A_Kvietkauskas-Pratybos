function erase() {
    const myList = document.getElementById('list');
    myList.removeChild(myList.getElementsByTagName('li')[0]);
}