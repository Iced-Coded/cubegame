var cube = document.getElementById("cube");

function roll() {
    var rollsum = Math.floor(Math.random() * 7);
    if (rollsum == 1) {
        cube.src = "img/1.png"
    }
    if (rollsum == 2) {
        cube.src = "img/2.png"
    }
    if (rollsum == 3) {
        cube.src = "img/3.png"
    }
    if (rollsum == 4) {
        cube.src = "img/4.png"
    }
    if (rollsum == 5) {
        cube.src = "img/5.png"
    }
    if (rollsum == 6) {
        cube.src = "img/6.png"
    }
}