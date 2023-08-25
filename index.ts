console.log("Mitt fina typeScript-projekt");

// Typer (Explicit typing)
const myNameIs: string = "Amilia";
const myAgeIs: number = 25;
const isStudying: boolean = true;
const myHobbies: string[] = ["Programmering", "läsa"];
const someValue: any = "Hello World";

console.log({ myNameIs, myAgeIs, isStudying, myHobbies });

// Implicit typing
const mySistersName = "Ashikin";
const mySistersAge = 28;

// Loggar vad för datatyp det är med "typeof"
console.log({
    sisterNameType: typeof mySistersName,
    sisterAgeType: typeof mySistersAge, 
});

// Returtyper i funktioner
function getAgeOfTheUniverse(): number {
    return 13.8 * Math.pow(10, 9);
}

const ageOfTheUniverse = getAgeOfTheUniverse();
console.log("Age of the universe is: " + ageOfTheUniverse);

// Parametertyper i funktioner
function calculateDifference(a: number, b: number): number {
    return b - a;
}

console.log(calculateDifference(2, 5));

// Typer är "satta" och går ej att byta
let someName = "Atlas";
// someName = 12; //ERROR: Type 'number' is not assignable to type 'string'

// Interfaces
interface Person {
    name: string
    age?: number // ? = optional, behöver inte sätta age när vi skapar en person
};

const me: Person = { 
    name: "Linus", 
    age: 28 
};

const sister: Person = { 
    name: "Anna" 
}; //Person utan ålder

console.log(me);
console.log(sister);

//Array-typer
const people: string[] = ["Anna"];
people.push("Linus");
people.push("Maria");

console.log(people);

// Enums
enum VersionNumber {
    Development, //0
    Alpha,//1
    Beta, //2
    RC, //3, Release Candidate
    Release //4
}

const currentVersion = VersionNumber.RC;
console.log({ currentVersion });

// Enums med satta värden
enum VersionName {
    Development = "Development",
    Alpha = "Alpha",
    Beta = "Beta",
    RC = "Release Candidate",
    Release = "Release"
}

const currentVersionName = VersionName.RC;
console.log({ currentVersionName });

//Ytterligare enum med satta värden, statuskoder
enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

const statusIs = StatusCodes.Accepted;
console.log( "The status code is " + statusIs );
