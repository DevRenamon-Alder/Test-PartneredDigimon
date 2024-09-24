// Sets variables relating to relevant html elements (popups and clickables)
let backdrop = document.getElementById('page-content');

let popup1 = document.getElementById('popup1');
let clicker1 = document.getElementById('digimon-1');

let popup2 = document.getElementById('popup2');
let clicker2 = document.getElementById('digimon-2');

let popup3 = document.getElementById('popup3');
let clicker3 = document.getElementById('digimon-3');

let popup4 = document.getElementById('popup4');
let clicker4 = document.getElementById('digimon-4');

let popup5 = document.getElementById('popup5');
let clicker5 = document.getElementById('digimon-5');

let popup6 = document.getElementById('popup6');
let clicker6 = document.getElementById('digimon-6');
// Adds string variables for specific digimon names
let digimon1 = 'Pulsemon';
let digimon2 = 'Numemon';
let digimon3 = 'Terriermon';
let digimon4 = 'Terriermon';
let digimon5 = 'Lopmon';
let digimon6 = '';

// Sets the displayed names of the digimon to the relative string variables
document.getElementById('digimon1').innerHTML = digimon1;
document.getElementById('digimon2').innerHTML = digimon2;
document.getElementById('digimon3').innerHTML = digimon3;
document.getElementById('digimon4').innerHTML = digimon4;
document.getElementById('digimon5').innerHTML = digimon5;
document.getElementById('digimon6').innerHTML = digimon6;

// Intended to hide the popups
let hide1 = () => {
  popup1.style.display = 'none'
  document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)"
};
let hide2 = () => {
  popup2.style.display = 'none'
  document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
};
let hide3 = () => {
  popup3.style.display = 'none'
  document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)";
};
let hide4 = () => {
  popup4.style.display = 'none'
  document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)";
};
let hide5 = () => {
  popup5.style.display = 'none'
  document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)";
};
let hide6 = () => {
  popup6.style.display = 'none'
  document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)";
};
let hideAll = () => {
  hide1();
  hide2();
  hide3();
  hide4();
  hide5();
  hide6();
}
hideAll();

// Intended to show the popups
let show1 = () => {
  popup1.style.display = 'inline-grid';
  document.getElementsByClassName('digi-border-1')[0].style.borderColor = "#ff8b26"
};
let show2 = () => {
  popup2.style.display = 'inline-grid';
  document.getElementsByClassName('digi-border-2')[0].style.borderColor = "#ff8b26";
};
let show3 = () => {
  popup3.style.display = 'inline-grid';
  document.getElementsByClassName('digi-border-3')[0].style.borderColor = "#ff8b26";
};
let show4 = () => {
  popup4.style.display = 'inline-grid';
  document.getElementsByClassName('digi-border-4')[0].style.borderColor = "#ff8b26";
};
let show5 = () => {
  popup5.style.display = 'inline-grid';
  document.getElementsByClassName('digi-border-5')[0].style.borderColor = "#ff8b26";
};
let show6 = () => {
  popup6.style.display = 'inline-grid';
  document.getElementsByClassName('digi-border-6')[0].style.borderColor = "#ff8b26"; 
};

// Intended to reveal the popup after clicking digimon-1
clicker1.addEventListener('click', function() { 
  if (digimon1 === false) {
    hide1();
  } else if (popup1.style.display === 'inline-grid') {
    hide1();
  } else if (popup1.style.display === 'none') {
    show1();

    hide2();
    hide3();
    hide4();
    hide5();
    hide6();
  }
})
clicker2.addEventListener('click', function() {
  if (digimon2 === false) {
    hide2();
  } else if (popup2.style.display === 'inline-grid') {
    hide2();
  } else if (popup2.style.display === 'none') {
    show2();

    hide1();
    hide3();
    hide4();
    hide5();
    hide6();
  }
})
clicker3.addEventListener('click', function() {
  if (digimon3 === false) {
    hide3();
  } else if (popup3.style.display === 'inline-grid') {
    hide3();
  } else if (popup3.style.display === 'none') {
    show3();

    hide1();
    hide2();
    hide4();
    hide5();
    hide6();
  }
})
clicker4.addEventListener('click', function() {
  if (digimon4 === false) {
    hide4();
  } else if (popup4.style.display === 'inline-grid') {
    hide4();
  } else if (popup4.style.display === 'none') {
    show4();

    hide1();
    hide2();
    hide3();
    hide5();
    hide6();
  }
})
clicker5.addEventListener('click', function() {
  if (digimon5 === false) {
    hide5();
  } else if (popup5.style.display === 'inline-grid') {
    hide5();
  } else if (popup5.style.display === 'none') {
    show5();

    hide1();
    hide2();
    hide3();
    hide4();
    hide6();
  }
})
clicker6.addEventListener('click', function() {
  if (digimon6 === false) {
    hide6();
  } else if (popup6.style.display === 'inline-grid') {
    hide6();
  } else if (popup6.style.display === 'none') {
    show6();

    hide1();
    hide2();
    hide3();
    hide4();
    hide5();
  }
})

