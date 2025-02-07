
//Condotionals
// An if loop checks if something is true or false, and 
//commits an action based on the response
// let alder = 16;

// if(alder >= 18) {
//     console.log("Du er gammel nok til [ komme inn!")
// }

// An if-else checks if something is true or false and commits
// an action based on the response, but one can give differing
// actions based on whether the outcome is true or false
// if( alder >= 18) {
//     console.log("Du slipper inn")
// } else {
//     console.log("Du er ikke gammel nok!")
// }

// An if-else if-else checks multiple conditions. It should be noted
//that this specific loop type has a default condition, which is listed
//in the final else-part of the loop. This ensures that if all the other
// conditions fail, the default will still complete.
// let age = 20;
// let name = "Hans";

// if(age === 18)
// {
//     console.log("Du er gammel nok!")
// } else if (age === 16){
//     console.log("Du er ikke gammel nok")
// } else{
//     console.log("Try again!")
// }

// This shows how to use if-else-if-else to loop through an object
// let bruker = {
//     navn: "Ole",
//     alder: 25,
//     by: "Oslo"
// } 

// if(bruker.name === "John"){
//     console.log("Welcome, John")
// } else if (bruker.name === "Ole" && bruker.age === 30){
//     console.log("Hei Ole, du er 30!")
// } else if (bruker.name === "Ole" || 
//     bruker.by === "Bergen") {
//         console.log("Welcome, Ole!")
//     } else {
//         console.log("Wrong user input")
//     }
// 

// to comment out larger sections in vsCode, mark the sections and use ctrl+*
// ternary operator
// a ternary operator is a short and easy way to check for \
//true or false. You basically ask Javascript a question, and give it 
// options to check. 
let name = " Ida ";
let age = 20;

let melding = age >= 18 ? "Du er voksen" : "Du er barn";
let finalMessage = melding + name
console.log(finalMessage);

let num = 10;

if(num > 0) {
    console.log("The number is positive")
}

let number = 20;

if (number % 2 === 0){
    console.log("The number is even")
} else {
    console.log("The number is odd")
}


let score = 85;

if( score >= 90){
    console.log("Grade A")
} else if ( score >= 80) {
    console.log("Grade B")
} else if ( score >= 70) {
    console.log("Grade C")
} else {
    console.log("Grade F")
}

let userAge = 18;
let status = userAge >= 18 ? "Adult" : "Child"
console.log(status) 

let numberVariable = -5;

let result = numberVariable > 0  ? "Positive" : numberVariable < 0 ? "Negative" : numberVariable === 1 ? "One" : numberVariable === 3? "Three" : "Zero"
console.log(result)


let fruits = ["Apple", "Banana", "Peach", "Kiwi", "Pineapple", "Orange"]

// let searchFruits = "Lemon";

// if(fruits.includes(searchFruits)){
//     console.log(`${searchFruits} is in the array`)
// } else {
//     console.log(`${searchFruits} is not in the array`)
// }

if(fruits.length === 0){
    console.log("Your fruit basket is empty")
} else if ( fruits.length < 3) {
    console.log("You only have a few fruits in your basket")
} else {
    console.log("Your fruit basket is full!")
}

let oddOrEven = [1, 2, 3, 4, 5, 6]

for (let i = 0; i  < oddOrEven.length; i++) {
    if(oddOrEven[i] % 2 === 0) {
        console.log(`${oddOrEven[i]} is even`)
    } else {
        console.log(`${oddOrEven[i]} is odd`)
    }
} 