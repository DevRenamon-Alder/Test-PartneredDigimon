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
// Sets string variables for the randomized favorites
let favoriteFood1 = '';
let favoriteToy1 = '';
let favToySpfc1 = '';

let favoriteFood2 = '';
let favoriteToy2 = '';
let favToySpfc2 = '';

let favoriteFood3 = '';
let favoriteToy3 = '';
let favToySpfc3 = '';

let favoriteFood4 = '';
let favoriteToy4 = '';
let favToySpfc4 = '';

let favoriteFood5 = '';
let favoriteToy5 = '';
let favToySpfc5 = '';

let favoriteFood6 = '';
let favoriteToy6 = '';
let favToySpfc6 = '';
// Randomizes a number to determine randomized favorites
let ranFoodNum1 = Math.floor(Math.random() * 10);
let ranToyNum1 = Math.floor(Math.random() * 5);
let ranToySpfc1 = Math.floor(Math.random() * 5);

let ranFoodNum2 = Math.floor(Math.random() * 10);
let ranToyNum2 = Math.floor(Math.random() * 5);
let ranToySpfc2 = Math.floor(Math.random() * 5);

let ranFoodNum3 = Math.floor(Math.random() * 10);
let ranToyNum3 = Math.floor(Math.random() * 5);
let ranToySpfc3 = Math.floor(Math.random() * 5);

let ranFoodNum4 = Math.floor(Math.random() * 10);
let ranToyNum4 = Math.floor(Math.random() * 5);
let ranToySpfc4 = Math.floor(Math.random() * 5);

let ranFoodNum5 = Math.floor(Math.random() * 10);
let ranToyNum5 = Math.floor(Math.random() * 5);
let ranToySpfc5 = Math.floor(Math.random() * 5);

let ranFoodNum6 = Math.floor(Math.random() * 10);
let ranToyNum6 = Math.floor(Math.random() * 5);
let ranToySpfc6 = Math.floor(Math.random() * 5);

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
popup1.style.display = 'none';
popup2.style.display = 'none';
popup3.style.display = 'none';
popup4.style.display = 'none';
popup5.style.display = 'none';
popup6.style.display = 'none';

// Intended to reveal the popup after clicking digimon-1
clicker1.addEventListener('click', function() { 
  if (digimon1 === false) {
    popup1.style.display = 'none';
  } else if (popup1.style.display === 'inline-grid') {
    popup1.style.display = 'none';
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)"
  } else if (popup1.style.display === 'none') {
    popup1.style.display = 'inline-grid';
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "#ff8b26"
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
    popup2.style.display = 'none';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup3.style.display = 'none';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup4.style.display = 'none';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup5.style.display = 'none';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup6.style.display = 'none';
  }
})
clicker2.addEventListener('click', function() {
  if (digimon2 === false) {
    popup2.style.display = 'none';
  } else if (popup2.style.display === 'inline-grid') {
    popup2.style.display = 'none';
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
  } else if (popup2.style.display === 'none') {
    popup2.style.display = 'inline-grid';
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "#ff8b26";
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup1.style.display = 'none';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup3.style.display = 'none';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup4.style.display = 'none';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup5.style.display = 'none';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup6.style.display = 'none';
  }
})
clicker3.addEventListener('click', function() {
  if (digimon3 === false) {
    popup3.style.display = 'none';
  } else if (popup3.style.display === 'inline-grid') {
    popup3.style.display = 'none';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)"
  } else if (popup3.style.display === 'none') {
    popup3.style.display = 'inline-grid';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "#ff8b26";
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup1.style.display = 'none';
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
    popup2.style.display = 'none';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup4.style.display = 'none';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup5.style.display = 'none';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup6.style.display = 'none';
  }
})
clicker4.addEventListener('click', function() {
  if (digimon4 === false) {
    popup4.style.display = 'none';
  } else if (popup4.style.display === 'inline-grid') {
    popup4.style.display = 'none';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)"
  } else if (popup4.style.display === 'none') {
    popup4.style.display = 'inline-grid';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "#ff8b26";
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup1.style.display = 'none';
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
    popup2.style.display = 'none';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup3.style.display = 'none';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup5.style.display = 'none';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup6.style.display = 'none';
  }
})
clicker5.addEventListener('click', function() {
  if (digimon5 === false) {
    popup5.style.display = 'none';
  } else if (popup5.style.display === 'inline-grid') {
    popup5.style.display = 'none';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)"
  } else if (popup5.style.display === 'none') {
    popup5.style.display = 'inline-grid';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "#ff8b26";
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup1.style.display = 'none';
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
    popup2.style.display = 'none';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup3.style.display = 'none';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup4.style.display = 'none';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup6.style.display = 'none';
  }
})
clicker6.addEventListener('click', function() {
  if (digimon6 === false) {
    popup6.style.display = 'none';
  } else if (popup6.style.display === 'inline-grid') {
    popup6.style.display = 'none';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "hsl(250, 41%, 49%)"
  } else if (popup6.style.display === 'none') {
    popup6.style.display = 'inline-grid';
    document.getElementsByClassName('digi-border-6')[0].style.borderColor = "#ff8b26";
    document.getElementsByClassName('digi-border-1')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup1.style.display = 'none';
    document.getElementsByClassName('digi-border-2')[0].style.borderColor = "hsl(250, 41%, 49%)"
    popup2.style.display = 'none';
    document.getElementsByClassName('digi-border-3')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup3.style.display = 'none';
    document.getElementsByClassName('digi-border-4')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup4.style.display = 'none';
    document.getElementsByClassName('digi-border-5')[0].style.borderColor = "hsl(250, 41%, 49%)";
    popup5.style.display = 'none';
  }
})


