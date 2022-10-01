// Just for animation 
const input = document.querySelector('#input')
const label = document.querySelector('#label')


input.addEventListener('keyup', () => {
  if (input.value != '') {
    label.style.transform = 'translateY(0)'
    label.style.fontSize = '.7em'
  } else {
    label.style.transform = 'translateY(20px)'
    label.style.fontSize = '1em'
  }
}) //end of animation


//Random number generation code
document.querySelector("button").addEventListener("click", getRandomInt)
function getRandomInt(min, max) {
    let num = document.querySelector("#input").value;
    let maxNum = 10 ** (num);
    let randomNum = Math.floor(Math.random() * maxNum);

    function noOfDigitOfRandomNum (n) {
        let count = 0 ;
        if (n >= 1) ++count ;
        while (n/10 >= 1) {
            n /= 10 ;
            ++count
        }
        return count;
    }
    let DigitOfRandomNum =noOfDigitOfRandomNum(randomNum);
    let noOfzero = '0' .repeat(num - DigitOfRandomNum);

    document
        .querySelector("#reply")
        .textContent = "Your random number is " + noOfzero + randomNum;
}

// For any better alogrithm or idea
// Please teach me throught the following email
// " thuriyac4@gmail.com"