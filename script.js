
// Upgrades
var basket = false

// Random function
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}


// Gather Functions
function gatherSticks(vSticks) {
    var element = document.getElementById('nSticks');
    var vSticks = element.innerHTML;

    // Increases stick value
    ++vSticks;
    if (basket == true) {
        console.log('yo');
    }

    console.log('Sticks: ' + vSticks);
    document.getElementById('nSticks').innerHTML = vSticks;
    
}

function gatherStone(vStones) {
    var element = document.getElementById('nStones');
    var vStones = element.innerHTML;

    // Increases stone value
    ++vStones;

    console.log('Stones: ' + vStones);
    document.getElementById('nStones').innerHTML = vStones;
    
}