// Radomizes a favorite food
if (ranFoodNum1 === 0) {
  favoriteFood1 = 'Carnitas Burrito'
} else if (ranFoodNum1 === 1) {
  favoriteFood1 = 'Cheeseburger'
} else if (ranFoodNum1 === 2) {
  favoriteFood1 = 'Spicy Chicken Sandwich'
} else if (ranFoodNum1 === 3) {
  favoriteFood1 = 'Breakfast Burrito'
} else if (ranFoodNum1 === 4) {
  favoriteFood1 = 'BBQ Bacon Burger'
} else if (ranFoodNum1 === 5) {
  favoriteFood1 = 'BLT Sandwich'
} else if (ranFoodNum1 === 6) {
  favoriteFood1 = 'Reuben Sandwich'
} else if (ranFoodNum1 === 7) {
  favoriteFood1 = 'Grilled Cheese Sandwich'
} else if (ranFoodNum1 === 8) {
  favoriteFood1 = 'Swiss Mushroom Burger'
} else if (ranFoodNum1 === 9) {
  favoriteFood1 = 'Ogden Burrito'
};

if (ranFoodNum2 === 0) {
  favoriteFood2 = 'Carnitas Burrito'
} else if (ranFoodNum2 === 1) {
  favoriteFood2 = 'Cheeseburger'
} else if (ranFoodNum2 === 2) {
  favoriteFood2 = 'Spicy Chicken Sandwich'
} else if (ranFoodNum2 === 3) {
  favoriteFood2 = 'Breakfast Burrito'
} else if (ranFoodNum2 === 4) {
  favoriteFood2 = 'BBQ Bacon Burger'
} else if (ranFoodNum2 === 5) {
  favoriteFood2 = 'BLT Sandwich'
} else if (ranFoodNum2 === 6) {
  favoriteFood2 = 'Reuben Sandwich'
} else if (ranFoodNum2 === 7) {
  favoriteFood2 = 'Grilled Cheese Sandwich'
} else if (ranFoodNum2 === 8) {
  favoriteFood2 = 'Swiss Mushroom Burger'
} else if (ranFoodNum2 === 9) {
  favoriteFood2 = 'Ogden Burrito'
};

