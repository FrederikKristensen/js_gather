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

// Variables - Upgrades
var basket = false;

// Crafting
function craftBasket() {
    basket = true;
}

// Resourse values
let vSticks = 0;
let vStones = 0

// Gathering
async function gatherSticks() {
    // Increases stick value
    if (basket == true) {
        vSticks = parseInt(vSticks) + randomInt(8,11);
    } else {
        vSticks = parseInt(vSticks) + randomInt(3,6) ;
    }

    // console.log('Sticks: ' + vSticks);
    document.getElementById('nSticks').innerHTML = "Sticks: " + String(vSticks);

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

async function gatherStones() {
    // Increases stone value
    if (basket == true) {
        vStones = parseInt(vStones) + randomInt(2,5);
    } else {
        vStones = parseInt(vStones) + randomInt(4,9);
    }

    // console.log('Stones: ' + vStones);
    document.getElementById('nStones').innerHTML = "Stones: " + vStones;
    
    // Cooldown on the button
    const button = document.getElementById("gatherStones");
    button.disabled = true;
  
    await new Promise(res => {
      setTimeout(() => {
        res();
      }, 2000);
    });
    
    button.disabled = false;
}

function move() {
    var elem = document.getElementById("myBar");
    var width = 0;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
      } else {
        width++;
        elem.style.width = width + '%';
      }
      
      if (width >= 100) {
        elem.style.width = '0%'; 
      }

    }
  }