import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  generateRandomCard();
};

const generateRandomCard= () => {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const suits = ["diamond", "heart", "spade", "club"];
  const randomValues = getRandomElement(values);
  const randomsuits = getRandomElement(suits);
  renderCard(randomValues, randomsuits)
}

const getRandomElement = (array) => array[Math.floor(Math.random()*array.length)];

const renderCard= (value, suit) => {
  const icons = {
    diamond:"♦", 
    heart: "♥", 
    spade: "♠", 
    club: "♣"
  };
  const card = document.querySelector("#myCard");
  const valueCard = document.querySelector("#value-card");
  const topSuit = document.querySelector("#top-suit");
  const bottomSuit = document.querySelector("#bottom-suit");
  valueCard.innerHTML = value;
  topSuit.innerHTML = icons[suit];
  bottomSuit.innerHTML = icons[suit];
  card.className = `card poker-card shadow-lg position-relative ${suit}`;
};