if (ranFoodNum3 === 0) {
  favoriteFood3 = 'Carnitas Burrito'
} else if (ranFoodNum3 === 1) {
  favoriteFood3 = 'Cheeseburger'
} else if (ranFoodNum3 === 2) {
  favoriteFood3 = 'Spicy Chicken Sandwich'
} else if (ranFoodNum3 === 3) {
  favoriteFood3 = 'Breakfast Burrito'
} else if (ranFoodNum3 === 4) {
  favoriteFood3 = 'BBQ Bacon Burger'
} else if (ranFoodNum3 === 5) {
  favoriteFood3 = 'BLT Sandwich'
} else if (ranFoodNum3 === 6) {
  favoriteFood3 = 'Reuben Sandwich'
} else if (ranFoodNum3 === 7) {
  favoriteFood3 = 'Grilled Cheese Sandwich'
} else if (ranFoodNum3 === 8) {
  favoriteFood3 = 'Swiss Mushroom Burger'
} else if (ranFoodNum3 === 9) {
  favoriteFood3 = 'Ogden Burrito'
};

if (ranFoodNum4 === 0) {
  favoriteFood4 = 'Carnitas Burrito'
} else if (ranFoodNum4 === 1) {
  favoriteFood4 = 'Cheeseburger'
} else if (ranFoodNum4 === 2) {
  favoriteFood4 = 'Spicy Chicken Sandwich'
} else if (ranFoodNu4 === 3) {
  favoriteFood4 = 'Breakfast Burrito'
} else if (ranFoodNum4 === 4) {
  favoriteFood4 = 'BBQ Bacon Burger'
} else if (ranFoodNum4 === 5) {
  favoriteFood4 = 'BLT Sandwich'
} else if (ranFoodNum4 === 6) {
  favoriteFood4 = 'Reuben Sandwich'
} else if (ranFoodNum4 === 7) {
  favoriteFood4 = 'Grilled Cheese Sandwich'
} else if (ranFoodNum4 === 8) {
  favoriteFood4 = 'Swiss Mushroom Burger'
} else if (ranFoodNum4 === 9) {
  favoriteFood4 = 'Ogden Burrito'
};

if (ranFoodNum5 === 0) {
  favoriteFood5 = 'Carnitas Burrito'
} else if (ranFoodNum5 === 1) {
  favoriteFood5 = 'Cheeseburger'
} else if (ranFoodNum5 === 2) {
  favoriteFood5 = 'Spicy Chicken Sandwich'
} else if (ranFoodNu5 === 3) {
  favoriteFood5 = 'Breakfast Burrito'
} else if (ranFoodNum5 === 4) {
  favoriteFood5 = 'BBQ Bacon Burger'
} else if (ranFoodNum5 === 5) {
  favoriteFood5 = 'BLT Sandwich'
} else if (ranFoodNum5 === 6) {
  favoriteFood5 = 'Reuben Sandwich'
} else if (ranFoodNum5 === 7) {
  favoriteFood5 = 'Grilled Cheese Sandwich'
} else if (ranFoodNum5 === 8) {
  favoriteFood5 = 'Swiss Mushroom Burger'
} else if (ranFoodNum5 === 9) {
  favoriteFood5 = 'Ogden Burrito'
};

if (ranFoodNum6 === 0) {
  favoriteFood6 = 'Carnitas Burrito'
} else if (ranFoodNum6 === 1) {
  favoriteFood6 = 'Cheeseburger'
} else if (ranFoodNum6 === 2) {
  favoriteFood6 = 'Spicy Chicken Sandwich'
} else if (ranFoodNu6 === 3) {
  favoriteFood6 = 'Breakfast Burrito'
} else if (ranFoodNum6 === 4) {
  favoriteFood6 = 'BBQ Bacon Burger'
} else if (ranFoodNum6 === 5) {
  favoriteFood6 = 'BLT Sandwich'
} else if (ranFoodNum6 === 6) {
  favoriteFood6 = 'Reuben Sandwich'
} else if (ranFoodNum6 === 7) {
  favoriteFood6 = 'Grilled Cheese Sandwich'
} else if (ranFoodNum6 === 8) {
  favoriteFood6 = 'Swiss Mushroom Burger'
} else if (ranFoodNum6 === 9) {
  favoriteFood6 = 'Ogden Burrito'
};