// Sets number variables for the randomized favorites
let favFoodN = [];
let favFoodSpfcN = [];
let favToyN = [];
let favToySpfcN = [];

// Sets string variables for the randomized favorites
let favFood = [];
let favFoodSpfc = [];
let favToy = [];
let favToySpfc = [];

// Randomly assigns a number to each array for each digimon
for (let a = 0; a <= 6; a++) {
  let ranFood = Math.floor(Math.random() * 3);
  favFoodN.push(ranFood);
  let ranFoodSpfc = Math.floor(Math.random() * 4);
  favFoodSpfcN.push(ranFoodSpfc);
  let ranToy = Math.floor(Math.random() * 5);
  favToyN.push(ranToy);
  let ranToySpfc = Math.floor(Math.random() * 5);
  favToySpfcN.push(ranToySpfc);
};

// Arrays for favorite options
let foodTypes = ['Burritos', 'Burgers', 'Sandwiches']
let burritos = ['Carnitas Burrito', 'Breakfast Burrito', 'California Burrito', 'Ogden Burrito']
let burgers = ['Cheeseburger', 'BBQ Bacon Burger', 'Swiss Mushroom Burger', 'Steakburger']
let sandwiches = ['Spicy Chicken Sandwich', 'BLT Sandwich', 'Reuben Sandwich', 'Grilled Cheese Sandwich']

// Sets string variables to the appropriate food type and specific food type for each digimon based on the number given
for (let b = 0; b <= 6; b++) {
  if (favFoodN[b] === 0) {
    favFood.push(foodTypes[0]);
    if (favFoodSpfcN[b] === 0) {
      favFoodSpfc.push(burritos[0])
    } else if (favFoodSpfcN[b] === 1) {
      favFoodSpfc.push(burritos[1])
    } else if (favFoodSpfcN[b] === 2) {
      favFoodSpfc.push(burritos[2])
    } else if (favFoodSpfcN[b] === 3) {
      favFoodSpfc.push(burritos[3])
    }
  }
  if (favFoodN[b] === 1) {
    favFood.push(foodTypes[1]);
    if (favFoodSpfcN[b] === 0) {
      favFoodSpfc.push(burgers[0])
    } else if (favFoodSpfcN[b] === 1) {
      favFoodSpfc.push(burgers[1])
    } else if (favFoodSpfcN[b] === 2) {
      favFoodSpfc.push(burgers[2])
    } else if (favFoodSpfcN[b] === 3) {
      favFoodSpfc.push(burgers[3])
    }
  }
  if (favFoodN[b] === 2) {
    favFood.push(foodTypes[2]);
    if (favFoodSpfcN[b] === 0) {
      favFoodSpfc.push(sandwiches[0])
    } else if (favFoodSpfcN[b] === 1) {
      favFoodSpfc.push(sandwiches[1])
    } else if (favFoodSpfcN[b] === 2) {
      favFoodSpfc.push(sandwiches[2])
    } else if (favFoodSpfcN[b] === 3) {
      favFoodSpfc.push(sandwiches[3])
    }
  }
}

let toyTypes = ['Video Games', 'Board Games', 'Movies', 'Books', 'Standard Toys']
let videoGames = ['Tetanus', 'Strategy Nations II', 'Deity Battle Quest RPG', 'Flight Simulator', 'Fighting Flaming Fists of Fury VIII']
let boardGames = ['Chess', 'Chess 2.0', 'Space Murder Mystery', 'Cable Cutters Bomb Squadron', 'Illuminati: Through the Weeds']
let movies = ['War in the Outback II', 'The Noun', 'Freaky Incomprehensible Alien Friend', 'The Nightmare Boss from Six Feet Under', 'White Whale']
let books = ['Grapes of Wrath', 'Moby Dick', 'The Iliad', 'The Great Gatsby', 'Dr. Jekyll & Mr. Hyde']
let objectToys = ['Commander Police Action Figure', 'Remote Control Monster Truck', 'Catgirl Kim Anime Figurine', 'Miss Woman Thing Girlpower Doll', 'Therapeutic Sheep Pillow']

