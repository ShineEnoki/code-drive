let randomNum = Math.floor(Math.random() * 10);

console.log(randomNum);

if (randomNum % 2 === 0) {
    randomNum += 1;
}

console.log(randomNum)