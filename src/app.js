window.onload = function () {
  generateRandomCard();
  setInterval(generateRandomCard, 10000);
};

  const card = document.querySelector("#myCard");
  const initialWidth = card.offsetWidth;
  const initialHeight = card.offsetHeight;
  const minWidth = 353;
  const minHeight = 458;
  
const getRandomElement = (array) => array[Math.floor(Math.random() * array.length)];

const generateRandomCard = () => {
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  const suits = ["♦", "♥", "♠", "♣"];
  const randomValues = getRandomElement(values);
  const randomsuits = getRandomElement(suits);
  renderCard(randomValues, randomsuits)
}

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


  

  // const changeCardTenS = setInterval(generateRandomCard, 10000);

  // const changeCardSize = () => {
  //   const card = document.querySelector("#myCard");
  //   const width = document.querySelector("#width-input").value;
  //   const height = document.querySelector("#height-input").value;
  //   if (width) {
  //     card.style.width = width + "px";
  //   };

  //   if (height) {
  //     card.style.height = height + "px";
  //   };
  // };


  const changeCardSize = () => {
    const width = parseInt(document.querySelector("#width-input").value);
    const height = parseInt(document.querySelector("#height-input").value);

    if (width) card.style.width = Math.max(width, minWidth) + "px";
    if (height) card.style.height = Math.max(height, minHeight) + "px";

  };



  const resetCardSize = () => {
    const card = document.querySelector("#myCard");
    const widthInput = document.querySelector("#width-input");
    const heightInput = document.querySelector("#height-input");

    card.style.width = initialWidth + "px";
    card.style.height = initialHeight + "px";

    widthInput.value = "";
    heightInput.value = "";
  };

  const resetBtn = document.querySelector("#reset-btn");
  resetBtn.addEventListener("click", resetCardSize);
  const widthInput = document.querySelector("#width-input");
  widthInput.addEventListener("input", changeCardSize)
  const heightInput = document.querySelector("#height-input");
  heightInput.addEventListener("input", changeCardSize);
  const newCardBtn = document.querySelector("#new-card-btn");
  newCardBtn.addEventListener("click", generateRandomCard);



};