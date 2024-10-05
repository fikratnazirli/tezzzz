//1
let myName = "fikrat";
console.log(myName);
//2
let favoriteFruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
console.log(favoriteFruits[0]);
//3
let person = {
    name: "Fikrat",
    age: 10,
    job: "player"
};

console.log(person.job);
//4
function square(number) {
    return number * number;
}

console.log(square(5)); 
//5
for (let i = 1; i <= 10; i++) {
    console.log(i);
}
//6
function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}
//7
let fruits = ["Apple", "Banana", "Cherry"];
fruits.push("Mango");

console.log(fruits);
//8
const pi = 3;
console.log(pi);
//9
const sum = function(a, b) {
    return a + b;
};

console.log(sum(5, 10)); 
//10
let numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(number) {
    console.log(number);
});