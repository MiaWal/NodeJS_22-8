// 1. Sjärntecken
const day = 10;
const month = "february";

if (month == "december"){
                
    if (day < 22)
    console.log("Sagittarius");
    else
    console.log("Capricorn");
}
        
else if (month == "january"){
    if (day < 20)
    console.log("Capricorn");
    else
    console.log("Aquarius");
}
        
else if (month == "february"){
    if (day < 19)
    console.log("Aquarius");
    else
    console.log("Pisces");
}
        
else if(month == "march"){
    if (day < 21) 
    console.log("Pisces");
    else
    console.log("Aries");
}
else if (month == "april"){
    if (day < 20)
    console.log("Aries");
    else
    console.log("taurus");
}
        
else if (month == "may"){
    if (day < 21)
    console.log("Taurus");
    else
    console.log("Gemini");
}
        
else if( month == "june"){
    if (day < 21)
    console.log("Gemini");
    else
    console.log("Cancer");
}
        
else if (month == "july"){
    if (day < 23)
    console.log("Cancer");
    else
    console.log("Leo");
}
        
else if( month == "august"){
    if (day < 23) 
    console.log("Leo");
    else
    console.log("Virgo");
}
        
else if (month == "september"){
    if (day < 23)
    console.log("Virgo");
    else
    console.log("Libra");
}
        
else if (month == "october"){
    if (day < 23)
    console.log("Libra");
    else
    console.log("Scorpio");
}
        
else if (month == "november"){
    if (day < 22)
    console.log("Scorpio");
    else
    console.log("Saggitarius");
}

// 2. Namn-jämförelse

const firstName = "Amilia";
const lastName = "Waloh";

if (firstName == "Anders" && lastName == "And"){
    console.log("Vi har samma namn")
}
else if (firstName == "Anders" && lastName != "And") {
    console.log("Vi har samma förnamn");
    
} 
else if (firstName != "Anders" && lastName == "And") {
    console.log("Vi har samma efternamn");
    
} 
else {
    console.log("Vi har inte samma namn");
}

// 3. Namn-loop
//For of-loop
const names = [
    "Anna",
    "Linus",
    "Pelle",
    "Maria"
]

console.log(names);

for (const name of names) {
    console.log(name + ", ");
}

// 4. Tärning

// input from the user
const min = 1;
const max = 6;

// generating a random number
const a = Math.floor(Math.random() * (max - min + 1)) + min;

// display a random number
console.log(`Random value: ${a}`);

// 5. Summera fil
const fs = require('fs').promises;

async function readFile(filePath) {
    try {
      const data = await fs.readFile(filePath);
      console.log(data.toString());
    } catch (error) {
      console.error(`No numbers`);
    }
  }

 readFile('numbers.txt');

  // 6. Kontrollera nummer
  function checkNumber() {
    const check = "Hej";
    if (isNaN(check)){
        console.log("That's not a number");
    }
    else {
        console.log("It's a number!");
    }
    return check;
}

console.log(checkNumber());

// 7. Kontrollera objekt

const fName = "Amilia";
const lName = "Waloh";
const password = "bajs123";
const age = 25;
const language = "sv-se";

if (fName == "Anders" && lastName == "And"){
    console.log("Vi har samma namn")
}
else if (firstName == "Anders" && lastName != "And") {
    console.log("Vi har samma förnamn");
    
} 
else if (firstName != "Anders" && lastName == "And") {
    console.log("Vi har samma efternamn");
    
} 
else {
    console.log("Vi har inte samma namn");
}

 //
function checkObject(fName, lName, password, age, language) {
    const checkStuff = checkObject();
    if (){
        console.log("That's not a number");
    }
    else { 
        console.log("It's a number!");
    }
    return checkStuff;
}

const checked = checkObject("Amilia", "Waloh", "123bajs", 25, "sv-se");
console.log({ checked });