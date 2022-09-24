const PI = 22/7
function add(a, b){ return a+b}

function div(a, b){
    if (b === 0) return "Cannot divided by zero"
    else return a / b
}

module.exports = {PI, add, div}
