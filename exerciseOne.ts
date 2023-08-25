// Stjärntecken

function getZodiacSign(date: Date) {
    const month = date.getMonth() + 1;
    const day = date.getDate();

    let zodiacSign = "";

    switch (month) {
        case 1:
            zodiacSign = (day <= 19) ? "Stenbocken" : "Vattumannen";
            break;
        case 2:
            zodiacSign = (day <= 18) ? "Vattumannen" : "Fiskarna";
            break;
        case 3:
            zodiacSign = (day <= 20) ? "Fiskarna" : "Väduren";
            break;
        case 4:
            zodiacSign = (day <= 20) ? "Väduren" : "Oxen";
            break;
        case 5:
            zodiacSign = (day <= 20) ? "Oxen" : "Tvillingarna";
            break;
        case 6:
            zodiacSign = (day <= 21) ? "Tvillingarna" : "Kräftan";
            break;
        case 7:
            zodiacSign = (day <= 22) ? "Kräftan" : "Lejonet";
            break;
        case 8:
            zodiacSign = (day <= 22) ? "Lejonet" : "Jungfrun";
            break;
        case 9:
            zodiacSign = (day <= 22) ? "Jungfrun" : "Vågen";
            break;
        case 10:
            zodiacSign = (day <= 22) ? "Vågen" : "Skorpionen";
            break;
        case 11:
            zodiacSign = (day <= 22) ? "Skorpionen" : "Skytten";
            break;
        case 12:
            zodiacSign = (day <= 20) ? "Skytten" : "Väduren";
            break;
        default:
            return "Unknown";
    }

    return `${date} ${zodiacSign}`;
}

console.log(getZodiacSign(new Date("1998-04-13")));


// const myBirthday = new Date(1998, 4, 13);

// const result = getZodiacSign(myBirthday);

// const isMonthDecember = (result === "December") ? "YES" : "NO";

// console.log({ result, isMonthDecember });

// Namn-jämförelse

const myName: string = "Mia Mia"
const firstName: string = myName.split(" ")[0];
const lastName: string = myName.split(" ")[1];

if (myName === "Anders And"){
    console.log("Vi har samma namn")
}
else if (firstName === "Anders") {
    console.log("Vi har samma förnamn");
    
} 
else if (lastName === "And") {
    console.log("Vi har samma efternamn");
    
} 
else {
    console.log("Vi har inte samma namn");
}

// Namn-loop

const names = ['Amilia', 'Bob', 'Johan']
const joinedNames = names.join(', ')

console.log(joinedNames);

// Tärning

function rollDice() {
    const randomNumber = Math.random();
    const x = randomNumber * 6;
    const xx = Math.floor(x);
    return xx;

    // return Math.floor(randomNumber * 6) +1;
}

for (let index = 0; index < 1; index++) {
    console.log(rollDice());
}

// Summera fil (ej klar)
import fs from 'fs';

const fileContent = fs.readFileSync('numbers.txt', 'utf8');

// Få ut mappvägen
console.log(__dirname);

console.log(fileContent);

// Kontrollera nummer
function isNumber(value: unknown): boolean {

    const str = String(value);
    const isANumber = !isNaN(parseFloat(str));

    console.log({ value, isANumber });
    
    return isANumber
}

console.log(isNumber(1)); //True
console.log(isNumber('1')); //True
console.log(isNumber('a')); //False
console.log(isNumber('')); //False

// Kontrollera objekt

// interface User {
//     username: string;
//     password: string;
//     age: number;
//     language: string;
// }

// function validateUser(user: User): boolean {
//     // const hasUsername = user.hasOwnProperty('username')
//     const usernameLongerThanSixChars = user.username.length > 6;
//     const passwordLongerThanSixChars = user.password.length > 6;
//     const languageIsSixChars = user.language.length === 6;

//     const validUser = usernameLongerThanSixChars && passwordLongerThanSixChars && languageIsSixChars;

//     // console.log(hasUsername);

//     return validUser;
    
// }

// function validateUser2(user: User): boolean {
//     // return validUser;
    
// }

// const validUser: User = {
//     username: 'Amilia',
//     password: 'Amilia123',
//     age: 25,
//     language: 'sv-se',
// }

// const invalidUser: User = {
//     username: 'ami',
//     password: '123',
//     age: 25,
//     language: 'sv',
// }

// console.log(validateUser(validUser)); //true
// console.log(validateUser(invalidUser)); //false

// console.log(validateUser2(validUser)); //true
// console.log(validateUser2(invalidUser)); //false

// Räkna Trues
function countTruesFilter(arr: boolean[]) {
    const trues = arr.filter(Boolean);

    console.log({trues});
    
    return arr.filter(Boolean).length;
}

console.log(countTruesFilter([true, false, false, true, false]));


