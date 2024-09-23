let popup = document.getElementById('popFunction1');
let clicker = document.getElementById('digimon-1');

// Intended to h the popup
popup.hidden = true;

// Intended to reveal the popup after clicking the digimon
clicker.onclick = function() {
  popup.hidden = false;
}