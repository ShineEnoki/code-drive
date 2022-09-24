// // let people = [
// //     { name: "Alex" },
// //     { name: "Bob", gender: "M" },
// //     { name: "Tom", gender: "m" },
// //     { name: "Mary", gender: "F" },
// //     ]

// // // let result = people.map(function (person){
// // //     if (person.gender){
// // //         if (person.gender == "m" || person.gender == "M") {
// // //             person.gender = "male"
// // //         } 
// // //         if (person.gender == "f" || person.gender == "F"){
// // //             person.gender = "female"
// // //         }
// // //     } else {person.gender = "unknown"}
//     return person
    
        
// // //     });

// // // console.log(result)

// // result = people.map(function(person){
// //     switch(person.gender){
// //         case "m":
// //         case "M":
// //             person.gender = "male"
// //         break

// //         case "F":
// //         case "f":
// //             person.gender = "female"
// //         break

// //         default:
// //             person.gender = "unknown"
// //     }
// //     return person
// // })
// // console.log(result)

// let user = {
//     name : "NIKO",
//     age  : 17
// }

// let id = user.age >= 18 ? "authorize" : "unauthorize"
// console.log(id)

// let count = 0
// while (count < 3 ){
//     console.log(count)
//     count += 0.5
// }

// class Car{
//     color = "red"
//     noOfWheel = 4
//     drive() {
//         console.log("I'm driving")
//     }
// }

// class Calculator{
//     static Pi = 22/7
//     static add(a,b) {
//         return a + b
//     }
// }


// console.log(Calculator.Pi)

// let c = new Calculator
// console.log(c.Pi)

// class Animal{
//     constructor(name,leg){
//         this.name = name
//         this.leg = leg
//     }
//     run(){
//         console.log(`${this.name} is running`)
//     }
// }

// class Dog extends Animal{
//     bark(){
//         console.log(`${this.name} is barking woof woof....`)
//     }
// }

// let Jn = new Dog("Jorni",4)
// Jn.run()
// console.log(Jn.leg)
// Jn.bark()

// class Cat extends Animal{
//     constructor (name,leg,color){
//         super(name)
//         this.leg = leg
//         this.color = color
//     }
//     shout(){
//         console.log(`${this.name} is shouting meow meow..`)
//     }
// }

// let Ch = new Cat("Chi Chi",4,"red")
// Ch.run()
// console.log(Ch.leg)
// console.log(Ch.name)
// console.log(Ch.color)


function add1k(){
    let result = 0
    for (let i = 0;i <= 1000;i++){
        result += i
    }
    return result
}
// Promise
// function add1kLater(){
//     return new Promise((resolve,reject) => {
//         let result = add1k()
//         if (result) resolve(result)
//         else reject()
//     })
// }

// async and await
async function add1kLater(){
    let re = await add1k()
    console.log(re)
}
console.log("some processes")
// Promise
// add1kLater()
//     .then( result => console.log(result) )
//     .catch( _ => console.log("Error Plz try again"))
add1kLater()
console.log("more processes")

fetch("https://api.covid19api.com/summary")
.then(res => res.json())
.then(data => {
const global = data.Global
const allCountries = data.Countries
const myanmar = allCountries.find(c => c.Country === "Myanmar")
console.log("Global:", global, "Myanmar:", myanmar)
})