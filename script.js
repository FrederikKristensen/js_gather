// Random 
function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Dark mode 
function darkmode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}

// Clock 
function startClock() {
    const today = new Date();
    // Getting the timers
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    
    // Changing in html
    document.getElementById('clock').innerHTML = h + ":" + m + ":" + s;
    setTimeout(startClock, 1000);
}

// Puts a 0 infront of the number in clock if needed
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

// Cooldown on buttons              WIP 
document.getElementById('cooldown')

// Variables
var basket = false;

// Crafting
function craftBasket() {
    basket = true;
}

// Gathering
async function gatherSticks(vSticks) {
    var element = document.getElementById('nSticks');
    var vSticks = element.innerHTML;

    // Increases stick value
    ++vSticks;
    if (basket == true) {
        console.log('yo');
    }

    console.log('Sticks: ' + vSticks);
    document.getElementById('nSticks').innerHTML = vSticks;
    
    // Cooldown on the button
    const button = document.getElementById("gatherSticks");
    button.disabled = true;
  
    await new Promise(res => {
      setTimeout(() => {
        res();
      }, 2000);
    });
    
    button.disabled = false;
  
}

function gatherStone(vStones) {
    var element = document.getElementById('nStones');
    var vStones = element.innerHTML;

    // Increases stone value
    ++vStones;

    console.log('Stones: ' + vStones);
    document.getElementById('nStones').innerHTML = vStones;
    
}

