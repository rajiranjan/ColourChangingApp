
let colors = ["Red", "Blue", "Pink", "Purple", "Green", "Yellow", "Orange", "Gray"];

// color changing
let button = document.getElementById('button');

button.addEventListener('click', function(){
    // select a random number between 0-6
    let color = parseInt((Math.random()*colors.length)+1);
    // take action for canva
    let canvas = document.getElementById("canvas");

    canvas.style.background = `${colors[color]}`
})