// Randomizes a favorite toy archetype and a favorite toy
if (ranToyNum1 === 0) {
  favoriteToy1 = 'Video Games'
  if (ranToySpfc1 === 0) {
    favToySpfc1 = 'Tetanus'
  } else if (ranToySpfc1 === 1) {
    favToySpfc1 = 'Strategy Countries 2'
  } else if (ranToySpfc1 === 2) {
    favToySpfc1 = 'Deity Battle Quest RPG'
  } else if (ranToySpfc1 === 3) {
    favToySpfc1 = 'Flight Simulator'
  } else if (ranToySpfc1 === 4) {
    favToySpfc1 = 'Fighting Flaming Fists of Fury VIII'
  }
} else if (ranToyNum1 === 1) {
  favoriteToy1 = 'Board Games'
  if (ranToySpfc1 === 0) {
    favToySpfc1 = 'Chess'
  } else if (ranToySpfc1 === 1) {
    favToySpfc1 = 'Chess 2.0'
  } else if (ranToySpfc1 === 2) {
    favToySpfc1 = 'Space Murder Mystery'
  } else if (ranToySpfc1 === 3) {
    favToySpfc1 = 'Cable Cutters Bomb Squadron'
  } else if (ranToySpfc1 === 4) {
    favToySpfc1 = 'Illuminati: Through the Weeds'
  }
} else if (ranToyNum1 === 2) {
  favoriteToy1 = 'Movies';
  if (ranToySpfc1 === 0) {
    favToySpfc1 = 'War in the Outback II'
  } else if (ranToySpfc1 === 1) {
    favToySpfc1 = 'The Noun'
  } else if (ranToySpfc1 === 2) {
    favToySpfc1 = 'Freaky Incomprehensible Alien Friend'
  } else if (ranToySpfc1 === 3) {
    favToySpfc1 = 'Freaky Incomprehensible Alien Foe'
  } else if (ranToySpfc1 === 4) {
    favToySpfc1 = 'White Whale'
  }
} else if (ranToyNum1 === 3) {
  favoriteToy1 = 'Books';
  if (ranToySpfc1 === 0) {
    favToySpfc1 = 'Grapes of Wrath'
  } else if (ranToySpfc1 === 1) {
    favToySpfc1 = 'Moby Dick'
  } else if (ranToySpfc1 === 2) {
    favToySpfc1 = 'The Iliad'
  } else if (ranToySpfc1 === 3) {
    favToySpfc1 = 'The Great Gatsby'
  } else if (ranToySpfc1 === 4) {
    favToySpfc1 = 'Dr. Jekyll & Mr. Hyde'
  }
} else if (ranToyNum1 === 4) {
  favoriteToy1 = 'Regular Toys'
  if (ranToySpfc1 === 0) {
    favToySpfc1 = 'Commander Police Action Figure'
  } else if (ranToySpfc1 === 1) {
    favToySpfc1 = 'Remote Control Monster Truck'
  } else if (ranToySpfc1 === 2) {
    favToySpfc1 = 'Catgirl Kim Anime Figurine' 
  } else if (ranToySpfc1 === 3) {
    favToySpfc1 = 'Miss Woman Thing Girlpower Doll'
  } else if (ranToySpfc1 === 4) {
    favToySpfc1 = 'Therapeutic Sheep Pillow'
  }
}

