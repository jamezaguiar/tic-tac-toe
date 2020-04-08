var playerChoice = "";
var player2Choice = "";
var occupedPositions = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

function getOccupedPositions() {
  let count = 0;
  for (const i of occupedPositions) {
    if (i == false) {
      count++;
    }
  }
  console.log(count);
  return count;
}

function choice(symbol) {
  playerChoice = symbol;
  if (symbol === "x") {
    player2Choice = "o";
  } else {
    player2Choice = "x";
  }
  document.getElementById("choice").style.display = "none";
}

function mark(position) {
  if (getOccupedPositions() > 1) {
    if (playerChoice !== "") {
      document.getElementById(position).innerHTML = playerChoice.toUpperCase();
      occupedPositions[position - 1] = true;
      player2();
    } else {
      alert("Escolha X ou O");
    }
  } else {
    document.getElementById(position).innerHTML = playerChoice.toUpperCase();
    occupedPositions[position - 1] = true;
  }
}

function player2() {
  let randomPosition = Math.floor(Math.random() * 9 + 1);
  let played = false;

  while (!played) {
    let content = document.getElementById(randomPosition);
    if (content.textContent === ".") {
      content.innerHTML = player2Choice.toUpperCase();
      occupedPositions[randomPosition - 1] = true;
      played = true;
    } else {
      randomPosition = Math.floor(Math.random() * 9 + 1);
    }
  }
}
