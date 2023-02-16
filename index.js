let score = 0;

let wackamoleParent = document.getElementById('whack-a-mole');
let holes = document.getElementsByClassName('hole');

setInterval(() => {
    for (let index = 0; index < holes.length; index++) {
        const element = holes[index];
        
    }
}, 5000)

function getRandomHole() { 
    return Math.floor(Math.random() * (9 - 1 + 1) + 1)
}