if (ranToyNum2 === 0) {
  favoriteToy2 = 'Video Games'
  if (ranToySpfc2 === 0) {
    favToySpfc2 = 'Tetanus'
  } else if (ranToySpfc2 === 1) {
    favToySpfc2 = 'Strategy Countries 2'
  } else if (ranToySpfc2 === 2) {
    favToySpfc2 = 'Deity Battle Quest RPG'
  } else if (ranToySpfc2 === 3) {
    favToySpfc2 = 'Flight Simulator'
  } else if (ranToySpfc2 === 4) {
    favToySpfc2 = 'Fighting Flaming Fists of Fury VIII'
  }
} else if (ranToyNum2 === 1) {
  favoriteToy2 = 'Board Games'
  if (ranToySpfc2 === 0) {
    favToySpfc2 = 'Chess'
  } else if (ranToySpfc2 === 1) {
    favToySpfc2 = 'Chess 2.0'
  } else if (ranToySpfc2 === 2) {
    favToySpfc2 = 'Space Murder Mystery'
  } else if (ranToySpfc2 === 3) {
    favToySpfc2 = 'Cable Cutters Bomb Squadron'
  } else if (ranToySpfc2 === 4) {
    favToySpfc2 = 'Illuminati: Through the Weeds'
  }
} else if (ranToyNum2 === 2) {
  favoriteToy2 = 'Movies';
  if (ranToySpfc2 === 0) {
    favToySpfc2 = 'War in the Outback II'
  } else if (ranToySpfc2 === 1) {
    favToySpfc2 = 'The Noun'
  } else if (ranToySpfc2 === 2) {
    favToySpfc2 = 'Freaky Incomprehensible Alien Friend'
  } else if (ranToySpfc2 === 3) {
    favToySpfc2 = 'Freaky Incomprehensible Alien Foe'
  } else if (ranToySpfc2 === 4) {
    favToySpfc2 = 'White Whale'
  }
} else if (ranToyNum2 === 3) {
  favoriteToy2 = 'Books';
  if (ranToySpfc2 === 0) {
    favToySpfc2 = 'Grapes of Wrath'
  } else if (ranToySpfc2 === 1) {
    favToySpfc2 = 'Moby Dick'
  } else if (ranToySpfc2 === 2) {
    favToySpfc2 = 'The Iliad'
  } else if (ranToySpfc2 === 3) {
    favToySpfc2 = 'The Great Gatsby'
  } else if (ranToySpfc2 === 4) {
    favToySpfc2 = 'Dr. Jekyll & Mr. Hyde'
  }
} else if (ranToyNum2 === 4) {
  favoriteToy2 = 'Regular Toys'
  if (ranToySpfc2 === 0) {
    favToySpfc2 = 'Commander Police Action Figure'
  } else if (ranToySpfc2 === 1) {
    favToySpfc2 = 'Remote Control Monster Truck'
  } else if (ranToySpfc2 === 2) {
    favToySpfc2 = 'Catgirl Kim Anime Figurine' 
  } else if (ranToySpfc2 === 3) {
    favToySpfc2 = 'Miss Woman Thing Girlpower Doll'
  } else if (ranToySpfc2 === 4) {
    favToySpfc2 = 'Therapeutic Sheep Pillow'
  }
}

if (ranToyNum3 === 0) {
  favoriteToy3 = 'Video Games'
  if (ranToySpfc3 === 0) {
    favToySpfc3 = 'Tetanus'
  } else if (ranToySpfc3 === 1) {
    favToySpfc3 = 'Strategy Countries 2'
  } else if (ranToySpfc3 === 2) {
    favToySpfc3 = 'Deity Battle Quest RPG'
  } else if (ranToySpfc3 === 3) {
    favToySpfc3 = 'Flight Simulator'
  } else if (ranToySpfc3 === 4) {
    favToySpfc3 = 'Fighting Flaming Fists of Fury VIII'
  }
} else if (ranToyNum3 === 1) {
  favoriteToy3 = 'Board Games'
  if (ranToySpfc3 === 0) {
    favToySpfc3 = 'Chess'
  } else if (ranToySpfc3 === 1) {
    favToySpfc3 = 'Chess 2.0'
  } else if (ranToySpfc3 === 2) {
    favToySpfc3 = 'Space Murder Mystery'
  } else if (ranToySpfc3 === 3) {
    favToySpfc3 = 'Cable Cutters Bomb Squadron'
  } else if (ranToySpfc3 === 4) {
    favToySpfc3 = 'Illuminati: Through the Weeds'
  }
} else if (ranToyNum3 === 2) {
  favoriteToy3 = 'Movies';
  if (ranToySpfc3 === 0) {
    favToySpfc3 = 'War in the Outback II'
  } else if (ranToySpfc3 === 1) {
    favToySpfc3 = 'The Noun'
  } else if (ranToySpfc3 === 2) {
    favToySpfc3 = 'Freaky Incomprehensible Alien Friend'
  } else if (ranToySpfc3 === 3) {
    favToySpfc3 = 'Freaky Incomprehensible Alien Foe'
  } else if (ranToySpfc3 === 4) {
    favToySpfc3 = 'White Whale'
  }
} else if (ranToyNum3 === 3) {
  favoriteToy3 = 'Books';
  if (ranToySpfc3 === 0) {
    favToySpfc3 = 'Grapes of Wrath'
  } else if (ranToySpfc3 === 1) {
    favToySpfc3 = 'Moby Dick'
  } else if (ranToySpfc3 === 2) {
    favToySpfc3 = 'The Iliad'
  } else if (ranToySpfc3 === 3) {
    favToySpfc3 = 'The Great Gatsby'
  } else if (ranToySpfc3 === 4) {
    favToySpfc3 = 'Dr. Jekyll & Mr. Hyde'
  }
} else if (ranToyNum3 === 4) {
  favoriteToy3 = 'Regular Toys'
  if (ranToySpfc3 === 0) {
    favToySpfc3 = 'Commander Police Action Figure'
  } else if (ranToySpfc3 === 1) {
    favToySpfc3 = 'Remote Control Monster Truck'
  } else if (ranToySpfc3 === 2) {
    favToySpfc3 = 'Catgirl Kim Anime Figurine' 
  } else if (ranToySpfc3 === 3) {
    favToySpfc3 = 'Miss Woman Thing Girlpower Doll'
  } else if (ranToySpfc3 === 4) {
    favToySpfc3 = 'Therapeutic Sheep Pillow'
  }
}

