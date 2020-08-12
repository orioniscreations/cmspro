// (function () {

//     var sprite = document.querySelector('.sprite'),
//         key = { left: false, right: false },
//         trans = 0,
//         property = getTransformProperty(sprite);

//     function getTransformProperty(element) {
//         var properties = [
//             'transform',
//             'WebkitTransform',
//             'msTransform',
//             'MozTransform',
//             'OTransform'
//         ];
//         var p;
//         while (p = properties.shift()) {
//             if (typeof element.style[p] != 'undefined') {
//                 return p;
//             }
//         }
//         return false;
//     }

//     function translate() {
//         sprite.style[property] = 'translateX(' + trans + 'px)';
//     }

//     function walk(e) {
//         var keyCode = e.keyCode;
//         if (keyCode === 39) {
//             key.right = true;
//         } else if (keyCode === 37) {
//             key.left = true;
//         }
//         if (key.right === true) {
//             trans += 10;
//             translate();
//             sprite.classList.remove('left');
//             sprite.classList.add('right');
//             sprite.classList.add('walk-right');
//         } else if (key.left === true) {
//             trans -= 10;
//             translate();
//             sprite.classList.remove('right');
//             sprite.classList.add('left');
//             sprite.classList.add('walk-left');
//         }
//     }

//     function stop(e) {
//         var keyCode = e.keyCode;
//         if (keyCode === 39) {
//             key.right = false;
//         } else if (keyCode === 37) {
//             key.left = false;
//         }
//         if (key.right === false) {
//             sprite.classList.remove('walk-right');
//         } if (key.left === false) {
//             sprite.classList.remove('walk-left');
//         }
//     }

//     document.addEventListener('keydown', walk, false);
//     document.addEventListener('keyup', stop, false);


// })();

//GAME:

//starting values 

const IMAGES = {
    default: "bulbaGif.gif",
    happy: "bulbaHappy.gif",
    sad: "bulbaSad.gif",
    sleepy: "bulbaSleepy.gif"
}


var game = new Vue({
    el: "#bodyCont",
    data: {
        play: 1000,
        health: 1000,
        food: 2000,
        grooming: 3000,
        happiness: 100,
        sleepy: 0,
        currentImage: IMAGES.default
    },


})

// // ********************************

function lessPlay() {
    var minusPlay = 300;
    var timer = null

    if (game.play === -1) { return; }
    //   testing
    // console.log("play: " + game.play);

    setTimeout(lessPlay, minusPlay);

    minusPlay -= 100;
    game.play--;
};

lessPlay();

function lessFood() {
    var minusFood = 1000;
    var timer = null;

    if (game.food === -1) { return; }
    //   testing
    // console.log("food: " + game.food);

    setTimeout(lessFood, minusFood);

    minusFood -= 100;
    game.food--;
};

lessFood();

function lessGrooming() {
    var minusGroom = 3000
    var timer = null;

    if (game.grooming === -1) { return; }
    //testing
    // console.log("grooming: " + game.grooming);

    setTimeout(lessGrooming, minusGroom);


    minusGroom -= 5000;
    game.grooming--;
};

lessGrooming();

function lessHealth() {
    var minusHealth = 300
    var timer = null;

    if (game.health === -1) { return; }


    setTimeout(lessHealth, minusHealth);


    minusHealth -= 10;
    game.health--;
}

function highHealth() {

    if (game.play >= 1000 && game.food >= 2000 && game.grooming >= 3000) {
        game.currentImage = IMAGES.happy;
    } else if
        (game.play <= 300 && game.play >= 2 || game.food <= 500 && game.food >= 2 || game.grooming <= 750 && game.grooming <= 2) {
        game.currentImage = IMAGES.sad;
        lessHealth();
    } else if
        (game.play <= 1 || game.food <= 1 || game.grooming <= 1) {
        game.currentImage = IMAGES.sleepy;
        sleepyTime();
    } else { game.currentImage = IMAGES.default }

    setTimeout(highHealth, 500)
}

highHealth();

function sleepyTime() {
    if (game.play <= 1 || game.food <= 1 || game.grooming <= 1) {

    }
}

// function lessHealth() {
//     if (game.play <= 300 || game.food <= 500 || game.grooming <= 750) {
//         var minusHealth = 5000;
//         var timer = null;

//         if (game.health === -1) { return; }


//         setTimeout(lessHealth, minusHealth);

//         minusHealth -= 100;
//         game.health--;
//     }

// }

// lessHealth();

// // ********************************

function morePlay() {
    game.play += 100
    console.log("play: " + game.play);
}

function moreHealth() {
    game.health += 1000
    console.log("health: " + game.health);

    if (game.play === 300 || game.food === 300 || game.grooming === 300) {
        game.happiness--;
    } return game.happiness;
}

function moreFood() {
    game.food += 1000
    console.log("food: " + game.food);
}

function moreGrooming() {
    game.grooming += 1000
    console.log("groom: " + game.grooming);
}

