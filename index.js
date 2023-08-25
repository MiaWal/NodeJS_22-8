console.log("Hello World!")

//variabler
const myName = "Amilia"
console.log(myName);

//objekt, fler variabler i ett objekt
const mySister = {
    name: "Ashikin",
    age: 28
}
console.log(mySister);
console.log({myName});

// Operatiorer
const sum = 10 + 5;
const difference = 10 - 5;
const product = 8 * 4;
const fraction = 8 / 5;
// Med måsvingar i console.log visas classnamnen i output
console.log({ sum, difference, product, fraction });

// if, else if, & if
const myAge = 22;

if (myAge < 16) {
    console.log("Du är för ung för att köra bil");
}
else if (myAge < 18) {
    console.log("Du får övningsköra");
} 
else {
    console.log("Du får köra bil");
}

// While loop
let wowCounter = 0;

while (wowCounter < 2) {
    console.log("wow");
    wowCounter++;
}

console.log(`Nu är wowCounter ${wowCounter}`);

// For-loop
for (let i = 0; i < 3; i++ ) {
    console.log(`Nu är i ${i}`);
}

//For of-loop
const names = [
    "Anna",
    "Linus",
    "Pelle",
    "Maria"
]

for (const name of names) {
    console.log(name);
}

// For in loop
const scoreBoard = {
    Linus: 10,
    Anna: 20,
    Pelle: 15,
    Maria: 25
};

for (const name in scoreBoard) {
    const score = scoreBoard[name];
    console.log(`${name} score is ${score}`);
}

// Funktioner
function calculateSum(a, b) {
    const sum = a+b;
    return sum;
}

const largeSum = calculateSum(100, 500);
console.log({ largeSum });

//Arrow-funktioner
const calculateProduct = (a, b) => {
    const product = a*b;
    return product;
}

const largeProduct = calculateProduct(500, 4);
console.log({ largeProduct });