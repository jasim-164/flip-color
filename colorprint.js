// let colors=["black","white","red","green","yellow","blue"]
// console.log(colors[0]);
let colors=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"]

// const btn = document.getElementById("flipp");

flipp.addEventListener('click', function(){
    var hexcolor="#";
    for(let i=0; i<6; i++) {
        hexcolor += colors[primeNumber()];
    }
    document.body.style.backgroundColor=hexcolor;

})

console.log(color);

function primeNumber() {
    return (Math.floor(Math.random()*colors.length));

}