if (ranToyNum4 === 0) {
  favoriteToy4 = 'Video Games'
  if (ranToySpfc4 === 0) {
    favToySpfc4 = 'Tetanus'
  } else if (ranToySpfc4 === 1) {
    favToySpfc4 = 'Strategy Countries 2'
  } else if (ranToySpfc4 === 2) {
    favToySpfc4 = 'Deity Battle Quest RPG'
  } else if (ranToySpfc4 === 3) {
    favToySpfc4 = 'Flight Simulator'
  } else if (ranToySpfc4 === 4) {
    favToySpfc4 = 'Fighting Flaming Fists of Fury VIII'
  }
} else if (ranToyNum4 === 1) {
  favoriteToy4 = 'Board Games'
  if (ranToySpfc4 === 0) {
    favToySpfc4 = 'Chess'
  } else if (ranToySpfc4 === 1) {
    favToySpfc4 = 'Chess 2.0'
  } else if (ranToySpfc4 === 2) {
    favToySpfc4 = 'Space Murder Mystery'
  } else if (ranToySpfc4 === 3) {
    favToySpfc4 = 'Cable Cutters Bomb Squadron'
  } else if (ranToySpfc4 === 4) {
    favToySpfc4 = 'Illuminati: Through the Weeds'
  }
} else if (ranToyNum4 === 2) {
  favoriteToy4 = 'Movies';
  if (ranToySpfc4 === 0) {
    favToySpfc4 = 'War in the Outback II'
  } else if (ranToySpfc4 === 1) {
    favToySpfc4 = 'The Noun'
  } else if (ranToySpfc4 === 2) {
    favToySpfc4 = 'Freaky Incomprehensible Alien Friend'
  } else if (ranToySpfc4 === 3) {
    favToySpfc4 = 'Freaky Incomprehensible Alien Foe'
  } else if (ranToySpfc4 === 4) {
    favToySpfc4 = 'White Whale'
  }
} else if (ranToyNum4 === 3) {
  favoriteToy4 = 'Books';
  if (ranToySpfc4 === 0) {
    favToySpfc4 = 'Grapes of Wrath'
  } else if (ranToySpfc4 === 1) {
    favToySpfc4 = 'Moby Dick'
  } else if (ranToySpfc4 === 2) {
    favToySpfc4 = 'The Iliad'
  } else if (ranToySpfc4 === 3) {
    favToySpfc4 = 'The Great Gatsby'
  } else if (ranToySpfc4 === 4) {
    favToySpfc4 = 'Dr. Jekyll & Mr. Hyde'
  }
} else if (ranToyNum4 === 4) {
  favoriteToy4 = 'Regular Toys'
  if (ranToySpfc4 === 0) {
    favToySpfc4 = 'Commander Police Action Figure'
  } else if (ranToySpfc4 === 1) {
    favToySpfc4 = 'Remote Control Monster Truck'
  } else if (ranToySpfc4 === 2) {
    favToySpfc4 = 'Catgirl Kim Anime Figurine' 
  } else if (ranToySpfc4 === 3) {
    favToySpfc4 = 'Miss Woman Thing Girlpower Doll'
  } else if (ranToySpfc4 === 4) {
    favToySpfc4 = 'Therapeutic Sheep Pillow'
  }
}

