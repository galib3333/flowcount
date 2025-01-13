// document.getElementById("count").innerText = 5;
// let lap1 = 1;
// let lap2 = 2;
// let lap3 = 3;
// let lap4 = 4;
// let lap5 = 5;
// let lap6 = 6;
// let lap7 = 7;
// let lap8 = 8;
// let lap9 = 9;
// let lap10 = 10;
// function increment() {


//     let totalLaps = lap1 + lap2 + lap3 + lap4 + lap5 + lap6 + lap7 + lap8 + lap9 + lap10;
//     console.log(totalLaps);
// };
// increment();

// let lapCompleted = 0;

// function lapIncrement() {
//     lapCompleted = lapCompleted + 1;

// };
// lapIncrement();
// lapIncrement();
// lapIncrement();

// console.log(lapCompleted);

// let bonusPoints = 50;
// bonusPoints = bonusPoints + 100;
// bonusPoints = bonusPoints - 25;
// bonusPoints = bonusPoints + 70;

// console.log(bonusPoints);






// let myAge = 28;
// let humanDogRatio = 7;

// let myDogAge = myAge * humanDogRatio;

// console.log(myDogAge);
let countEl = document.getElementById("count-el");
let saveEl = document.getElementById("save-el");
let count = 0;
function increment() {
    count += 1;
    countEl.textContent = count;
}

function save() {   
    let countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = 0;
    count = 0;
}

// let userName = "John";
// let message = "You have three new notifications";
// let messageToUser = message + ", " + userName + "!";
// console.log(messageToUser);

// let name = 45;
// let greeting = "Hi, my name is " + name;
// console.log(greeting);

// let points = 45;
// let bonusPoints = "10";
// let totalPoints = points + bonusPoints;
// console.log(totalPoints);

let welcomeEl = document.getElementById("welcome-el");
let name = "Galib";
let greeting = "Welcome back, " + name + "!";

welcomeEl.innerText = greeting + "👋";