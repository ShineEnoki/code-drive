function whatIsInAName(collection, source) {
    const arr = [];
    // Only change code below this line
    let sourceKey = Object.keys(source);
    let newArray = collection.filter(item => sourceKey.every(key => item.hasOwnProperty(key) && source[key] ==  item[key]))
  
    // Only change code above this line
    return newArray;
}
console.log(
  whatIsInAName(   [{ first: "Romeo", last: "Montague" }, 
                    { first: "Mercutio", last: null }, 
                    { first: "Tybalt", last: "Capulet" }
                   ], 
                    { last: "Capulet" }
                )
)