if (ranToyNum5 === 0) {
  favoriteToy5 = 'Video Games'
  if (ranToySpfc5 === 0) {
    favToySpfc5 = 'Tetanus'
  } else if (ranToySpfc5 === 1) {
    favToySpfc5 = 'Strategy Countries 2'
  } else if (ranToySpfc5 === 2) {
    favToySpfc5 = 'Deity Battle Quest RPG'
  } else if (ranToySpfc5 === 3) {
    favToySpfc5 = 'Flight Simulator'
  } else if (ranToySpfc5 === 4) {
    favToySpfc5 = 'Fighting Flaming Fists of Fury VIII'
  }
} else if (ranToyNum5 === 1) {
  favoriteToy5 = 'Board Games'
  if (ranToySpfc5 === 0) {
    favToySpfc5 = 'Chess'
  } else if (ranToySpfc5 === 1) {
    favToySpfc5 = 'Chess 2.0'
  } else if (ranToySpfc5 === 2) {
    favToySpfc5 = 'Space Murder Mystery'
  } else if (ranToySpfc5 === 3) {
    favToySpfc5 = 'Cable Cutters Bomb Squadron'
  } else if (ranToySpfc5 === 4) {
    favToySpfc5 = 'Illuminati: Through the Weeds'
  }
} else if (ranToyNum5 === 2) {
  favoriteToy5 = 'Movies';
  if (ranToySpfc5 === 0) {
    favToySpfc5 = 'War in the Outback II'
  } else if (ranToySpfc5 === 1) {
    favToySpfc5 = 'The Noun'
  } else if (ranToySpfc5 === 2) {
    favToySpfc5 = 'Freaky Incomprehensible Alien Friend'
  } else if (ranToySpfc5 === 3) {
    favToySpfc5 = 'Freaky Incomprehensible Alien Foe'
  } else if (ranToySpfc5 === 4) {
    favToySpfc5 = 'White Whale'
  }
} else if (ranToyNum5 === 3) {
  favoriteToy5 = 'Books';
  if (ranToySpfc5 === 0) {
    favToySpfc5 = 'Grapes of Wrath'
  } else if (ranToySpfc5 === 1) {
    favToySpfc5 = 'Moby Dick'
  } else if (ranToySpfc5 === 2) {
    favToySpfc5 = 'The Iliad'
  } else if (ranToySpfc5 === 3) {
    favToySpfc5 = 'The Great Gatsby'
  } else if (ranToySpfc5 === 4) {
    favToySpfc5 = 'Dr. Jekyll & Mr. Hyde'
  }
} else if (ranToyNum5 === 4) {
  favoriteToy5 = 'Regular Toys'
  if (ranToySpfc5 === 0) {
    favToySpfc5 = 'Commander Police Action Figure'
  } else if (ranToySpfc5 === 1) {
    favToySpfc5 = 'Remote Control Monster Truck'
  } else if (ranToySpfc5 === 2) {
    favToySpfc5 = 'Catgirl Kim Anime Figurine' 
  } else if (ranToySpfc5 === 3) {
    favToySpfc5 = 'Miss Woman Thing Girlpower Doll'
  } else if (ranToySpfc5 === 4) {
    favToySpfc5 = 'Therapeutic Sheep Pillow'
  }
}

