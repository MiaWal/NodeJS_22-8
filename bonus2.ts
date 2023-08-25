// Requires prompt-sync and @types/prompt-sync package to be installed
import promptSync from 'prompt-sync';

const prompt = promptSync();

let account = "Mia";

function myBalance() {
    
}

function switchAccount() {
    
}

function createNewAccount() {
    
}

function chooseAccountMenu() {
    console.clear();
    console.log('==========================');
    console.log(`Current Account: ${account}`);
    console.log('1. My balance');
    console.log('2. Switch account');
    console.log('3. Create new account');
    console.log('4. Exit');

    const selection = prompt('Select alternative: ');
    
    switch (selection) {
        case '1':
            myBalance();
            break;
        case '2':
            switchAccount();
            break;
        case '3':
            createNewAccount();
            break;
        case '4':
            process.exit(0);
            break;
        default:
            process.exit(0);
            break;
    }
}

let balance = 0;

function deposit() {
    const amount = prompt('Enter amount: ');
    balance += parseInt(amount);
}

function withdraw() {
    const amount = prompt('Enter amount: ');
    balance -= parseInt(amount);
}

function mainMenu() {
    console.clear();
    console.log('==========================');
    console.log(`Current balance: ${balance}`);
    console.log('1. Deposit');
    console.log('2. Withdraw');
    console.log('3. Exit');

    const selection = prompt('Select alternative: ');
    
    switch (selection) {
        case '1':
            deposit();
            break;
        case '2':
            withdraw();
            break;
        case '3':
            process.exit(0);
            break;
        default:
            process.exit(0);
            break;
    }
}

while(true){
    chooseAccountMenu();
}

// ts-node bonus2.ts