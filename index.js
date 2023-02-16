let score = 0;

let wackamoleParent = document.getElementById('whack-a-mole');
let holes = document.getElementsByClassName('hole');
let scoreText = document.getElementById('score');

setInterval(() => {

    // Keeps track of if a mole was clicked each round
    let clicked = false;
    
    // Creates up to 3 moles
    for (let index = 0; index < 3; index++) {

        // Grab a random index / item in the holes array
        const randomHoleIndex = Math.floor(Math.random() * holes.length);
        const hole = holes[randomHoleIndex];

        // Prevent adding multiple event listeners to the same item
        // So if it already is a mole, skip the rest of the code
        if (hole.classList.contains('mole')) return;
        
        // Make mole appear and wait for click event
        hole.classList.add('mole');
        hole.addEventListener('click', setScore);

        // After 1000 seconds...
        setTimeout(() => {
            // Make it no longer clickable / remove the event listener set up there ^
            hole.removeEventListener('click', setScore);
            // Hide the mole image
            hole.classList.remove('mole');

            // if no mole was clicked that round
            if (!clicked) {
                // reset the score to 0
                score=0;
                // and update theinner html
                scoreText.innerHTML = score;
            }
        }, 500);

        // ran every time a mole is clicked
        function setScore() {
            score++; // add 1 to score
            clicked = true; // set that a mole was clicked
            scoreText.innerHTML = score; // update score text
        }
    }
}, 2000);