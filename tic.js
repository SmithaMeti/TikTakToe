buttons = document.querySelectorAll(".inputButton");
reset1 = document.querySelector(".set");
msg = document.querySelector(".mes-win");
win = document.querySelector("#win");
new1 = document.querySelector("#new");
currentTurn = document.getElementById("turn")

let turn = true;
possibles = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

reset = () => {
  turn = true;
  enable();
  msg.classList.add("hide");
};

buttons.forEach((game) => {
  game.addEventListener("click", () => {
    console.log("clicked");
    if (turn) {
      game.innerText = "O";
      currentTurn.innerText = "X's Turn"
      turn = false;
    } else {
      game.innerText = "X";
      currentTurn.innerText = "O's Turn"
      turn = true;
    }
    game.disabled = true;
    check();
  });
});

disable = () => {
  for (let game of buttons) {
    game.disabled = true;
  }
};

enable = () => {
  for (let game of buttons) {
    game.disabled = false;
    game.innerText = "";
  }
};

show = (winner) => {
  win.innerText = `Congratgulations Winner is:${winner}`;
  msg.classList.remove("hide");
  disable();
};

check = () => {
  for (pattern of possibles) {
    // console.log(pattern[0], pattern[1], pattern[2]);
    // console.log("vishal",pattern[0])
    val0 = buttons[pattern[0]].innerText;
    val1 = buttons[pattern[1]].innerText;
    val2 = buttons[pattern[2]].innerText;

    if (val0 != "" && val1 != "" && val2 != "") {
      if (val0 === val1 && val1 === val2) {
        console.log(val0, "you won");
        show(val0);
      }
    }
  }
};

reset1.addEventListener("click", reset);
new1.addEventListener("click", reset);
