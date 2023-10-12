//your code here
document.getElementById("play-game").addEventListener("click", startGame);

    // Define variables to keep track of game state
    let turns;
    let roundsLeft;
    let userPoints = 0;
    let computerPoints = 0;

    function startGame() {
      // Get the number of turns from the input
      turns = parseInt(document.getElementById("game-number").value);
      roundsLeft = turns;

      // Update the rounds left display
      document.getElementById("rounds-left").textContent = roundsLeft;

      // Add event listeners to Rock, Paper, and Scissors buttons
      document.querySelector("[data-ns-test='rock']").addEventListener("click", () => playRound("ROCK"));
      document.querySelector("[data-ns-test='paper']").addEventListener("click", () => playRound("PAPER"));
      document.querySelector("[data-ns-test='scissors']").addEventListener("click", () => playRound("SCISSORS"));
    }

    function playRound(userChoice) {
      // Generate a random choice for the computer
      const computerChoices = ["ROCK", "PAPER", "SCISSORS"];
      const computerChoice = computerChoices[Math.floor(Math.random() * 3)];

      // Determine the round result
      let roundResult;
      if (userChoice === computerChoice) {
        roundResult = "TIE";
      } else if (
        (userChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (userChoice === "PAPER" && computerChoice === "ROCK") ||
        (userChoice === "SCISSORS" && computerChoice === "PAPER")
      ) {
        roundResult = "WON";
        userPoints++;
      } else {
        roundResult = "LOSE";
        computerPoints++;
      }

      // Update the game state
      roundsLeft--;
      document.getElementById("rounds-left").textContent = roundsLeft;
      document.getElementById("user-points").textContent = userPoints;
      document.getElementById("computer-points").textContent = computerPoints;

      // Display round result
      document.getElementById("round-result").textContent = `Round Result: ${roundResult}`;

      if (roundsLeft === 0) {
        // Determine the game result
        let gameResult;
        if (userPoints > computerPoints) {
          gameResult = "WON";
        } else if (userPoints < computerPoints) {
          gameResult = "LOSE";
        } else {
          gameResult = "TIE";
        }

        // Display the final game result
        document.getElementById("game-result").textContent = `Game Result: ${gameResult}`;
      }
    }