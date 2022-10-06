
//Random number generation code
document.querySelector("button").addEventListener("click", getRandomInt)
function getRandomInt() {

    // Generating random number
    let generateNumber = Math.floor(Math.random() * 10);
    let randomNum ;
    if (generateNumber % 2 == 0) {
      randomNum = generateNumber + 1;
    } else {
      randomNum = generateNumber;
    }
    document
        .querySelector("#reply")
        .textContent = "Your number is " + randomNum;
    
    // Whose turn now
    let x = document.querySelector("#playerNumber").textContent;
    if ( x === "Player1") {
      document.querySelector("#playerNumber").textContent = "Player2";
    } else {
      document.querySelector("#playerNumber").textContent = "Player1";
    }

    // change image

    // for player2
    if (x === "Player1") {
      if (randomNum === 1) {
        let teamtest = document.querySelector("#blue1").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#blue1").src = "photo/6.png";
        } else {
          document.querySelector("#blue1").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 3) {
        let teamtest = document.querySelector("#blue2").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#blue2").src = "photo/6.png";
        } else {
          document.querySelector("#blue2").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 5) {
        let teamtest = document.querySelector("#blue3").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#blue3").src = "photo/6.png";
        } else {
          document.querySelector("#blue3").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 7) {
        let teamtest = document.querySelector("#blue4").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#blue4").src = "photo/6.png";
        } else {
          document.querySelector("#blue4").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 9) {
        let teamtest = document.querySelector("#blue5").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#blue5").src = "photo/6.png";
        } else {
          document.querySelector("#blue5").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }
    }

    // for player 1
    if (x === "Player2") {
      if (randomNum === 1) {
        let teamtest = document.querySelector("#red1").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#red1").src = "photo/6.png";
        } else {
          document.querySelector("#red1").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 3) {
        let teamtest = document.querySelector("#red2").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#red2").src = "photo/6.png";
        } else {
          document.querySelector("#red2").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 5) {
        let teamtest = document.querySelector("#red3").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#red3").src = "photo/6.png";
        } else {
          document.querySelector("#red3").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 7) {
        let teamtest = document.querySelector("#red4").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#red4").src = "photo/6.png";
        } else {
          document.querySelector("#red4").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }

      if (randomNum === 9) {
        let teamtest = document.querySelector("#red5").src.substr(-5,1) ;
        if (teamtest > 8) {
          document.querySelector("#red5").src = "photo/6.png";
        } else {
          document.querySelector("#red5").src = `photo/${parseInt(teamtest)+1}.png`;
        }
      }
    }
    
    // if (randomNum === 1 && x === "Player1") {
    //   if 
    // }
}

// For any better alogrithm or idea
// Please teach me throught the following email
// " thuriyac4@gmail.com"