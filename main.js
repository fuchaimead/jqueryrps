$(document).ready( function(){ 
  var tally = {wins: 0, tie: 0, losses: 0, plays: 0}
  
  var rockButton = $('#rock')
  var paperButton = $('#paper')
  var scissorsButton = $('#scissors')
  
  rockButton.on("click", function() {
    pickWinner("rock");
  });
  
  
  paperButton.on("click", function() {
    pickWinner("paper")
  });
  
  scissorsButton.on("click", function() {
    pickWinner("scissors")
  });
  
  function pickWinner(playerChoice) {
  var rps = ["rock", "paper", "scissors"]
  var computerChoice = rps[Math.floor(Math.random()*rps.length)];
  
    switch(playerChoice) {
      case "rock":
        switch(computerChoice) {
          case "rock":
          tally.tie++
          $("#winner").html = "IT WAS A TIE!"
          break;
          case "paper":
          tally.losses++ 
          $("#winner").html = "YOU LOSE!"
          break;
          case "scissors":
          tally.wins++ 
          $("#winner").html = "YOU WIN!"
          break;
        }
        break;
      case "paper":
        switch(computerChoice) {
          case "rock":
          tally.win++
          $("#winner").html = "YOU WIN!"
          break;
          case "paper":
          tally.tie++ 
          $("#winner").html= "IT WAS A TIE!"
          break;
          case "scissors":
          tally.losses++
          $("#winner").html = "YOU LOSE!"
          break;
        }
        break;
      case "scissors":
        switch(computerChoice) {
          case "rock":
          tally.losses++
          $("#winner").html = "YOU LOSE!"
          break;
          case "paper":
          tally.wins++ 
          $("#winner").html = "YOU WIN!"
          break;
          case "scissors":
          tally.tie++
          $("#winner").html = "IT WAS A TIE!"
          break;
        }      
      default:
    }
  
  $("#computer").html = "The computer chose: " + computerChoice  
  $("#youlose").html = "You have lost " + tally.losses + " games."
  $("#youwin").html = "You have won " + tally.wins + " games."
  $("#tie").html = "You tied " + tally.tie + " games."
  
  
  }
  
  })
  
  
  
  
  