// Assigns randomized favorites
for (let N = 0; N <= 6; N++) {
  if (favToyN[N] === 0) {
    favToy.push(toyTypes[0])
    if (favToySpfcN[N] === 0) {
      favToySpfc.push(videoGames[0])
    } else if (favToySpfcN[N] === 1) {
      favToySpfc.push(videoGames[1])
    } else if (favToySpfcN[N] === 2) {
      favToySpfc.push(videoGames[2])
    } else if (favToySpfcN[N] === 3) {
      favToySpfc.push(videoGames[3])
    } else if (favToySpfcN[N] === 4) {
      favToySpfc.push(videoGames[4])
    }
  }
  if (favToyN[N] === 1) {
    favToy.push(toyTypes[1])
    if (favToySpfcN[N] === 0) {
      favToySpfc.push(boardGames[0])
    } else if (favToySpfcN[N] === 1) {
      favToySpfc.push(boardGames[1])
    } else if (favToySpfcN[N] === 2) {
      favToySpfc.push(boardGames[2])
    } else if (favToySpfcN[N] === 3) {
      favToySpfc.push(boardGames[3])
    } else if (favToySpfcN[N] === 4) {
      favToySpfc.push(boardGames[4])
    }
  }
  if (favToyN[N] === 2) {
    favToy.push(toyTypes[2])
    if (favToySpfcN[N] === 0) {
      favToySpfc.push(movies[0])
    } else if (favToySpfcN[N] === 1) {
      favToySpfc.push(movies[1])
    } else if (favToySpfcN[N] === 2) {
      favToySpfc.push(movies[2])
    } else if (favToySpfcN[N] === 3) {
      favToySpfc.push(movies[3])
    } else if (favToySpfcN[N] === 4) {
      favToySpfc.push(movies[4])
    }
  }
  if (favToyN[N] === 3) {
    favToy.push(toyTypes[3])
    if (favToySpfcN[N] === 0) {
      favToySpfc.push(books[0])
    } else if (favToySpfcN[N] === 1) {
      favToySpfc.push(books[1])
    } else if (favToySpfcN[N] === 2) {
      favToySpfc.push(books[2])
    } else if (favToySpfcN[N] === 3) {
      favToySpfc.push(books[3])
    } else if (favToySpfcN[N] === 4) {
      favToySpfc.push(books[4])
    }
  }
  if (favToyN[N] === 4) {
    favToy.push(toyTypes[4])
    if (favToySpfcN[N] === 0) {
      favToySpfc.push(objectToys[0])
    } else if (favToySpfcN[N] === 1) {
      favToySpfc.push(objectToys[1])
    } else if (favToySpfcN[N] === 2) {
      favToySpfc.push(objectToys[2])
    } else if (favToySpfcN[N] === 3) {
      favToySpfc.push(objectToys[3])
    } else if (favToySpfcN[N] === 4) {
      favToySpfc.push(objectToys[4])
    }
  }
}

// Adds the randomized favorites to the popup's text
document.getElementById('favToySpfc1').innerHTML = favToySpfc[0];
document.getElementById('favToy1').innerHTML = favToy[0];
document.getElementById('favoriteFood1').innerHTML = favoriteFood1;

document.getElementById('favToySpfc2').innerHTML = favToySpfc[1];
document.getElementById('favToy2').innerHTML = favToy[1];
document.getElementById('favoriteFood2').innerHTML = favoriteFood2;

document.getElementById('favToySpfc3').innerHTML = favToySpfc[2];
document.getElementById('favToy3').innerHTML = favToy[2];
document.getElementById('favoriteFood3').innerHTML = favoriteFood3;

document.getElementById('favToySpfc4').innerHTML = favToySpfc[3];
document.getElementById('favToy4').innerHTML = favToy[3];
document.getElementById('favoriteFood4').innerHTML = favoriteFood4;

document.getElementById('favToySpfc5').innerHTML = favToySpfc[4];
document.getElementById('favToy5').innerHTML = favToy[4];
document.getElementById('favoriteFood5').innerHTML = favoriteFood5;

document.getElementById('favToySpfc6').innerHTML = favToySpfc[5];
document.getElementById('favToy6').innerHTML = favToy[4];
document.getElementById('favoriteFood6').innerHTML = favoriteFood6;