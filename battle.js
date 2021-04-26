class Battle {

  constructor() {
    this.players = []
    this.opponentMove = 0;
  }

  add(player) {
    this.players.push(player)
  }

  currentPlayer() {
    return this.players[0].name
  }


  getRandomInt(max) {
  return Math.floor(Math.random() * max);
  }

  generateResponse() {
  let number = this.getRandomInt(3)
  if (number === 0) {
    this.opponentMove = "rock"
  } else if (number === 1) {
    this.opponentMove = "paper"
  } else if (number === 2) {
    this.opponentMove = "scissors"
  }
  return this.opponentMove
  }

  evaluateTurn(yourMove, opponentMove) {
    if (yourMove === "rock" & opponentMove === "rock") {
      return "draw"
    } else if (yourMove === "scissors" & opponentMove === "scissors") {
      return "draw"
    } else if (yourMove === "paper" & opponentMove === "paper") {
      return "draw"
    } else if (yourMove === "rock" & opponentMove === "paper") {
      return "you lose"
    } else if (yourMove === "rock" & opponentMove === "scissors") {
      return "you win"
    } else if (yourMove === "paper" & opponentMove === "rock") {
      return "you win"
    } else if (yourMove === "paper" & opponentMove === "scissors") {
      return "you lose"
    } else if (yourMove === "scissors" & opponentMove === "paper") {
      return "you win"
    } else if (yourMove === "scissors" & opponentMove === "rock") {
      return "you lose"
    }
  }

}

module.exports = Battle;
