window.onload = function () {
  generateRandomCard();
};

const generateRandomCard = () => {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];
  const randomValues = getRandomElement(values);
  const randomsuits = getRandomElement(suits);
  renderCard(randomValues, randomsuits)
}

const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const renderCard = (value, suit) => {
  const card = document.querySelector("#myCard");
  const valueCard = document.querySelector("#value-card");
  const topSuit = document.querySelector("#top-suit");
  const bottomSuit = document.querySelector("#bottom-suit");

  valueCard.innerHTML = value;
  topSuit.innerHTML = suit;
  bottomSuit.innerHTML = suit;

  if (suit === "♥" || suit === "♦") {
    valueCard.style.color = "red";
    topSuit.style.color = "red";
    bottomSuit.style.color = "red";
  } else {
    valueCard.style.color = "black";
    topSuit.style.color = "black";
    bottomSuit.style.color = "black";
  }

};