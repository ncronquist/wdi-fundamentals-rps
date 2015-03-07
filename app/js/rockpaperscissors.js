////////////////////////////////////////////////
/*   Provided Code - Please Don't Edit   */
////////////////////////////////////////////////
'use strict';

function getInput() {
    console.log("Please choose either 'rock', 'paper', or 'scissors'.")
    return prompt();
}
function randomPlay() {
    var randomNumber = Math.random();
    if (randomNumber < 0.33) {
        return "rock";
    } else if (randomNumber < 0.66) {
        return "paper";
    } else {
        return "scissors";
    }
}
////////////////////////////////////////////////
/*           Write Your Code Below            */
////////////////////////////////////////////////

function getPlayerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `getInput()`.
    return move || getInput();
}

function getComputerMove(move) {
    // Write an expression that operates on a variable called `move`
    // If a `move` has a value, your expression should evaluate to that value.
    // However, if `move` is not specified / is null, your expression should equal `randomPlay()`.
    return move || randomPlay();
}

function getWinner(playerMove,computerMove) {
    var winner;
    // Write code that will set winner to either 'player', 'computer', or 'tie' based on the values of playerMove and computerMove.
    // Assume that the only values playerMove and computerMove can have are 'rock', 'paper', and 'scissors'.
    // The rules of the game are that 'rock' beats 'scissors', 'scissors' beats 'paper', and 'paper' beats 'rock'.
    /* YOUR CODE HERE */
    if (playerMove == computerMove) {
        winner = 'tie';
    } else {
        switch (playerMove) {
            case 'rock':
              if (computerMove == 'paper') {
                winner = 'computer';
              } else {
                winner = 'player';
              }
              break;
            case 'paper':
                if (computerMove == 'scissors') {
                    winner = 'computer';
                } else {
                    winner = 'player';
                }
                break;
            case 'scissors':
                if (computerMove == 'rock') {
                    winner = 'computer';
                } else {
                    winner = 'player';
                }
                break;
            default:
              winner = '';
        }
    }
    return winner;
}

function playToFive() {
    console.log("Let's play Rock, Paper, Scissors");
    var playerWins = 0;
    var computerWins = 0;
    // Write code that plays 'Rock, Paper, Scissors' until either the player or the computer has won five times.
    /* YOUR CODE HERE */
    while (playerWins < 5 && computerWins < 5) {
        var playerMove = getPlayerMove();
        var computerMove = getComputerMove();
        var winner = getWinner(playerMove, computerMove);
        var sign = "";

        if (winner == 'player') {
            sign = ">";
            playerWins+=1;
        } else if (winner == 'computer') {
            sign = "<";
            computerWins+=1;
        } else {
            sign = "=";
        }

        console.log("Player:   " + playerMove + "   " + sign +
                    "   " + computerMove + "   :Computer");

        if (winner == 'tie') {
            console.log("Tie. No one wins. The score is currently " +
                        playerWins + " to " + computerWins + ".\n");
        } else {
            console.log(winner.capitalize() + " wins. The score is currently "
                        + playerWins + " to " + computerWins + ".\n");
        }
    }

    return [playerWins, computerWins];
}

// This function will convert a string to title case
String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