if (ranToyNum6 === 0) {
  favoriteToy6 = 'Video Games'
  if (ranToySpfc6 === 0) {
    favToySpfc6 = 'Tetanus'
  } else if (ranToySpfc6 === 1) {
    favToySpfc6 = 'Strategy Countries 2'
  } else if (ranToySpfc6 === 2) {
    favToySpfc6 = 'Deity Battle Quest RPG'
  } else if (ranToySpfc6 === 3) {
    favToySpfc6 = 'Flight Simulator'
  } else if (ranToySpfc6 === 4) {
    favToySpfc6 = 'Fighting Flaming Fists of Fury VIII'
  }
} else if (ranToyNum6 === 1) {
  favoriteToy6 = 'Board Games'
  if (ranToySpfc6 === 0) {
    favToySpfc6 = 'Chess'
  } else if (ranToySpfc6 === 1) {
    favToySpfc6 = 'Chess 2.0'
  } else if (ranToySpfc6 === 2) {
    favToySpfc6 = 'Space Murder Mystery'
  } else if (ranToySpfc6 === 3) {
    favToySpfc6 = 'Cable Cutters Bomb Squadron'
  } else if (ranToySpfc6 === 4) {
    favToySpfc6 = 'Illuminati: Through the Weeds'
  }
} else if (ranToyNum6 === 2) {
  favoriteToy6 = 'Movies';
  if (ranToySpfc6 === 0) {
    favToySpfc6 = 'War in the Outback II'
  } else if (ranToySpfc6 === 1) {
    favToySpfc6 = 'The Noun'
  } else if (ranToySpfc6 === 2) {
    favToySpfc6 = 'Freaky Incomprehensible Alien Friend'
  } else if (ranToySpfc6 === 3) {
    favToySpfc6 = 'Freaky Incomprehensible Alien Foe'
  } else if (ranToySpfc6 === 4) {
    favToySpfc6 = 'White Whale'
  }
} else if (ranToyNum6 === 3) {
  favoriteToy6 = 'Books';
  if (ranToySpfc6 === 0) {
    favToySpfc6 = 'Grapes of Wrath'
  } else if (ranToySpfc6 === 1) {
    favToySpfc6 = 'Moby Dick'
  } else if (ranToySpfc6 === 2) {
    favToySpfc6 = 'The Iliad'
  } else if (ranToySpfc6 === 3) {
    favToySpfc6 = 'The Great Gatsby'
  } else if (ranToySpfc6 === 4) {
    favToySpfc6 = 'Dr. Jekyll & Mr. Hyde'
  }
} else if (ranToyNum6 === 4) {
  favoriteToy6 = 'Regular Toys'
  if (ranToySpfc6 === 0) {
    favToySpfc6 = 'Commander Police Action Figure'
  } else if (ranToySpfc6 === 1) {
    favToySpfc6 = 'Remote Control Monster Truck'
  } else if (ranToySpfc6 === 2) {
    favToySpfc6 = 'Catgirl Kim Anime Figurine' 
  } else if (ranToySpfc6 === 3) {
    favToySpfc6 = 'Miss Woman Thing Girlpower Doll'
  } else if (ranToySpfc6 === 4) {
    favToySpfc6 = 'Therapeutic Sheep Pillow'
  }
}

// Adds the randomized favorites to the popup's text
document.getElementById('favToySpfc1').innerHTML = favToySpfc1;
document.getElementById('favToy1').innerHTML = favoriteToy1;
document.getElementById('favoriteFood1').innerHTML = favoriteFood1;

document.getElementById('favToySpfc2').innerHTML = favToySpfc2;
document.getElementById('favToy2').innerHTML = favoriteToy2;
document.getElementById('favoriteFood2').innerHTML = favoriteFood2;

document.getElementById('favToySpfc3').innerHTML = favToySpfc3;
document.getElementById('favToy3').innerHTML = favoriteToy3;
document.getElementById('favoriteFood3').innerHTML = favoriteFood3;

document.getElementById('favToySpfc4').innerHTML = favToySpfc4;
document.getElementById('favToy4').innerHTML = favoriteToy4;
document.getElementById('favoriteFood4').innerHTML = favoriteFood4;

document.getElementById('favToySpfc5').innerHTML = favToySpfc5;
document.getElementById('favToy5').innerHTML = favoriteToy5;
document.getElementById('favoriteFood5').innerHTML = favoriteFood5;

document.getElementById('favToySpfc6').innerHTML = favToySpfc6;
document.getElementById('favToy6').innerHTML = favoriteToy6;
document.getElementById('favoriteFood6').innerHTML = favoriteFood6;