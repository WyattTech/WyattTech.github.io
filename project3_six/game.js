let btn = document.getElementById("btn");
let btn1 = document.getElementById("btn1");
let output = document.getElementById("outputText");


let number = [Math.floor(Math.random() * 100)];

let points = 10;
let high_score = 0;
let guess = [];

btn.addEventListener("click", function () {
  let input = document.getElementById("userInput").value;
  let game_guess = points;
  if (input == !number) {
    output.style.color = "yellow";
    output.innerHTML = "You must enter a number between 1 -100!";
  } else if (input == number) {
      points = points - 1;
    output.style.color = "red";
    output.innerHTML = `You guessed the right, your number was ${number}`;
  } else if (input < number) {
    points = points - 1;
    output.style.color = "white";
    output.innerHTML = `You guessed to low try again!`;
  }
  if (input > number) {
    points = points - 1;
    output.style.color = "white";
    output.innerHTML = `You guessed too high.Try again!`;
  }
  console.log(number);

  const history = document.createElement("ul");
  const list = document.createElement("li");
  list.innerText = `You guessed ${input}`;
  history.appendChild(list);
  list.style.color='white';
  game_myGuess = document.getElementById("myGuess");
 document.body.appendChild(history);
});

let span2 = document.getElementById('span2');


let span1 = getElementById('span1');



let reset = document.getElementById('btn1');

reset.addEventListener("click", function(){

    location.reload();
  
  });

// console.log(high_score);

// const history = document.createElement("ul");
// const list = document.createElement("li");
// list.textContent = `You guessed ${number}`;

// let myGuess = document.getElementById("myGuess");
// document.body.appendChild(history);
